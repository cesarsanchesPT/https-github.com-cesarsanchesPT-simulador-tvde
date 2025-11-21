
import React from 'react';
import { Question, ExamMode, AnswerRecord } from '../types';
import { CheckCircleIcon, XCircleIcon, LightBulbIcon, SpeakerWaveIcon } from './Icons';

interface QuestionCardProps {
  question: Question;
  mode: ExamMode;
  answer?: AnswerRecord;
  onSelectOption: (idx: number) => void;
  isReviewing?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  mode,
  answer,
  onSelectOption,
  isReviewing = false
}) => {
  const isStudy = mode === 'STUDY';
  const showFeedback = isStudy || isReviewing;
  
  const speak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(`${question.text}. Opções: ${question.options.join('. ')}`);
      u.lang = 'pt-PT';
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden p-6 sm:p-10 relative">
      {/* Categoria Badge */}
      <div className="flex justify-between items-start mb-8">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 uppercase tracking-wider border border-indigo-100">
          {question.category}
        </span>
        <button onClick={speak} className="text-gray-300 hover:text-indigo-600 bg-gray-50 hover:bg-indigo-50 p-2 rounded-full transition-colors">
          <SpeakerWaveIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Pergunta */}
      <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-relaxed mb-10">
        {question.text}
      </h3>

      {/* Opções */}
      <div className="space-y-4">
        {question.options.map((opt, idx) => {
          const isSelected = answer?.selectedOptionIndex === idx;
          const isCorrect = question.correctIndex === idx;
          
          let btnClass = "border-gray-200 bg-white hover:border-indigo-300 hover:bg-gray-50 shadow-sm";
          let letterClass = "bg-gray-100 text-gray-500 border-gray-200";
          let textClass = "text-gray-700";

          if (showFeedback && answer) {
            if (isCorrect) {
              btnClass = "border-green-500 bg-green-50 ring-1 ring-green-500 shadow-green-100";
              letterClass = "bg-green-500 text-white border-green-500";
              textClass = "text-green-900 font-bold";
            } else if (isSelected && !isCorrect) {
              btnClass = "border-red-500 bg-red-50 ring-1 ring-red-500 shadow-red-100";
              letterClass = "bg-red-500 text-white border-red-500";
              textClass = "text-red-900 font-bold";
            } else {
              btnClass = "border-gray-100 opacity-50 bg-gray-50";
            }
          } else if (isSelected) {
            btnClass = "border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600 shadow-indigo-100";
            letterClass = "bg-indigo-600 text-white border-indigo-600";
            textClass = "text-indigo-900 font-bold";
          }

          return (
            <button
              key={idx}
              onClick={() => onSelectOption(idx)}
              disabled={isReviewing || (isStudy && !!answer)}
              className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex items-center gap-5 group ${btnClass}`}
            >
              <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${letterClass}`}>
                {String.fromCharCode(65+idx)}
              </div>
              <span className={`text-base sm:text-lg leading-snug ${textClass}`}>
                {opt}
              </span>
              
              {/* Icons Status (Study Mode) */}
              {showFeedback && answer && (
                <div className="ml-auto">
                  {isCorrect && <CheckCircleIcon className="w-6 h-6 text-green-600" />}
                  {isSelected && !isCorrect && <XCircleIcon className="w-6 h-6 text-red-600" />}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Explicação (Modo Estudo) */}
      {showFeedback && answer && (
        <div className={`mt-8 p-6 rounded-2xl border-l-4 animate-fade-in ${answer.isCorrect ? 'bg-green-50 border-green-500' : 'bg-orange-50 border-orange-500'}`}>
          <div className="flex items-start gap-4">
             <div className={`p-2 rounded-lg ${answer.isCorrect ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                <LightBulbIcon className="w-6 h-6" />
             </div>
             <div>
               <h4 className={`font-black text-lg mb-2 ${answer.isCorrect ? 'text-green-900' : 'text-orange-900'}`}>
                 {answer.isCorrect ? 'Muito bem!' : 'Explicação Essencial'}
               </h4>
               <p className="text-gray-700 leading-relaxed">
                 {question.explanation || "A resposta correta é baseada na legislação atual em vigor."}
               </p>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
