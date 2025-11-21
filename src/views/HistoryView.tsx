import React, { useState, useEffect } from 'react';
import { useStats } from '../contexts/StatsContext';
import { ExamResult } from '../types';
import { ChevronLeftIcon, HistoryIcon, CheckCircleIcon, XCircleIcon, ChevronRightIcon, SparklesIcon, LightBulbIcon } from '../components/Icons';

export interface HistoryViewProps {
  onBack: () => void;
  initialReviewResult?: ExamResult | null;
}

export const HistoryView: React.FC<HistoryViewProps> = ({ onBack, initialReviewResult }) => {
  const { history } = useStats();
  const [reviewData, setReviewData] = useState<ExamResult | null>(null);

  // Se recebermos um resultado inicial (vindo da tela de resultados), abrimos logo
  useEffect(() => {
    if (initialReviewResult) {
      setReviewData(initialReviewResult);
    }
  }, [initialReviewResult]);

  if (reviewData) {
    return (
      <div className="max-w-3xl mx-auto animate-fade-in pt-10 pb-20">
         <button onClick={() => setReviewData(null)} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
           <ChevronLeftIcon className="w-5 h-5" /> Voltar ao Histórico
         </button>
         <h2 className="text-2xl font-bold mb-6">Revisão de Erros</h2>
         
         {reviewData.mistakes.length === 0 ? (
           <div className="bg-green-50 p-8 rounded-2xl text-center text-green-800 border border-green-100">
             <SparklesIcon className="w-12 h-12 mx-auto mb-4 text-green-500" />
             <h3 className="text-xl font-bold mb-2">Perfeito!</h3>
             <p>Não errou nenhuma pergunta neste exame.</p>
           </div>
         ) : (
           <div className="space-y-6">
             {reviewData.mistakes.map((mistake, idx) => (
               <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                  <div className="ml-2">
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">{mistake.question.category}</span>
                     <h3 className="font-bold text-lg text-gray-900 mb-4">{mistake.question.text}</h3>
                     
                     <div className="space-y-3">
                       <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                         <span className="text-xs text-red-500 font-bold block mb-1">A sua resposta (Incorreta):</span>
                         <div className="flex items-center gap-2 text-red-900">
                           <XCircleIcon className="w-5 h-5 shrink-0" />
                           {mistake.selectedAnswer}
                         </div>
                       </div>
                       
                       <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                         <span className="text-xs text-green-600 font-bold block mb-1">Resposta Correta:</span>
                         <div className="flex items-center gap-2 text-green-900">
                           <CheckCircleIcon className="w-5 h-5 shrink-0" />
                           {mistake.question.options[mistake.question.correctIndex]}
                         </div>
                       </div>

                       {/* Explicação Adicional */}
                       {mistake.question.explanation && (
                         <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100 flex gap-3 items-start">
                            <LightBulbIcon className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                            <div>
                                <span className="text-xs text-indigo-600 font-bold block mb-1">Explicação:</span>
                                <p className="text-sm text-indigo-800 leading-relaxed">{mistake.question.explanation}</p>
                            </div>
                         </div>
                       )}
                     </div>
                  </div>
               </div>
             ))}
           </div>
         )}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in pt-20 pb-10">
       <button onClick={onBack} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
          <ChevronLeftIcon className="w-5 h-5" /> Voltar ao Menu
       </button>
       <h2 className="text-3xl font-bold mb-8">Histórico de Exames</h2>
       {history.length === 0 ? (
         <div className="text-center py-12 bg-white rounded-3xl border border-gray-200">
           <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
             <HistoryIcon className="w-8 h-8 text-gray-400" />
           </div>
           <p className="text-gray-500">Ainda não realizou nenhum exame.</p>
         </div>
       ) : (
         <div className="space-y-4">
           {history.map((result) => (
             <div key={result.id} onClick={() => setReviewData(result)} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-md cursor-pointer transition-all flex flex-col sm:flex-row justify-between items-center gap-4 group">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className={`p-3 rounded-full ${result.passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {result.passed ? <CheckCircleIcon className="w-6 h-6" /> : <XCircleIcon className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{new Date(result.date).toLocaleDateString()} <span className="text-xs font-normal text-gray-400">{new Date(result.date).toLocaleTimeString()}</span></div>
                    <div className="text-sm text-gray-500">{result.userName}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{result.score}<span className="text-sm text-gray-400">/{result.total}</span></div>
                    <div className={`text-xs font-bold uppercase ${result.passed ? 'text-green-600' : 'text-red-600'}`}>{result.passed ? 'Aprovado' : 'Reprovado'}</div>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-gray-300 group-hover:text-indigo-600" />
                </div>
             </div>
           ))}
         </div>
       )}
    </div>
  );
};