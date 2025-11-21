import { MOCK_QUESTIONS } from '../constants';
import { Question, ExamResult, EXAM_CONFIG } from '../types';

// Utility to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const generateExam = (): Question[] => {
  // Group by category to ensure balance
  const categories: Record<string, Question[]> = {};
  MOCK_QUESTIONS.forEach(q => {
    const cat = q.category || "Geral";
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(q);
  });

  let selectedQuestions: Question[] = [];
  const requiredPerCategory = Math.floor(EXAM_CONFIG.TOTAL_QUESTIONS / Object.keys(categories).length);
  let remaining = EXAM_CONFIG.TOTAL_QUESTIONS;

  // 1. Select balanced amount per category
  Object.keys(categories).forEach(cat => {
    const shuffledCat = shuffleArray(categories[cat]);
    const count = Math.min(requiredPerCategory, shuffledCat.length);
    selectedQuestions.push(...shuffledCat.slice(0, count));
    remaining -= count;
  });

  // 2. Fill remainder randomly from unused questions
  if (remaining > 0) {
    const usedIds = new Set(selectedQuestions.map(q => q.id));
    const unusedQuestions = MOCK_QUESTIONS.filter(q => !usedIds.has(q.id));
    const shuffledUnused = shuffleArray(unusedQuestions);
    selectedQuestions.push(...shuffledUnused.slice(0, remaining));
  }

  // 3. Final shuffle of questions AND shuffle options within each question
  // This ensures "Option A" isn't always the correct answer even if the question repeats
  return shuffleArray(selectedQuestions).map(q => ({
    ...q,
    options: shuffleArray([...q.options])
  }));
};

const STORAGE_KEY = 'tvde_exam_history_v1';

export const saveExamResult = (result: ExamResult): void => {
  const currentHistory = getExamHistory();
  const newHistory = [result, ...currentHistory];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
};

export const getExamHistory = (): ExamResult[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};