
import React, { useState } from 'react';
import { Question } from '../types';
import { MOCK_QUESTIONS } from '../constants';
import Confetti from '../components/Confetti';
import { ChevronLeftIcon, Squares2X2Icon, BookOpenIcon, ChevronRightIcon, CheckCircleIcon, XCircleIcon, LightBulbIcon, ArrowPathIcon, PlayIcon, ChartBarIcon } from '../components/Icons';

interface StudyViewProps {
  onBack: () => void;
}

// Helper para converter Mock para Question
const getStudyQuestions = (category: string): Question[] => {
  const mapped: Question[] = MOCK_QUESTIONS.map(lq => {
    let correctIndex = lq.options.indexOf(lq.correct);
    if (correctIndex === -1) correctIndex = 0;
    return {
      id: lq.id,
      text: lq.question,
      options: lq.options,
      correctIndex,
      category: lq.category,
      explanation: 'Resposta baseada nos manuais oficiais e legislação em vigor.'
    };
  });

  if (category === 'Todos') return mapped.sort(() => Math.random() - 0.5);
  
  return mapped.filter(q => {
     let cat = q.category || "Geral";
     // Normalização de categorias
     if (cat.includes('Lei') || cat.includes('Regulamento')) cat = 'Lei TVDE';
     else if (cat.includes('Mecânica') || cat.includes('Eco')) cat = 'Mecânica e Eco-condução';
     else if (cat.includes('Socorro') || cat.includes('Segurança')) cat = 'Segurança e Socorro';
     else if (cat.includes('Comunicação') || cat.includes('Turismo') || cat.includes('Inglês')) cat = 'Comunicação e Turismo';
     else cat = 'Código da Estrada';
     
     return cat === category;
  }).sort(() => Math.random() - 0.5);
};

