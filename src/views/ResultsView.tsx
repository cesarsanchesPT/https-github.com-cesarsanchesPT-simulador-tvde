import React from 'react';
import { ExamResult } from '../types';
import { CheckCircleIcon, XCircleIcon, EyeIcon, EnvelopeIcon, HistoryIcon, PlayIcon, LightBulbIcon, ChartBarIcon } from '../components/Icons';

interface ResultsViewProps {
  result: ExamResult;
  onReview: () => void;
  onHome: () => void;
  onHistory: () => void;
  onRetry: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ result, onReview, onHome, onHistory, onRetry }) => {
  const percentage = Math.round((result.score / result.total) * 100);

  // Calcular categoria com mais erros
  const mistakesByCategory = result.mistakes.reduce((acc, mistake) => {
    const cat = mistake.question.category || 'Geral';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const worstCategory = Object.entries(mistakesByCategory).sort(([,a], [,b]) => b - a)[0];
  const [categoryName, errorCount] = worstCategory || [null, 0];

  const shareResultByEmail = () => {
    const subject = `Resultado Exame TVDE: ${result.passed ? 'APROVADO' : 'REPROVADO'}`;
    const body = `
Olá,

Aqui está o resultado do meu exame simulado TVDE:

Nome: ${result.userName}
Data: ${new Date(result.date).toLocaleString()}
Resultado Final: ${result.passed ? 'APROVADO' : 'REPROVADO'}
Pontuação: ${result.score} de ${result.total} (${percentage}%)

Este teste foi realizado através do Simulador TVDE Pro.
    `;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="max-w-3xl mx-auto text-center animate-slide-up pb-10">
      <div className={`inline-block p-4 rounded-full mb-6 ${result.passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
        {result.passed ? <CheckCircleIcon className="w-16 h-16" /> : <XCircleIcon className="w-16 h-16" />}
      </div>

      <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
        {result.passed ? 'Parabéns! Aprovado' : 'Não foi desta vez'}
      </h2>
      <p className="text-gray-500 mb-8">
        {result.passed
          ? `Excelente desempenho, ${result.userName}! Você dominou o conteúdo.`
          : `Continue a estudar, ${result.userName}. A prática leva à perfeição.`}
      </p>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mb-8">
            <div className="text-center">
              <div className="text-5xl font-black text-gray-900 mb-1">{result.score}<span className="text-2xl text-gray-400">/{result.total}</span></div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Pontuação</div>
            </div>
            <div className="w-px h-16 bg-gray-200 hidden sm:block"></div>
            <div className="text-center">
              <div className={`text-5xl font-black mb-1 ${result.passed ? 'text-green-600' : 'text-red-600'}`}>
                {percentage}%
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Percentagem</div>
            </div>
          </div>

          {/* Análise de Desempenho Rápida */}
          {categoryName && errorCount > 0 && (
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 mb-8 text-left flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-600 shrink-0">
                <LightBulbIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">Área de Melhoria</h4>
                <p className="text-gray-600 text-sm">
                  Notámos que teve mais dificuldades em <span className="font-bold text-orange-700">{categoryName}</span> ({errorCount} erros). 
                  Sugerimos rever este módulo antes do próximo exame.
                </p>
              </div>
            </div>
          )}

          {result.mistakes.length === 0 && (
             <div className="bg-green-50 border border-green-100 rounded-2xl p-4 mb-8 text-left flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-lg text-green-600 shrink-0">
                <ChartBarIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">Desempenho Perfeito</h4>
                <p className="text-gray-600 text-sm">
                  Não cometeu nenhum erro! Está preparado para o exame oficial.
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button
              onClick={onReview}
              className="w-full bg-white border-2 border-indigo-100 hover:border-indigo-600 text-indigo-700 hover:bg-indigo-50 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <EyeIcon className="w-5 h-5" />
              Rever Respostas Erradas
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={shareResultByEmail}
                className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Enviar Email
              </button>
              <button
                onClick={onHistory}
                className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <HistoryIcon className="w-5 h-5" />
                Histórico
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
          <button
            onClick={onHome}
            className="text-gray-500 hover:text-gray-900 font-medium text-sm"
          >
            Voltar ao Menu Principal
          </button>
        </div>
      </div>

      <button
        onClick={onRetry}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
      >
        <PlayIcon className="w-6 h-6" />
        Realizar Novo Teste
      </button>
    </div>
  );
};