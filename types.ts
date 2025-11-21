export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  category: string;
  imageUrl?: string; // Support for images (traffic signs, diagrams)
}

export interface AnswerRecord {
  question: Question;
  selectedAnswer: string;
  isCorrect: boolean;
}

export interface ExamResult {
  id: string;
  userName: string;
  date: string;
  score: number;
  total: number;
  passed: boolean;
  isTimeout: boolean;
  mistakes: AnswerRecord[];
}

export interface InfoModule {
  id: string;
  title: string;
  icon: string;
  description: string;
  content: {
    title: string;
    text: string[];
  }[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'Geral' | 'Financeiro' | 'Legal' | 'Operacional';
}

export enum AppView {
  HOME = 'HOME',
  EXAM = 'EXAM',
  RESULTS = 'RESULTS',
  HISTORY = 'HISTORY',
  REVIEW = 'REVIEW',
  STUDY_MENU = 'STUDY_MENU',
  STUDY_SESSION = 'STUDY_SESSION',
  INFO_MENU = 'INFO_MENU',
  INFO_DETAIL = 'INFO_DETAIL',
  FAQ_MENU = 'FAQ_MENU'
}

export const EXAM_CONFIG = {
  TOTAL_QUESTIONS: 30,
  PASS_SCORE: 27,
  DURATION_MINUTES: 60
};