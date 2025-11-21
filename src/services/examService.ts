import { MOCK_QUESTIONS, EXAM_CONFIG } from '../constants';
import { Question, LegacyQuestion, ExamResult } from '../types';

// Utility to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Configuração da Distribuição do Exame TVDE (Padrão)
const TVDE_DISTRIBUTION: Record<string, number> = {
  'Código da Estrada': 10,
  'Lei TVDE': 6,
  'Comunicação e Turismo': 5,
  'Mecânica e Eco-condução': 5,
  'Segurança e Socorro': 4
};

// Adapter: Converte pergunta antiga para o novo formato
const convertToNewFormat = (lq: LegacyQuestion): Question => {
  let correctIndex = lq.options.indexOf(lq.correct);
  if (correctIndex === -1) correctIndex = 0;

  return {
    id: lq.id,
    text: lq.question,
    options: lq.options,
    correctIndex: correctIndex,
    category: lq.category,
    imageUrl: lq.imageUrl,
    explanation: "A resposta correta baseia-se na legislação e manuais de formação TVDE em vigor."
  };
};

// Função auxiliar para normalizar categorias
const normalizeCategory = (rawCategory: string): string => {
  if (rawCategory === 'Segurança Rodoviária (PRP)') return 'Código da Estrada';
  if (rawCategory === 'Inglês Técnico') return 'Comunicação e Turismo';
  
  if (rawCategory.includes('Lei') || rawCategory.includes('Regulamento')) return 'Lei TVDE';
  if (rawCategory.includes('Mecânica') || rawCategory.includes('Eco')) return 'Mecânica e Eco-condução';
  if (rawCategory.includes('Socorro') || rawCategory.includes('Segurança')) return 'Segurança e Socorro';
  if (rawCategory.includes('Comunicação') || rawCategory.includes('Turismo')) return 'Comunicação e Turismo';
  
  return 'Código da Estrada';
};

export const generateExam = (examTypeId: string = 'tvde'): Question[] => {
  // 1. Preparar pool de perguntas agrupadas por categoria normalizada
  const pool: Record<string, LegacyQuestion[]> = {
    'Código da Estrada': [],
    'Lei TVDE': [],
    'Comunicação e Turismo': [],
    'Mecânica e Eco-condução': [],
    'Segurança e Socorro': []
  };

  MOCK_QUESTIONS.forEach(q => {
    const cat = normalizeCategory(q.category || "Geral");
    if (pool[cat]) {
      pool[cat].push(q);
    } else {
      // Fallback seguro para perguntas sem categoria mapeada
      pool['Código da Estrada'].push(q);
    }
  });

  let selectedLegacyQuestions: LegacyQuestion[] = [];

  if (examTypeId === 'tvde' || examTypeId === 'default') {
    // --- MODO EXAME TVDE (MISTO) ---
    // Segue a distribuição oficial da Lei 45/2018
    Object.entries(TVDE_DISTRIBUTION).forEach(([category, targetCount]) => {
      const questionsInCategory = pool[category] || [];
      const shuffled = shuffleArray(questionsInCategory);
      const toTake = Math.min(targetCount, shuffled.length);
      selectedLegacyQuestions.push(...shuffled.slice(0, toTake));
    });

    // Preencher o resto se faltarem perguntas para chegar ao total (ex: 30)
    const currentCount = selectedLegacyQuestions.length;
    const remainingNeeded = EXAM_CONFIG.TOTAL_QUESTIONS - currentCount;
    
    if (remainingNeeded > 0) {
      const usedIds = new Set(selectedLegacyQuestions.map(q => q.id));
      const allRemaining = MOCK_QUESTIONS.filter(q => !usedIds.has(q.id));
      const shuffledRemaining = shuffleArray(allRemaining);
      selectedLegacyQuestions.push(...shuffledRemaining.slice(0, remainingNeeded));
    }

  } else if (examTypeId === 'code_b') {
    // --- MODO CÓDIGO DA ESTRADA ---
    // Apenas perguntas de Código da Estrada e Segurança Rodoviária
    const questions = pool['Código da Estrada'] || [];
    const shuffled = shuffleArray(questions);
    selectedLegacyQuestions.push(...shuffled.slice(0, EXAM_CONFIG.TOTAL_QUESTIONS));

  } else {
    // --- OUTROS MODOS (Fallback ou Futuros) ---
    const normalizedType = normalizeCategory(examTypeId);
    
    if (pool[examTypeId]) {
         // Se existir chave direta no pool
         const questions = pool[examTypeId];
         const shuffled = shuffleArray(questions);
         selectedLegacyQuestions.push(...shuffled.slice(0, EXAM_CONFIG.TOTAL_QUESTIONS));
    } else if (pool[normalizedType] && pool[normalizedType].length > 0) {
         // Se normalizou para algo válido
         const questions = pool[normalizedType];
         const shuffled = shuffleArray(questions);
         selectedLegacyQuestions.push(...shuffled.slice(0, EXAM_CONFIG.TOTAL_QUESTIONS));
    } else {
         // Fallback Genérico: Exame aleatório misto
         const shuffled = shuffleArray(MOCK_QUESTIONS);
         selectedLegacyQuestions.push(...shuffled.slice(0, EXAM_CONFIG.TOTAL_QUESTIONS));
    }
  }

  // 4. Baralhar opções, converter para novo formato e retornar
  return shuffleArray(selectedLegacyQuestions).map(lq => {
    const shuffledOptions = shuffleArray([...lq.options]);
    const tempQ = { ...lq, options: shuffledOptions };
    return convertToNewFormat(tempQ);
  });
};

const STORAGE_KEY = 'tvde_exam_history_v2';

export const saveExamResult = (result: ExamResult): void => {
  try {
    const currentHistory = getExamHistory();
    const newHistory = [result, ...currentHistory];
    if (newHistory.length > 50) newHistory.pop();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
  } catch (error) {
    console.warn("Falha ao guardar histórico.", error);
  }
};

export const getExamHistory = (): ExamResult[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};