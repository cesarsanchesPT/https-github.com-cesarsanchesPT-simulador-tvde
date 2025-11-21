
import { ExamCategory, Question } from '../types';
import { MOCK_QUESTIONS } from '../constants'; // Legacy data import

// Helper to convert legacy question format to new format
const convertLegacy = (legacy: any[]): Question[] => {
  return legacy.map(q => {
    const correctIdx = q.options.indexOf(q.correct);
    return {
      id: q.id,
      text: q.question,
      options: q.options,
      correctIndex: correctIdx > -1 ? correctIdx : 0,
      category: q.category,
      explanation: "Explicação detalhada disponível na versão Premium." // Placeholder for legacy
    };
  });
};

// REGISTRY: Add new exams here
export const AVAILABLE_EXAMS: ExamCategory[] = [
  {
    id: 'tvde',
    title: 'Certificação TVDE',
    description: 'Exame oficial para motoristas TVDE (Lei 45/2018). Inclui legislação, mecânica e primeiros socorros.',
    icon: 'Car',
    totalQuestions: 300,
    examDurationMinutes: 60,
    passScore: 27,
    questionsPerExam: 30,
    isPremium: false // Free access
  },
  {
    id: 'code_b',
    title: 'Código da Estrada (B)',
    description: 'Categoria B (Ligeiros). Código da Estrada, Sinais e Regras de Trânsito.',
    icon: 'Book',
    totalQuestions: 150,
    examDurationMinutes: 30,
    passScore: 27,
    questionsPerExam: 30,
    isPremium: false
  },
  {
    id: 'cam',
    title: 'CAM / CQM',
    description: 'Certificado de Aptidão para Motoristas de Pesados.',
    icon: 'Truck',
    totalQuestions: 500,
    examDurationMinutes: 90,
    passScore: 50,
    questionsPerExam: 60,
    isPremium: true // Premium only
  },
  {
    id: 'adr',
    title: 'ADR (Matérias Perigosas)',
    description: 'Transporte de mercadorias perigosas por estrada.',
    icon: 'Fire',
    totalQuestions: 200,
    examDurationMinutes: 45,
    passScore: 20,
    questionsPerExam: 25,
    isPremium: true
  }
];

// DATA LOADER: In a real app, this would fetch JSON files or call an API
export const loadQuestionsForCategory = async (categoryId: string): Promise<Question[]> => {
  // Simulating async load
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId === 'tvde') {
        resolve(convertLegacy(MOCK_QUESTIONS));
      } else if (categoryId === 'code_b') {
        // Mock data for Code B to demonstrate multi-category support
        resolve([
          {
            id: 'b1',
            text: "Qual é o limite máximo de velocidade numa Autoestrada para ligeiros?",
            options: ["100 km/h", "120 km/h", "90 km/h", "110 km/h"],
            correctIndex: 1,
            category: "Velocidades",
            explanation: "O limite geral para ligeiros de passageiros sem reboque em AE é 120 km/h."
          },
          {
             id: 'b2',
             text: "O sinal STOP obriga a:",
             options: ["Reduzir a velocidade", "Parar apenas se vierem veículos", "Imobilizar o veículo", "Buzinar"],
             correctIndex: 2,
             category: "Sinais",
             explanation: "A imobilização é obrigatória, mesmo que não venha ninguém."
          },
          {
             id: 'b3',
             text: "O uso de cinto de segurança é obrigatório dentro das localidades?",
             options: ["Sim", "Não", "Apenas para o condutor", "Apenas no banco da frente"],
             correctIndex: 0,
             category: "Segurança",
             explanation: "O uso é obrigatório em todas as vias públicas."
          }
        ]);
      } else {
        // Fallback or empty for premium placeholders
        resolve([]); 
      }
    }, 300);
  });
};