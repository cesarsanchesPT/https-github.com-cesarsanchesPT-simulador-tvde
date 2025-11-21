
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { FAQ } from '../types';
import { TVDE_FAQS } from '../constants';
import { ChevronLeftIcon, PaperAirplaneIcon, SparklesIcon, ChevronDownIcon, ChevronUpIcon } from '../components/Icons';

interface FAQViewProps {
  onBack: () => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ onBack }) => {
  const [search, setSearch] = useState('');
  const [isAsking, setIsAsking] = useState(false);
  const [dynamicFAQs, setDynamicFAQs] = useState<FAQ[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('tvde_dynamic_faqs');
    if (stored) setDynamicFAQs(JSON.parse(stored));
  }, []);

  const handleAskAI = async () => {
    if (!search.trim()) return;
    setIsAsking(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
      Atue EXCLUSIVAMENTE como um formador profissional e especialista em TVDE (Transporte Individual e Remunerado de Passageiros) em Portugal.
      O seu objetivo é esclarecer dúvidas de motoristas ou formandos.
      O seu âmbito de resposta limita-se estritamente a:
      1. Legislação TVDE (Lei 45/2018) e regulamentação do IMT.
      2. Código da Estrada Português e Segurança Rodoviária.
      3. Mecânica automóvel básica.
      4. Primeiros Socorros (PAS, SBV).
      5. Atendimento ao cliente e boas práticas.
      6. Inglês técnico para motoristas.
      7. Geografia de Portugal e turismo.

      INSTRUÇÃO DE SEGURANÇA:
      Se a pergunta NÃO for sobre estes temas, RECUSE responder e diga apenas:
      "Como assistente virtual do Simulador TVDE, apenas posso responder a questões relacionadas com a atividade de motorista, legislação e segurança rodoviária."

      Pergunta do utilizador: "${search}"`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-lite',
        contents: prompt
      });
      
      const answer = response.text || "Não foi possível obter uma resposta neste momento.";
      
      const newFAQ: FAQ = {
        id: `ai-${Date.now()}`,
        category: 'Geral',
        question: search,
        answer
      };
      
      const updated = [newFAQ, ...dynamicFAQs];
      setDynamicFAQs(updated);
      localStorage.setItem('tvde_dynamic_faqs', JSON.stringify(updated));
      setSearch('');
      setExpandedId(newFAQ.id);
    } catch (e) {
      console.error(e);
      alert("Erro na IA. Verifique a sua ligação à internet.");
    } finally {
      setIsAsking(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 animate-fade-in pt-20">
      <button onClick={onBack} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
        <ChevronLeftIcon className="w-5 h-5" /> Voltar ao Menu
      </button>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Perguntas Frequentes</h2>
        <p className="text-gray-500">Tire dúvidas sobre a atividade TVDE em Portugal.</p>
      </div>

      {/* AI Search Box */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-2xl mb-8 shadow-xl">
        <div className="bg-white rounded-xl p-2 flex items-center gap-2">
          <SparklesIcon className="w-6 h-6 text-purple-500 ml-2 animate-pulse" />
          <input 
            type="text" 
            placeholder="Pergunte à IA (Ex: Posso trabalhar sem empresa?)" 
            className="flex-1 p-2 outline-none text-gray-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
          />
          <button 
            onClick={handleAskAI}
            disabled={isAsking}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            {isAsking ? '...' : <PaperAirplaneIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="space-y-3 pb-20">
        {[...dynamicFAQs, ...TVDE_FAQS].map((faq) => (
          <div key={faq.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all hover:shadow-md">
            <button 
              onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
              className="w-full p-4 text-left flex justify-between items-center gap-4 bg-white hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                  faq.category === 'Legal' ? 'bg-red-100 text-red-700' :
                  faq.category === 'Financeiro' ? 'bg-green-100 text-green-700' :
                  faq.category === 'Operacional' ? 'bg-orange-100 text-orange-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {faq.category}
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">{faq.question}</span>
              </div>
              {expandedId === faq.id ? <ChevronUpIcon className="w-5 h-5 text-gray-400" /> : <ChevronDownIcon className="w-5 h-5 text-gray-400" />}
            </button>
            
            {expandedId === faq.id && (
              <div className="p-4 pt-0 text-gray-600 bg-gray-50 border-t border-gray-100 leading-relaxed text-sm sm:text-base">
                <div className="py-2 whitespace-pre-wrap">{faq.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};