export const StudyView: React.FC<StudyViewProps> = ({ onBack }) => {
  const [category, setCategory] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  
  // Novos estados para gamificação
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const categories = [
    'Todos', 'Lei TVDE', 'Código da Estrada', 
    'Comunicação e Turismo', 'Mecânica e Eco-condução', 'Segurança e Socorro'
  ];

  const startSession = (cat: string) => {
    const qs = getStudyQuestions(cat);
    if (qs.length === 0) {
      alert("Sem perguntas disponíveis para esta categoria.");
      return;
    }
    setQuestions(qs);
    setCategory(cat);
    setIndex(0);
    setAnswer(null);
    setScore(0);
    setIsFinished(false);
  };

  const restartSession = () => {
    if (category) {
       // Se estiver no início ou já tiver acabado, não pergunta
       if (index === 0 || isFinished || window.confirm("Deseja reiniciar e baralhar as perguntas? O progresso atual será perdido.")) {
         startSession(category);
       }
    }
  };

  const handleAnswer = (optionIdx: number) => {
    setAnswer(optionIdx);
    if (optionIdx === questions[index].correctIndex) {
      setScore(s => s + 1);
    }
  };

  // MENU MODE
  if (!category) {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in pt-20 pb-10 px-4">
         <button onClick={onBack} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
            <ChevronLeftIcon className="w-5 h-5" /> Voltar ao Menu
         </button>
         <div className="text-center mb-10">
           <h2 className="text-3xl font-bold text-gray-900 mb-2">Modo de Estudo</h2>
           <p className="text-gray-500">Escolha um tema específico para praticar sem pressão de tempo.</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => startSession(cat)}
                className="bg-white hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 p-6 rounded-2xl text-left transition-all hover:shadow-md group"
              >
                <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform">
                   {cat === 'Todos' ? <Squares2X2Icon className="w-6 h-6" /> : <BookOpenIcon className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700">{cat}</h3>
              </button>
            ))}
         </div>
      </div>
    );
  }

  // SUMMARY MODE (COMPLETION)
  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    const isGood = percentage >= 70;

    return (
      <div className="max-w-2xl mx-auto animate-slide-up pt-10 pb-20 px-4 text-center">
        {isGood && <Confetti />}
        
        <div className={`inline-block p-4 rounded-full mb-6 ${isGood ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
           {isGood ? <CheckCircleIcon className="w-16 h-16" /> : <ChartBarIcon className="w-16 h-16" />}
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-2">Sessão Concluída!</h2>
        <p className="text-gray-500 mb-8">
          Você completou o módulo de <span className="font-bold text-gray-700">{category}</span>.
        </p>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-8">
           <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2">Sua Pontuação</div>
           <div className="text-5xl font-black text-gray-900 mb-2">
             {score} <span className="text-2xl text-gray-400">/ {questions.length}</span>
           </div>
           <div className={`text-lg font-medium ${isGood ? 'text-green-600' : 'text-orange-600'}`}>
             {percentage}% de acerto
           </div>
           
           <div className="mt-6 p-4 bg-gray-50 rounded-xl text-gray-600 text-sm leading-relaxed">
             {isGood 
               ? "Excelente trabalho! Domina bem este tópico. Continue assim." 
               : "Bom esforço! Sugerimos rever este tópico mais algumas vezes para consolidar o conhecimento."}
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <button 
             onClick={restartSession}
             className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2"
           >
             <ArrowPathIcon className="w-5 h-5" /> Repetir Categoria
           </button>
           <button 
             onClick={() => setCategory(null)}
             className="bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-700 px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
           >
             <Squares2X2Icon className="w-5 h-5" /> Escolher Outro Tema
           </button>
        </div>
      </div>
    );
  }

  // SESSION MODE
  const q = questions[index];
  const isAnswered = answer !== null;
  const isCorrect = answer === q.correctIndex;
  const progress = questions.length > 0 ? ((index + 1) / questions.length) * 100 : 0;

  return (
    <div className="max-w-3xl mx-auto animate-fade-in pt-6 pb-20 px-4">
      {/* Header da Sessão */}
      <div className="flex justify-between items-center mb-4 sticky top-20 z-20 bg-[#f8fafc] py-2">
        <button onClick={() => setCategory(null)} className="text-gray-500 hover:text-gray-900 flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
           <ChevronLeftIcon className="w-4 h-4" /> Sair
        </button>
        
        <div className="flex items-center gap-2">
           <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
              <CheckCircleIcon className="w-3 h-3" /> {score} Acertos
           </div>
           <span className="bg-gray-100 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg truncate max-w-[150px]">
              {category}
           </span>
           <button onClick={restartSession} className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Reiniciar">
              <ArrowPathIcon className="w-5 h-5" />
           </button>
        </div>
      </div>

      {/* Barra de Progresso */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-6 overflow-hidden">
         <div className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden p-6 sm:p-8 mb-6">
         <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900 leading-relaxed">{q.text}</h3>
            <span className="text-xs font-mono text-gray-400 shrink-0 ml-4 mt-1">{index + 1}/{questions.length}</span>
         </div>

         <div className="space-y-3">
           {q.options.map((opt, idx) => {
             const isSel = answer === idx;
             const isRight = idx === q.correctIndex;
             
             let style = 'border-gray-100 hover:bg-gray-50';
             let iconStyle = 'bg-gray-100 text-gray-500';
             let textClass = 'text-gray-700';
             
             if (isAnswered) {
               if (isRight) { 
                  style = 'border-green-200 bg-green-50'; 
                  iconStyle = 'bg-green-500 text-white'; 
                  textClass = 'font-medium text-gray-900';
               }
               else if (isSel) { 
                  style = 'border-red-200 bg-red-50'; 
                  iconStyle = 'bg-red-500 text-white'; 
               }
               else style = 'border-gray-100 opacity-50';
             }

             return (
               <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleAnswer(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 flex items-center gap-4 transition-all ${style}`}
               >
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${iconStyle} shrink-0`}>
                   {String.fromCharCode(65 + idx)}
                 </div>
                 <span className={`flex-1 text-base ${textClass}`}>
                   {opt}
                 </span>
                 {isAnswered && isRight && <CheckCircleIcon className="w-6 h-6 text-green-500 shrink-0" />}
                 {isAnswered && isSel && !isRight && <XCircleIcon className="w-6 h-6 text-red-500 shrink-0" />}
               </button>
             );
           })}
         </div>

         {isAnswered && (
           <div className={`mt-6 p-4 rounded-xl flex items-start gap-3 animate-fade-in ${isCorrect ? 'bg-green-50 text-green-800 border border-green-100' : 'bg-indigo-50 text-indigo-800 border border-indigo-100'}`}>
              {isCorrect ? <CheckCircleIcon className="w-5 h-5 mt-0.5 text-green-600" /> : <LightBulbIcon className="w-5 h-5 mt-0.5 text-indigo-600" />}
              <div>
                <p className="font-bold text-sm uppercase tracking-wide mb-1">{isCorrect ? 'Correto!' : 'Sabia que...'}</p>
                <p className="text-sm leading-relaxed">{q.explanation}</p>
              </div>
           </div>
         )}
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => {
            if (index < questions.length - 1) {
              setIndex(prev => prev + 1);
              setAnswer(null);
            } else {
              setIsFinished(true);
            }
          }}
          disabled={!isAnswered}
          className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg transform active:scale-95 ${
            isAnswered 
             ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:-translate-y-0.5' 
             : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {index < questions.length - 1 ? 'Próxima' : 'Concluir'} <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
