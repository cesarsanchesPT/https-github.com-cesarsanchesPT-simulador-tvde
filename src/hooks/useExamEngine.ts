
import { useState, useEffect, useCallback } from 'react';
import { Question, ExamSession, ExamMode, AnswerRecord } from '../types';
import { generateUUID } from '../utils';

interface UseExamEngineProps {
  questions: Question[];
  mode: ExamMode;
  categoryId: string;
  durationMinutes: number;
  onComplete: (session: ExamSession) => void;
}

export const useExamEngine = ({
  questions,
  mode,
  categoryId,
  durationMinutes,
  onComplete
}: UseExamEngineProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerRecord>>({});
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
  const [isFinished, setIsFinished] = useState(false);

  // Timer logic
  useEffect(() => {
    if (mode === 'STUDY' || isFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mode, isFinished]);

  const selectAnswer = (optionIndex: number) => {
    if (isFinished && mode === 'EXAM') return;

    const currentQ = questions[currentIndex];
    const isCorrect = currentQ.correctIndex === optionIndex;

    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: {
        questionId: currentQ.id,
        selectedOptionIndex: optionIndex,
        isCorrect,
        timestamp: Date.now()
      }
    }));
  };

  const finishExam = useCallback(() => {
    setIsFinished(true);
    
    // Calculate score
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id]?.isCorrect) score++;
    });

    // Create session record
    const session: ExamSession = {
      id: generateUUID(),
      categoryId,
      mode,
      startTime: Date.now() - ((durationMinutes * 60 - timeLeft) * 1000),
      endTime: Date.now(),
      answers,
      questions,
      score,
      passed: false // Logic to determine pass depends on config, handled by caller or here if config passed
    };

    onComplete(session);
  }, [answers, questions, categoryId, mode, timeLeft]);

  return {
    currentQuestion: questions[currentIndex],
    currentIndex,
    totalQuestions: questions.length,
    answers,
    timeLeft,
    isFinished,
    nextQuestion: () => setCurrentIndex(prev => Math.min(prev + 1, questions.length - 1)),
    prevQuestion: () => setCurrentIndex(prev => Math.max(prev - 1, 0)),
    jumpToQuestion: (index: number) => setCurrentIndex(index),
    selectAnswer,
    finishExam
  };
};
