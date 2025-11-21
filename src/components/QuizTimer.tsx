
import React, { useEffect } from 'react';
import { ClockIcon } from './Icons';

interface QuizTimerProps {
  secondsLeft: number;
  setSecondsLeft: React.Dispatch<React.SetStateAction<number>>;
  onTimeUp: () => void;
}

const QuizTimer: React.FC<QuizTimerProps> = ({ secondsLeft, setSecondsLeft, onTimeUp }) => {
  useEffect(() => {
    if (secondsLeft <= 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft, onTimeUp, setSecondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isLowTime = secondsLeft < 60;

  return (
    <div className={`flex items-center gap-2 font-mono text-xl font-bold px-4 py-2 rounded-full border ${
      isLowTime ? 'bg-red-50 text-red-600 border-red-200 animate-pulse' : 'bg-indigo-50 text-indigo-700 border-indigo-100'
    }`}>
      <ClockIcon className="w-5 h-5" />
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

export default QuizTimer;
