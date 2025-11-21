import { LegacyQuestion, InfoModule, FAQ } from './types';

export const EXAM_CONFIG = {
  TOTAL_QUESTIONS: 30,
  PASS_SCORE: 27,
  DURATION_MINUTES: 60
};

export const TVDE_FAQS: FAQ[] = [
  {
    id: 'f1',
    category: 'Geral',
    question: "Quanto ganha um motorista TVDE em média?",
    answer: "O rendimento é muito variável. Em média, um motorista a tempo inteiro pode faturar entre 1.200€ a 1.800€ brutos mensais. No entanto, é preciso descontar: comissão da plataforma (25%), IVA, combustível/energia, aluguer da viatura (se aplicável), seguros e segurança social. O valor líquido real costuma rondar os 700€ a 1000€ dependendo das horas trabalhadas e eficiência."
  },
  {
    id: 'f2',
    category: 'Legal',
    question: "Posso trabalhar como motorista TVDE sem empresa?",
    answer: "Não. Legalmente, o motorista deve ter um contrato de trabalho com um Operador TVDE (empresa parceira) ou abrir a sua própria empresa e licenciar-se como Operador. Não é possível trabalhar diretamente como 'recibos verdes' para a Uber/Bolt sem um Operador intermediário licenciado pelo IMT."
  },
  {
    id: 'f3',
    category: 'Legal',
    question: "Posso usar a minha carta de condução estrangeira?",
    answer: "Depende. Cidadãos da CPLP (Brasil, Angola, etc.) podem trocar a carta para Portuguesa sem exame prático em muitos casos, mas é OBRIGATÓRIO ter a carta portuguesa ou o pedido de troca averbado para obter o CMTVDE (Certificado de Motorista). Cartas estrangeiras diretas não são aceites para emissão do certificado."
  },
  {
    id: 'f4',
    category: 'Operacional',
    question: "O que acontece se for apanhado sem o dístico TVDE?",
    answer: "É uma contraordenação grave. A multa pode variar entre 250€ a 1250€ e pode implicar a imobilização do veículo. O dístico deve estar visível no vidro da frente (canto inferior direito) e no vidro de trás (canto inferior esquerdo)."
  },
  {
    id: 'f5',
    category: 'Geral',
    question: "Qual o melhor carro para TVDE?",
    answer: "Atualmente, os veículos elétricos (ex: Nissan Leaf, Renault Zoe, Tesla) ou híbridos são os mais recomendados devido à poupança em combustível e manutenção. O carro deve ter ar condicionado, 4 portas e não pode ter mais de 7 anos a contar da data da primeira matrícula."
  },
  {
    id: 'f6',
    category: 'Financeiro',
    question: "Como funciona o IVA na atividade TVDE?",
    answer: "A prestação de serviços de transporte tem IVA à taxa reduzida (6%). No entanto, as comissões da plataforma (Uber/Bolt) são serviços prestados ao motorista/empresa e têm IVA a 23% (frequentemente autoliquidação se a sede for no estrangeiro). É fundamental ter um contabilista certificado."
  },
  {
    id: 'f7',
    category: 'Operacional',
    question: "Posso recusar uma viagem?",
    answer: "Sim, mas com cautela. A lei permite a recusa se houver justa causa (ex: passageiro embriagado, comportamento perigoso, excesso de lotação). Recusas frequentes sem justificação na aplicação podem levar ao bloqueio da conta do motorista pela plataforma."
  },
  {
    id: 'f8',
    category: 'Legal',
    question: "O registo criminal tem de estar limpo?",
    answer: "Sim. Para obter o CMTVDE, é necessário idoneidade. Crimes rodoviários, contra a liberdade sexual, integridade física ou tráfico de estupefacientes impedem o acesso à profissão."
  },
  {
    id: 'f9',
    category: 'Financeiro',
    question: "Vale a pena alugar carro ou usar carro próprio?",
    answer: "Se usar carro próprio, a margem de lucro é maior, mas o desgaste do veículo é seu. Alugar carro (renting/parceiro) custa entre 200€ a 300€/semana, o que obriga a trabalhar muitas horas só para pagar o carro, mas elimina o risco de manutenção e desvalorização da sua viatura pessoal."
  },
  {
    id: 'f10',
    category: 'Operacional',
    question: "Posso apanhar clientes na rua que me mandem parar?",
    answer: "NÃO. Absolutamente proibido. O serviço TVDE só pode ser contratado através da plataforma eletrónica. Angariar clientes na via pública é exclusivo dos Táxis e dá multa pesada."
  },
  {
    id: 'f11',
    category: 'Legal',
    question: "Quanto tempo demora o curso de formação TVDE?",
    answer: "O curso de formação inicial tem a duração mínima de 50 horas (aulas teóricas e práticas). Após o curso, é necessário fazer exame no IMT ou escola certificada para obter o certificado provisório/final."
  },
  {
    id: 'f12',
    category: 'Geral',
    question: "As gorjetas são tributadas?",
    answer: "Tecnicamente, todos os rendimentos devem ser declarados. Nas aplicações, as gorjetas digitais ficam registadas. As gorjetas em dinheiro (cash) são mais difíceis de controlar, mas legalmente constituem rendimento."
  },
  {
    id: 'f13',
    category: 'Operacional',
    question: "O que fazer se o passageiro deixar lixo ou vomitar no carro?",
    answer: "Deve tirar fotos imediatamente e reportar à plataforma através da opção 'Taxa de Limpeza'. A plataforma geralmente cobra um valor ao cliente (ex: 40€ a 80€) para compensar a limpeza profissional."
  },
  {
    id: 'f14',
    category: 'Operacional',
    question: "Posso conduzir com carta provisória?",
    answer: "Não. É exigido ter carta de condução de categoria B há pelo menos 3 anos para exercer a profissão de motorista TVDE."
  },
  {
    id: 'f15',
    category: 'Financeiro',
    question: "Quais são os custos mensais fixos de um Operador?",
    answer: "Contabilista (~100€-150€), Seguros (RC + Acidentes Pessoais ~50€/mês), Software de Faturação (~10€), Licença IMT (taxa inicial e manutenção), além dos custos do veículo."
  },
  {
    id: 'f16',
    category: 'Geral',
    question: "Uber, Bolt ou FreeNow? Qual a melhor?",
    answer: "Varia por cidade e época. A Uber costuma ter mais clientes corporativos e turistas (ticket médio mais alto). A Bolt tem muito volume em zonas urbanas jovens. A maioria dos motoristas usa as duas aplicações simultaneamente para reduzir o tempo de espera entre viagens."
  },
  {
    id: 'f17',
    category: 'Legal',
    question: "O seguro normal do carro serve?",
    answer: "Não. É obrigatório um seguro específico para a atividade (com cobertura de ocupantes reforçada e averbamento de uso profissional/aluguer). Se tiver um acidente a trabalhar com seguro particular, a seguradora pode recusar pagar."
  },
  {
    id: 'f18',
    category: 'Operacional',
    question: "Posso trabalhar apenas aos fins de semana?",
    answer: "Sim. A flexibilidade é a grande vantagem. Muitos motoristas usam o TVDE como complemento salarial (Part-time). No entanto, os custos fixos (seguro, carro) mantêm-se, pelo que é preciso fazer contas para ver se compensa."
  },
  {
    id: 'f19',
    category: 'Operacional',
    question: "Onde posso parar para largar passageiros?",
    answer: "Pode parar momentaneamente para tomada e largada de passageiros em locais onde a paragem seja permitida (não estacionamento). É proibido parar em praças de táxis ou na via de trânsito se houver local apropriado encostado."
  },
  {
    id: 'f20',
    category: 'Geral',
    question: "É perigoso ser motorista TVDE?",
    answer: "Como qualquer profissão que lida com o público e dinheiro, há riscos. No entanto, como os pagamentos são maioritariamente eletrónicos e os clientes estão identificados na app, o risco de assalto é menor que nos táxis tradicionais. A condução noturna exige precaução redobrada."
  }
];

export const INFO_MODULES: InfoModule[] = [
  {
    id: 'lei_tvde',
    title: 'Lei TVDE (Lei 45/2018)',
    icon: 'BookOpenIcon',
    description: 'Regras fundamentais, requisitos e obrigações legais.',
    content: [
      {
        title: 'Requisitos do Motorista',
        text: [
          'Ser titular de carta de condução há mais de 3 anos (Categoria B) com averbamento do Grupo 2.',
          'Possuir o Certificado de Curso de Formação Rodoviária (CMTVDE), válido por 5 anos.',
          'Ter idoneidade (registo criminal limpo de crimes específicos).',
          'Dominar a língua portuguesa.'
        ]
      },
      {
        title: 'Requisitos da Viatura',
        text: [
          'Idade máxima de 7 anos a contar da primeira matrícula.',
          'Passar em Inspeção Periódica Obrigatória (IPO) anual após o primeiro ano.',
          'Ter seguro de responsabilidade civil e acidentes pessoais que cubra os ocupantes (mínimo 50M€ ou conforme apólice específica TVDE).',
          'Dístico identificador (145mm x 68mm) visível no vidro da frente e traseiro.'
        ]
      },
      {
        title: 'Regras de Operação',
        text: [
          'É proibido angariar clientes na via pública (apanha na rua). Todas as viagens devem ser via plataforma.',
          'É proibido circular na faixa BUS ou parar em praças de táxis (salvo para largada rápida se permitido).',
          'O motorista não pode fumar dentro da viatura no exercício da função.',
          'Obrigatório possuir Livro de Reclamações (físico e eletrónico).'
        ]
      }
    ]
  },
  {
    id: 'comunicacao',
    title: 'Atendimento e Comunicação',
    icon: 'UserIcon',
    description: 'Excelência no serviço e gestão de conflitos.',
    content: [
      {
        title: 'Acolhimento',
        text: [
          'Confirme sempre o nome do passageiro e o destino antes de iniciar.',
          'Mantenha uma postura cordial, calma e profissional.',
          'Pergunte sobre a preferência de temperatura (Ar Condicionado) e música/rádio.'
        ]
      },
      {
        title: 'Gestão de Conflitos',
        text: [
          'Mantenha a calma perante clientes agressivos. Não entre em discussão.',
          'Se a segurança estiver em risco, pare o veículo em local seguro e contacte as autoridades (112).',
          'Nunca toque fisicamente no passageiro, salvo para prestar socorro.',
          'Use a escuta ativa: oiça a reclamação até ao fim antes de responder.'
        ]
      },
      {
        title: 'Situações Especiais',
        text: [
          'Objtos perdidos: Reporte à plataforma e tente devolver. Entregue na polícia se não conseguir contacto.',
          'Animais de assistência (cães-guia): Transporte OBRIGATÓRIO e gratuito.',
          'Transporte de menores: Seguir a política da plataforma (geralmente proibido se desacompanhados abaixo de certa idade).'
        ]
      }
    ]
  },
  {
    id: 'emergencia',
    title: 'Segurança e Emergência',
    icon: 'InfoIcon',
    description: 'Primeiros socorros e procedimentos de acidente.',
    content: [
      {
        title: 'Protocolo PAS',
        text: [
          'PREVENIR: Sinalizar o local (triângulo, 4 piscas, colete) para evitar novos acidentes.',
          'ALERTAR: Ligar 112. Informar: Onde, O Quê, Quem e Riscos.',
          'SOCORRER: Prestar auxílio dentro das suas competências. Não mover vítimas (salvo perigo de incêndio/explosão).'
        ]
      },
      {
        title: 'Suporte Básico de Vida (SBV)',
        text: [
          'Se a vítima não responde e não respira: Iniciar compressões torácicas.',
          'Ritmo: 100-120 compressões por minuto.',
          'Se possível e treinado: 30 compressões / 2 insuflações.'
        ]
      },
      {
        title: 'Em caso de acidente TVDE',
        text: [
          'Preencher Declaração Amigável se houver acordo.',
          'Reportar imediatamente à plataforma através da app.',
          'Se houver feridos, chamar obrigatoriamente a polícia e INEM.',
          'Tirar fotos aos danos e ao local.'
        ]
      }
    ]
  },
  {
    id: 'mecanica',
    title: 'Mecânica e Eco-Condução',
    icon: 'LightBulbIcon',
    description: 'Manutenção preventiva e condução eficiente.',
    content: [
      {
        title: 'Verificações Diárias',
        text: [
          'Pressão dos pneus e estado do piso (mínimo 1.6mm).',
          'Luzes (médios, stop, piscas).',
          'Níveis de fluidos (óleo, refrigeração, limpa-vidros).',
          'Limpeza interior e exterior.'
        ]
      },
      {
        title: 'Eco-Condução',
        text: [
          'Conduzir com antecipação para evitar travagens bruscas.',
          'Usar mudanças altas a baixas rotações.',
          'Verificar pressão dos pneus regularmente (pneus vazios aumentam consumo).',
          'Evitar cargas desnecessárias no veículo.'
        ]
      },
      {
        title: 'Luzes de Aviso',
        text: [
          'Vermelha: Paragem imediata (Ex: Pressão óleo, Temperatura, Travões).',
          'Amarela/Laranja: Atenção/Avaria, verificar brevemente (Ex: Motor, ABS, Combustível).',
          'Azul/Verde: Informativo (Ex: Máximos, Luzes ligadas).'
        ]
      }
    ]
  }
];

export const MOCK_QUESTIONS: LegacyQuestion[] = [
  // ==========================================
  // QUESTÕES DE EXAME PRIORITÁRIAS (NOVAS)
  // Foco: Prioridades, Lei 45/2018, Comportamento
  // ==========================================
  { id: 'hp1', question: "Num cruzamento não sinalizado, apresenta-se um veículo pela direita. Quem tem prioridade?", options: ["O veículo que se apresenta pela direita", "O meu veículo, porque vou em frente", "O veículo mais rápido", "Quem chegar primeiro"], correct: "O veículo que se apresenta pela direita", category: "Código da Estrada" },
  { id: 'hp2', question: "Qual a taxa de álcool no sangue (TAS) a partir da qual é considerado contraordenação para um motorista TVDE em exercício?", options: ["0,20 g/l", "0,50 g/l", "0,80 g/l", "0,00 g/l"], correct: "0,20 g/l", category: "Lei TVDE" },
  { id: 'hp3', question: "Ao mudar de direção para a esquerda num cruzamento, a quem deve ceder passagem?", options: ["Aos veículos que se apresentem pela direita e aos que venham de frente", "Apenas aos da direita", "A ninguém, se tiver pisca ligado", "Aos peões apenas"], correct: "Aos veículos que se apresentem pela direita e aos que venham de frente", category: "Código da Estrada" },
  { id: 'hp4', question: "Qual o comportamento correto se um cliente pedir para aumentar o volume do rádio excessivamente?", options: ["Aumentar ao máximo", "Explicar educadamente que, por motivos de segurança e concentração, manterá um volume moderado", "Desligar o rádio", "Parar o carro"], correct: "Explicar educadamente que, por motivos de segurança e concentração, manterá um volume moderado", category: "Comunicação e Turismo" },
  { id: 'hp5', question: "Os motoristas TVDE podem circular nas faixas BUS?", options: ["Não, é proibido", "Sim, sempre", "Sim, se tiverem passageiros", "Apenas para largar clientes"], correct: "Não, é proibido", category: "Lei TVDE" },
  { id: 'hp6', question: "Em caso de acidente com feridos, qual a primeira prioridade (PAS)?", options: ["Prevenir (sinalizar o local)", "Alertar (ligar 112)", "Socorrer (mexer nas vítimas)", "Fugir"], correct: "Prevenir (sinalizar o local)", category: "Segurança e Socorro" },
  { id: 'hp7', question: "O uso de cinto de segurança no banco traseiro é:", options: ["Obrigatório para todos os passageiros", "Opcional para adultos", "Obrigatório apenas para crianças", "Depende da velocidade"], correct: "Obrigatório para todos os passageiros", category: "Segurança Rodoviária (PRP)" },
  { id: 'hp8', question: "O que indica um sinal vertical triangular de fundo branco com orla vermelha?", options: ["Perigo", "Obrigação", "Proibição", "Informação"], correct: "Perigo", category: "Código da Estrada" },
  { id: 'hp9', question: "Qual a validade do Certificado de Motorista TVDE (CMTVDE)?", options: ["5 anos", "10 anos", "1 ano", "Vitalício"], correct: "5 anos", category: "Lei TVDE" },
  { id: 'hp10', question: "Se um veículo de emergência assinalando marcha de urgência se aproximar, o que deve fazer?", options: ["Ceder passagem, encostando ou parando se necessário", "Acelerar para não estorvar", "Manter a velocidade", "Buzinar"], correct: "Ceder passagem, encostando ou parando se necessário", category: "Código da Estrada" },
  { id: 'hp11', question: "É permitido ao motorista TVDE recusar transporte a um utente em cadeira de rodas (dobrável)?", options: ["Não, salvo se o veículo não tiver capacidade física comprovada (bagageira cheia não é desculpa)", "Sim, sempre", "Sim, se chover", "Depende da distância"], correct: "Não, salvo se o veículo não tiver capacidade física comprovada (bagageira cheia não é desculpa)", category: "Lei TVDE" },
  { id: 'hp12', question: "O cliente reclama do trajeto escolhido pelo GPS. Como deve agir?", options: ["Seguir a sugestão do cliente se for segura e razoável, ou explicar calmamente o porquê da rota", "Ignorar o cliente", "Mandar o cliente sair", "Desligar o GPS"], correct: "Seguir a sugestão do cliente se for segura e razoável, ou explicar calmamente o porquê da rota", category: "Comunicação e Turismo" },
  { id: 'hp13', question: "Numa rotunda, se pretende sair na 2ª saída, que via deve ocupar inicialmente (se houver mais de uma)?", options: ["A via da direita, se a sinalização não indicar o contrário (embora a regra geral seja vias interiores para saídas não imediatas, na prática para 2ª saída deve-se avaliar)", "Sempre a via mais à esquerda", "A via que estiver livre", "Regra geral: entrar para via interior e passar para a direita após a 1ª saída"], correct: "Regra geral: entrar para via interior e passar para a direita após a 1ª saída", category: "Código da Estrada" },
  { id: 'hp14', question: "A ultrapassagem pela direita é permitida quando:", options: ["O veículo da frente assinala a intenção de virar à esquerda e deixa espaço livre", "Sempre em autoestrada", "Quando há trânsito", "Nunca"], correct: "O veículo da frente assinala a intenção de virar à esquerda e deixa espaço livre", category: "Código da Estrada" },
  { id: 'hp15', question: "Qual o limite de velocidade para ligeiros de passageiros em autoestrada?", options: ["120 km/h", "100 km/h", "90 km/h", "130 km/h"], correct: "120 km/h", category: "Código da Estrada" },
  { id: 'hp16', question: "O contrato escrito entre motorista e operador TVDE é:", options: ["Obrigatório", "Opcional", "Verbal serve", "Não existe"], correct: "Obrigatório", category: "Lei TVDE" },
  { id: 'hp17', question: "Se encontrar uma hemorragia ativa num braço, o que fazer?", options: ["Compressão direta na ferida (com luvas)", "Torniquete imediato", "Lavar com água quente", "Elevar o braço apenas"], correct: "Compressão direta na ferida (com luvas)", category: "Segurança e Socorro" },
  { id: 'hp18', question: "Sinal de Stop (Paragem Obrigatória):", options: ["Deve imobilizar totalmente o veículo antes da interseção", "Pode passar devagar se não vier ninguém", "Basta reduzir", "Apenas à noite"], correct: "Deve imobilizar totalmente o veículo antes da interseção", category: "Código da Estrada" },
  { id: 'hp19', question: "O transporte de crianças até 12 anos e <135cm exige:", options: ["Sistema de retenção homologado (cadeirinha/assento) adequado ao tamanho e peso", "Apenas cinto de segurança", "Colo de um adulto", "Banco da frente"], correct: "Sistema de retenção homologado (cadeirinha/assento) adequado ao tamanho e peso", category: "Segurança Rodoviária (PRP)" },
  { id: 'hp20', question: "A 'Gui de Transporte' digital na app é suficiente para fiscalização?", options: ["Sim, a app serve como prova de serviço contratado", "Não, precisa de papel", "Precisa de fatura", "Não"], correct: "Sim, a app serve como prova de serviço contratado", category: "Lei TVDE" },

  // ==========================================
  // 1. LEI TVDE (LEI 45/2018) - Mantidas
  // ==========================================
  { id: '1', question: "De acordo com a Lei n.º 45/2018, qual a idade mínima para ser motorista de TVDE?", options: ["18 anos", "21 anos", "25 anos", "23 anos"], correct: "21 anos", category: "Lei TVDE" },
  { id: '2', question: "Qual a validade da licença da plataforma eletrónica TVDE?", options: ["1 ano", "3 anos", "5 anos", "Indeterminada"], correct: "5 anos", category: "Lei TVDE" },
  { id: '3', question: "Qual o documento obrigatório que o motorista de TVDE deve ter sempre consigo no exercício da atividade?", options: ["Cartão de Cidadão", "Fatura de compra do veículo", "Certificado de motorista TVDE", "Comprovativo de morada"], correct: "Certificado de motorista TVDE", category: "Lei TVDE" },
  { id: '4', question: "Qual a lotação máxima de passageiros num veículo TVDE, excluindo o motorista?", options: ["4 passageiros", "5 passageiros", "8 passageiros", "9 passageiros"], correct: "8 passageiros", category: "Lei TVDE" },
  { id: '5', question: "O veículo TVDE pode ser usado para fins privados, fora da plataforma?", options: ["Sim, sem restrições", "Apenas se o motorista for o proprietário", "Sim, desde que a app esteja desligada", "Não, é proibido por lei"], correct: "Sim, desde que a app esteja desligada", category: "Lei TVDE" },
  { id: '6', question: "Quem é a entidade competente para fiscalizar a atividade TVDE?", options: ["A GNR e a PSP", "O IMT, I.P.", "A Autoridade para as Condições do Trabalho (ACT)", "Todas as anteriores"], correct: "Todas as anteriores", category: "Lei TVDE" },
  { id: '7', question: "É obrigatório que o veículo TVDE tenha um dístico identificativo?", options: ["Não, é opcional", "Sim, deve ser afixado no para-brisas e no vidro da retaguarda", "Apenas se for um veículo elétrico", "Sim, mas só na parte de trás"], correct: "Sim, deve ser afixado no para-brisas e no vidro da retaguarda", category: "Lei TVDE" },
  { id: '8', question: "Qual a validade do certificado de motorista TVDE (CMTVDE)?", options: ["5 anos", "2 anos", "1 ano", "10 anos"], correct: "5 anos", category: "Lei TVDE" },
  { id: '9', question: "Qual o período máximo que um motorista TVDE pode conduzir ininterruptamente?", options: ["4 horas", "5 horas", "6 horas", "8 horas"], correct: "5 horas", category: "Lei TVDE" },
  { id: '10', question: "O que significa a sigla TVDE?", options: ["Transporte de Veículos de Desporto Eletrónico", "Transporte Individual e Remunerado de Passageiros em Veículos Descaracterizados a partir de Plataforma Eletrónica", "Transporte de Viajantes por Documentação Especializada", "Transporte de Voluntários e Doentes Especiais"], correct: "Transporte Individual e Remunerado de Passageiros em Veículos Descaracterizados a partir de Plataforma Eletrónica", category: "Lei TVDE" },
  { id: '11', question: "O veículo TVDE deve ter inspeção periódica especial?", options: ["Sim, com periodicidade anual após o 1º ano", "Não, apenas a inspeção normal", "Sim, mas apenas a cada 2 anos", "Não, se tiver menos de 3 anos"], correct: "Sim, com periodicidade anual após o 1º ano", category: "Lei TVDE" },
  { id: '12', question: "Qual o nível de escolaridade mínimo exigido para o motorista TVDE?", options: ["4º ano", "Escolaridade obrigatória", "12º ano", "Licenciatura"], correct: "Escolaridade obrigatória", category: "Lei TVDE" },
  { id: '13', question: "O motorista TVDE pode angariar clientes na rua ('apanha na rua')?", options: ["Sim, desde que use o taxímetro", "Não, as viagens só podem ser feitas através da plataforma", "Apenas em zonas turísticas", "Sim, se o cliente pedir"], correct: "Não, as viagens só podem ser feitas através da plataforma", category: "Lei TVDE" },
  { id: '14', question: "Qual a cor e o formato do dístico de identificação TVDE?", options: ["Branco e redondo", "Amarelo e quadrado", "Branco e retangular (145mm x 68mm)", "Azul e redondo"], correct: "Branco e retangular (145mm x 68mm)", category: "Lei TVDE" },
  { id: '15', question: "A formação inicial e contínua do motorista deve incluir obrigatoriamente módulo sobre 'Primeiros Socorros'?", options: ["Não é obrigatório", "Sim, é obrigatório", "Apenas a formação contínua", "Apenas a formação inicial"], correct: "Sim, é obrigatório", category: "Lei TVDE" },
  { id: '36', question: "A licença de operador de plataforma TVDE é intransmissível?", options: ["Não, pode ser vendida", "Sim, é intransmissível", "Depende da autorização do IMT", "Apenas se a empresa falir"], correct: "Sim, é intransmissível", category: "Lei TVDE" },
  { id: '37', question: "Qual o tempo máximo que o veículo TVDE pode ter desde a data da primeira matrícula?", options: ["5 anos", "7 anos", "10 anos", "Sem limite"], correct: "7 anos", category: "Lei TVDE" },
  { id: '38', question: "Os operadores de plataforma eletrónica são obrigados a disponibilizar livro de reclamações?", options: ["Não, apenas formato físico", "Sim, em formato físico e eletrónico", "Não é obrigatório", "Apenas se tiverem mais de 10 motoristas"], correct: "Sim, em formato físico e eletrónico", category: "Lei TVDE" },
  { id: '39', question: "O motorista TVDE deve possuir idoneidade. O que pode impedir essa idoneidade?", options: ["Multas de estacionamento", "Condenação por crimes rodoviários, contra a liberdade sexual ou integridade física", "Atraso no pagamento de impostos", "Não ter viatura própria"], correct: "Condenação por crimes rodoviários, contra a liberdade sexual ou integridade física", category: "Lei TVDE" },
  { id: '40', question: "É permitido fumar dentro do veículo TVDE?", options: ["Sim, com o vidro aberto", "Sim, se não houver passageiros", "Não, é proibido em veículos de transporte público ou equiparado", "Apenas cigarros eletrónicos"], correct: "Não, é proibido em veículos de transporte público ou equiparado", category: "Lei TVDE" },
  { id: '41', question: "Quem define o preço da viagem no serviço TVDE?", options: ["O motorista", "O passageiro", "A plataforma eletrónica", "O IMT"], correct: "A plataforma eletrónica", category: "Lei TVDE" },
  { id: '42', question: "O contrato entre o motorista e o operador de TVDE deve ser:", options: ["Verbal", "Escrito", "Tácito", "Não é necessário contrato"], correct: "Escrito", category: "Lei TVDE" },
  { id: '61', question: "Um motorista TVDE pode circular nas faixas BUS?", options: ["Sim, sempre", "Sim, se estiver com passageiros", "Não, é proibido", "Apenas em Lisboa"], correct: "Não, é proibido", category: "Lei TVDE" },
  { id: '62', question: "Os veículos TVDE podem utilizar as praças de táxis?", options: ["Sim, para largar passageiros", "Não, é proibido parar ou estacionar", "Sim, se estiverem vazios", "Apenas à noite"], correct: "Não, é proibido parar ou estacionar", category: "Lei TVDE" },
  { id: '63', question: "A carta de condução do motorista TVDE deve ter averbado o quê?", options: ["O Grupo 2", "A categoria C", "Nada em especial", "A categoria de pesados"], correct: "O Grupo 2", category: "Lei TVDE" },
  { id: '64', question: "Quem é responsável por garantir que o motorista tem seguro de acidentes de trabalho?", options: ["O Operador TVDE (Parceiro)", "A Plataforma (Uber/Bolt)", "O passageiro", "O Estado"], correct: "O Operador TVDE (Parceiro)", category: "Lei TVDE" },
  { id: '65', question: "O dístico TVDE deve conter:", options: ["O nome do motorista", "O número da licença do operador", "O preço da viagem", "A validade do seguro"], correct: "O número da licença do operador", category: "Lei TVDE" },
  { id: '111', question: "Para obter o CMTVDE, o motorista deve frequentar um curso de formação de quantas horas?", options: ["20 horas", "30 horas", "50 horas", "100 horas"], correct: "50 horas", category: "Lei TVDE" },
  { id: '112', question: "O curso de renovação do CMTVDE deve ser realizado:", options: ["A cada ano", "A cada 2 anos", "A cada 5 anos", "Nunca"], correct: "A cada 5 anos", category: "Lei TVDE" },
  { id: '113', question: "A falta de dístico identificador no veículo é considerada uma contraordenação:", options: ["Leve", "Grave", "Muito Grave", "Não é contraordenação"], correct: "Grave", category: "Lei TVDE" },
  { id: '114', question: "O motorista TVDE pode recusar o transporte de animais de assistência (cães-guia)?", options: ["Sim, se tiver alergia", "Sim, se o cão for grande", "Não, o transporte é obrigatório e gratuito", "Sim, se o carro for novo"], correct: "Não, o transporte é obrigatório e gratuito", category: "Lei TVDE" },
  { id: '115', question: "Se um motorista TVDE conduzir com uma taxa de álcool de 0,3 g/l, está:", options: ["Legal", "Cometendo uma contraordenação", "Cometendo um crime", "Depende da hora"], correct: "Cometendo uma contraordenação", category: "Lei TVDE" },
  { id: '116', question: "Os veículos TVDE estão isentos de pagar parquímetros?", options: ["Sim, sempre", "Não, aplicam-se as regras gerais", "Apenas em Lisboa", "Apenas se estiverem a carregar passageiros"], correct: "Não, aplicam-se as regras gerais", category: "Lei TVDE" },
  { id: '117', question: "Quem é o responsável final pelo pagamento das coimas relativas ao Código da Estrada?", options: ["O passageiro", "A plataforma", "O condutor (motorista)", "O dono do carro sempre"], correct: "O condutor (motorista)", category: "Lei TVDE" },
  
  // ==========================================
  // 2. CÓDIGO DA ESTRADA E SEGURANÇA
  // ==========================================
  { id: '16', question: "Qual a taxa máxima de álcool no sangue (TAS) permitida para um motorista em regime TVDE?", options: ["0.5 g/l", "0.2 g/l", "0.8 g/l", "0.0 g/l"], correct: "0.2 g/l", category: "Código da Estrada" },
  { id: '17', question: "Numa via com o sinal de 'Proibição de Estacionar', a paragem é permitida?", options: ["Não, a paragem e o estacionamento são proibidos", "Sim, desde que não exceda 5 minutos", "Sim, apenas para entrada ou saída de passageiros", "Apenas fora das localidades"], correct: "Sim, apenas para entrada ou saída de passageiros", category: "Código da Estrada" },
  { id: '18', question: "O que indica um triângulo de pré-sinalização de perigo na estrada?", options: ["Aconselha a redução da velocidade", "Indica o local de um acidente ou avaria", "Marca a prioridade na intersecção", "Proíbe a ultrapassagem"], correct: "Indica o local de um acidente ou avaria", category: "Código da Estrada" },
  { id: '19', question: "Qual a distância de segurança obrigatória em caso de condução em comboio?", options: ["10 metros", "Não inferior a 2 segundos em relação ao veículo da frente", "Uma distância fixa de 50 metros", "Depende da velocidade, mas é sempre de 3 metros por cada 10 km/h"], correct: "Não inferior a 2 segundos em relação ao veículo da frente", category: "Código da Estrada" },
  { id: '20', question: "A luz amarela intermitente num semáforo indica:", options: ["Obrigação de parar imediatamente", "Proibição de avançar", "Cuidado e a possibilidade de continuar com precaução", "Que a via está encerrada"], correct: "Cuidado e a possibilidade de continuar com precaução", category: "Código da Estrada" },
  { id: '21', question: "Em caso de piso molhado, como deve o motorista adaptar a condução?", options: ["Aumentar a velocidade para sair mais rápido do piso", "Aumentar a distância de segurança e reduzir a velocidade", "Usar o travão de mão para curvar", "Manter a mesma distância de segurança, mas travar mais tarde"], correct: "Aumentar a distância de segurança e reduzir a velocidade", category: "Código da Estrada" },
  { id: '22', question: "Quando deve um motorista TVDE acionar o seguro de acidentes pessoais dos passageiros?", options: ["Em todas as viagens", "Apenas em viagens noturnas", "Em caso de acidente de viação que cause danos corporais aos passageiros", "Apenas se o passageiro o solicitar"], correct: "Em caso de acidente de viação que cause danos corporais aos passageiros", category: "Código da Estrada" },
  { id: '23', question: "Qual a velocidade máxima permitida, salvo sinalização, em autoestrada para veículos ligeiros?", options: ["90 km/h", "100 km/h", "120 km/h", "130 km/h"], correct: "120 km/h", category: "Código da Estrada" },
  { id: '24', question: "O que é 'aquaplaning' e como deve o motorista reagir?", options: ["O carro fica sem travões; deve-se usar o travão de mão.", "Perda de aderência por água; deve-se reduzir a aceleração e não travar bruscamente.", "O carro desliza na neve; deve-se aumentar a velocidade.", "Uma avaria no motor; deve-se parar imediatamente."], correct: "Perda de aderência por água; deve-se reduzir a aceleração e não travar bruscamente.", category: "Código da Estrada" },
  { id: '25', question: "A ultrapassagem é permitida em passagens de nível sem guarda?", options: ["Sim, se a visibilidade for boa", "Não, é sempre proibido", "Sim, se a velocidade for inferior a 50 km/h", "Apenas em veículos de duas rodas"], correct: "Não, é sempre proibido", category: "Código da Estrada" },
  { id: '43', question: "Ao entrar numa rotunda, quem tem prioridade?", options: ["Quem vai entrar na rotunda", "Quem já circula na rotunda", "Quem vem da direita", "Os veículos pesados"], correct: "Quem já circula na rotunda", category: "Código da Estrada" },
  { id: '44', question: "É permitido o uso de telemóvel durante a condução?", options: ["Sim, para consultar mapas", "Não, exceto com sistema de mãos-livres ou auricular único", "Sim, se estiver parado no trânsito", "Sim, para aceitar viagens na plataforma"], correct: "Não, exceto com sistema de mãos-livres ou auricular único", category: "Código da Estrada" },
  { id: '45', question: "O transporte de crianças com menos de 12 anos e altura inferior a 135 cm deve ser feito:", options: ["No banco da frente", "Ao colo de um adulto", "No banco de trás com sistema de retenção homologado", "Apenas com cinto de segurança"], correct: "No banco de trás com sistema de retenção homologado", category: "Código da Estrada" },
  { id: '46', question: "O que significa uma linha contínua no eixo da faixa de rodagem?", options: ["Permite ultrapassar", "Permite mudar de via", "Proíbe pisar ou transpor a linha", "Indica zona de estacionamento"], correct: "Proíbe pisar ou transpor a linha", category: "Código da Estrada" },
  { id: '47', question: "Em caso de avaria na autoestrada, é obrigatório o uso de colete retrorrefletor?", options: ["Apenas à noite", "Sim, antes de sair do veículo", "Não, apenas o triângulo", "Apenas se estiver a chover"], correct: "Sim, antes de sair do veículo", category: "Código da Estrada" },
  { id: '48', question: "Qual a validade da carta de condução para condutores profissionais (Grupo 2) até aos 65 anos?", options: ["15 anos", "10 anos", "5 anos", "2 anos"], correct: "5 anos", category: "Código da Estrada" },
  { id: '49', question: "A condução defensiva caracteriza-se por:", options: ["Conduzir devagar", "Prever erros alheios e agir para evitar acidentes", "Usar sempre os máximos", "Nunca ultrapassar"], correct: "Prever erros alheios e agir para evitar acidentes", category: "Código da Estrada" },
  { id: '66', question: "Ao circular numa autoestrada, por onde deve ser feita a ultrapassagem?", options: ["Pela direita", "Pela esquerda", "Por qualquer lado", "Pela berm"], correct: "Pela esquerda", category: "Código da Estrada" },
  { id: '67', question: "É permitido inverter o sentido de marcha em autoestradas?", options: ["Sim, se não vier ninguém", "Não, é uma contraordenação muito grave", "Sim, nos locais apropriados", "Apenas em caso de engano"], correct: "Não, é uma contraordenação muito grave", category: "Código da Estrada" },
  { id: '68', question: "O sinal 'STOP' obriga a:", options: ["Reduzir a velocidade", "Parar apenas se vierem veículos", "Imobilizar completamente o veículo antes da interseção", "Buzinar"], correct: "Imobilizar completamente o veículo antes da interseção", category: "Código da Estrada" },
  { id: '118', question: "Qual a velocidade máxima dentro das localidades para ligeiros?", options: ["30 km/h", "50 km/h", "70 km/h", "90 km/h"], correct: "50 km/h", category: "Código da Estrada" },
  { id: '119', question: "Qual a velocidade mínima obrigatória numa autoestrada?", options: ["40 km/h", "50 km/h", "60 km/h", "Não existe mínima"], correct: "50 km/h", category: "Código da Estrada" },
  { id: '120', question: "O que indica uma linha descontínua no eixo da via?", options: ["Ultrapassagem proibida", "Ultrapassagem permitida com segurança", "Estacionamento proibido", "Fim de via"], correct: "Ultrapassagem permitida com segurança", category: "Código da Estrada" },
  { id: '121', question: "Ao sair de um parque de estacionamento, quem tem prioridade?", options: ["O veículo que sai do parque", "Os veículos que circulam na via", "Quem se apresentar pela direita", "Ninguém"], correct: "Os veículos que circulam na via", category: "Código da Estrada" },
  { id: '122', question: "É obrigatório ter pneu sobresselente?", options: ["Sim, sempre", "Não, se o veículo tiver kit de reparação ou pneus run-flat", "Apenas em viagens longas", "Não, nunca é preciso"], correct: "Não, se o veículo tiver kit de reparação ou pneus run-flat", category: "Código da Estrada" },
  { id: '123', question: "Onde deve colocar o triângulo de pré-sinalização em caso de avaria?", options: ["A 5 metros do veículo", "A pelo menos 30 metros do veículo, visível a 100 metros", "No tejadilho do carro", "À frente do carro"], correct: "A pelo menos 30 metros do veículo, visível a 100 metros", category: "Código da Estrada" },
  { id: '124', question: "É permitido conduzir de chinelos?", options: ["Não, é proibido expressamente", "Sim, desde que não prejudique a condução segura", "Apenas no verão", "Só em viagens curtas"], correct: "Sim, desde que não prejudique a condução segura", category: "Código da Estrada" },
  { id: '125', question: "Qual a distância lateral mínima para ultrapassar um ciclista?", options: ["1 metro", "1.5 metros", "2 metros", "0.5 metros"], correct: "1.5 metros", category: "Código da Estrada" },
  { id: '126', question: "Nas rotundas, os condutores de veículos de tração animal ou velocípedes podem usar a via exterior?", options: ["Não", "Sim, podem usar a via exterior independentemente da saída", "Apenas se forem sair na 1ª", "Só se a rotunda estiver vazia"], correct: "Sim, podem usar a via exterior independentemente da saída", category: "Código da Estrada" },
  { id: '127', question: "O que significa a luz azul num veículo de emergência?", options: ["Marcha de urgência", "Avaria", "Transporte de valores", "Limpeza de via"], correct: "Marcha de urgência", category: "Código da Estrada" },
  { id: '128', question: "A utilização de luzes de nevoeiro traseiras é obrigatória?", options: ["Sempre que chove", "Apenas em caso de nevoeiro intenso que reduza a visibilidade", "À noite", "Em túneis"], correct: "Apenas em caso de nevoeiro intenso que reduza a visibilidade", category: "Código da Estrada" },

  // ==========================================
  // 3. COMUNICAÇÃO, TURISMO E GEOGRAFIA (TVDE)
  // ==========================================
  { id: '26', question: "Qual a melhor forma de reagir a um passageiro que está a queixar-se do trânsito?", options: ["Ignorar a queixa", "Culpar a Câmara Municipal pelo trânsito", "Mostrar empatia, reconhecer o problema e focar no destino", "Fazer uma reclamação à plataforma sobre o passageiro"], correct: "Mostrar empatia, reconhecer o problema e focar no destino", category: "Comunicação e Turismo" },
  { id: '27', question: "Qual o tom de voz mais adequado ao interagir com um passageiro?", options: ["Autoritário e rápido", "Monótono e formal", "Calmo, audível e profissional", "Informal e excessivamente entusiasta"], correct: "Calmo, audível e profissional", category: "Comunicação e Turismo" },
  { id: '28', question: "Se um passageiro estiver a fazer uma chamada importante, o motorista deve:", options: ["Ligar o rádio mais alto para não ouvir", "Participar na conversa", "Manter o silêncio no habitáculo e conduzir discretamente", "Perguntar sobre a chamada"], correct: "Manter o silêncio no habitáculo e conduzir discretamente", category: "Comunicação e Turismo" },
  { id: '29', question: "Como deve o motorista gerir um passageiro que tenta negociar o preço da viagem durante o percurso?", options: ["Aceitar de imediato a negociação", "Recusar educadamente, explicando que o preço é fixado pela plataforma e que a lei não permite a negociação", "Parar o carro e pedir-lhe para sair", "Contactar a plataforma imediatamente para reportar"], correct: "Recusar educadamente, explicando que o preço é fixado pela plataforma e que a lei não permite a negociação", category: "Comunicação e Turismo" },
  { id: '30', question: "O que é a 'escuta ativa' no contexto da comunicação com o passageiro?", options: ["Falar mais do que o passageiro", "Focar apenas nas instruções de navegação", "Prestar atenção total ao que o passageiro diz, confirmando a compreensão", "Interromper o passageiro para dar a sua opinião"], correct: "Prestar atenção total ao que o passageiro diz, confirmando a compreensão", category: "Comunicação e Turismo" },
  { id: '31', question: "Qual a atitude mais profissional se o motorista se perder durante a viagem?", options: ["Dizer que a culpa é do GPS", "Assumir o erro, pedir desculpa e informar o passageiro sobre a correção da rota", "Continuar a conduzir na esperança de encontrar o caminho", "Pedir ao passageiro que use o seu próprio mapa"], correct: "Assumir o erro, pedir desculpa e informar o passageiro sobre a correção da rota", category: "Comunicação e Turismo" },
  { id: '32', question: "Ao iniciar uma viagem, o motorista deve:", options: ["Perguntar sobre a vida pessoal do passageiro", "Confirmar o nome do passageiro e o destino com cortesia", "Manter o silêncio total", "Fazer uma crítica à plataforma"], correct: "Confirmar o nome do passageiro e o destino com cortesia", category: "Comunicação e Turismo" },
  { id: '33', question: "Qual a importância da higiene pessoal e da apresentação para o motorista TVDE?", options: ["É irrelevante, apenas a condução importa", "É importante apenas em viagens longas", "É fundamental para a primeira impressão e satisfação do cliente", "É uma regra imposta pela lei, mas sem impacto prático"], correct: "É fundamental para a primeira impressão e satisfação do cliente", category: "Comunicação e Turismo" },
  { id: '34', question: "Perante um passageiro agressivo ou sob o efeito de álcool, qual a prioridade?", options: ["Discutir com ele até acalmar", "Parar o veículo em segurança, manter a calma e, se necessário, contactar as autoridades", "Expulsá-lo do carro de imediato", "Conduzir muito rápido para terminar a viagem"], correct: "Parar o veículo em segurança, manter a calma e, se necessário, contactar as autoridades", category: "Comunicação e Turismo" },
  { id: '35', question: "O motorista pode fumar no veículo TVDE, mesmo que as janelas estejam abertas?", options: ["Sim, se o passageiro não se queixar", "Não, é proibido por lei no exercício da atividade", "Sim, mas apenas em autoestrada", "Apenas se o veículo estiver parado"], correct: "Não, é proibido por lei no exercício da atividade", category: "Comunicação e Turismo" },
  { id: '50', question: "Se encontrar um objeto perdido no veículo, o que deve fazer?", options: ["Ficar com ele", "Deitar fora", "Reportar à plataforma e tentar devolver ao passageiro ou entregar às autoridades", "Dar ao próximo passageiro"], correct: "Reportar à plataforma e tentar devolver ao passageiro ou entregar às autoridades", category: "Comunicação e Turismo" },
  { id: '51', question: "Como proceder no transporte de passageiros com mobilidade reduzida?", options: ["Recusar a viagem", "Cobrar uma taxa extra", "Prestar o auxílio necessário no embarque e desembarque", "Pedir que venham acompanhados"], correct: "Prestar o auxílio necessário no embarque e desembarque", category: "Comunicação e Turismo" },
  { id: '52', question: "Qual a língua que o motorista deve dominar obrigatoriamente?", options: ["Inglês", "Português", "Espanhol", "Francês"], correct: "Português", category: "Comunicação e Turismo" },
  { id: '53', question: "O que fazer em caso de conflito com outro condutor na estrada?", options: ["Sair do carro e discutir", "Buzinar insistentemente", "Manter a calma, não reagir a provocações e focar na segurança do passageiro", "Perseguir o outro condutor"], correct: "Manter a calma, não reagir a provocações e focar na segurança do passageiro", category: "Comunicação e Turismo" },
  { id: '54', question: "A ventilação e temperatura do veículo devem ser:", options: ["Ao gosto do motorista", "Sempre desligadas para poupar", "Ajustadas de acordo com o conforto do passageiro", "Sempre no máximo"], correct: "Ajustadas de acordo com o conforto do passageiro", category: "Comunicação e Turismo" },
  { id: '55', question: "O rádio deve estar:", options: ["No volume máximo", "Em estações de debate político", "Desligado ou em volume baixo/moderado, segundo a preferência do passageiro", "Sintonizado em notícias apenas"], correct: "Desligado ou em volume baixo/moderado, segundo a preferência do passageiro", category: "Comunicação e Turismo" },
  // GEOGRAFIA E TURISMO
  { id: '129', question: "O Aeroporto Humberto Delgado situa-se em que cidade?", options: ["Porto", "Faro", "Lisboa", "Funchal"], correct: "Lisboa", category: "Comunicação e Turismo" },
  { id: '130', question: "Onde se localiza a Torre dos Clérigos?", options: ["Lisboa", "Coimbra", "Porto", "Braga"], correct: "Porto", category: "Comunicação e Turismo" },
  { id: '131', question: "Qual destas estações de comboio serve o centro de Lisboa?", options: ["Campanhã", "São Bento", "Santa Apolónia", "Devesas"], correct: "Santa Apolónia", category: "Comunicação e Turismo" },
  { id: '132', question: "A estação de São Bento é famosa pelos seus azulejos e situa-se em:", options: ["Lisboa", "Porto", "Aveiro", "Évora"], correct: "Porto", category: "Comunicação e Turismo" },
  { id: '133', question: "O Mosteiro dos Jerónimos é um marco turístico importante em:", options: ["Sintra", "Belém (Lisboa)", "Cascais", "Mafra"], correct: "Belém (Lisboa)", category: "Comunicação e Turismo" },
  { id: '134', question: "Se um turista pedir para ir ao 'Oceanário', deve dirigir-se para:", options: ["Baixa Chiado", "Parque das Nações", "Alfama", "Bairro Alto"], correct: "Parque das Nações", category: "Comunicação e Turismo" },
  { id: '135', question: "A Ponte 25 de Abril liga Lisboa a que cidade na outra margem?", options: ["Montijo", "Barreiro", "Almada", "Setúbal"], correct: "Almada", category: "Comunicação e Turismo" },
  { id: '136', question: "O Aeroporto Francisco Sá Carneiro serve que região?", options: ["Algarve", "Madeira", "Grande Porto", "Açores"], correct: "Grande Porto", category: "Comunicação e Turismo" },
  { id: '137', question: "Qual é a principal zona balnear perto de Lisboa, acessível pela A5?", options: ["Nazaré", "Cascais/Estoril", "Tróia", "Algarve"], correct: "Cascais/Estoril", category: "Comunicação e Turismo" },
  { id: '138', question: "O Santuário de Fátima localiza-se perto de que autoestrada principal?", options: ["A1", "A2", "A22", "A6"], correct: "A1", category: "Comunicação e Turismo" },
  { id: '139', question: "Se um cliente pedir para ir à 'Ribeira', provavelmente está na cidade de:", options: ["Lisboa", "Porto", "Faro", "Coimbra"], correct: "Porto", category: "Comunicação e Turismo" },
  { id: '140', question: "Qual a estação de comboios moderna situada no Parque das Nações?", options: ["Gare do Oriente", "Rossio", "Cais do Sodré", "Entrecampos"], correct: "Gare do Oriente", category: "Comunicação e Turismo" },
  { id: '141', question: "A Serra de Sintra é um destino popular. O acesso principal faz-se via:", options: ["IC19 ou A16", "Ponte Vasco da Gama", "A2", "A1"], correct: "IC19 ou A16", category: "Comunicação e Turismo" },
  { id: '142', question: "Onde fica localizado o Casino Estoril?", options: ["Lisboa", "Cascais", "Estoril", "Sintra"], correct: "Estoril", category: "Comunicação e Turismo" },
  { id: '143', question: "A 'Baixa Pombalina' é o centro histórico de:", options: ["Porto", "Lisboa", "Guimarães", "Braga"], correct: "Lisboa", category: "Comunicação e Turismo" },
  { id: '144', question: "Se um turista quiser ir às 'Caves do Vinho do Porto', deve atravessar a ponte para:", options: ["Matosinhos", "Vila Nova de Gaia", "Maia", "Gondomar"], correct: "Vila Nova de Gaia", category: "Comunicação e Turismo" },
  
  // ==========================================
  // 4. INGLÊS TÉCNICO PARA MOTORISTAS
  // ==========================================
  { id: '145', question: "Se um passageiro disser 'Please turn left', deve virar para a:", options: ["Direita", "Esquerda", "Frente", "Trás"], correct: "Esquerda", category: "Inglês Técnico" },
  { id: '146', question: "A palavra 'Airport' significa:", options: ["Porto", "Estação", "Aeroporto", "Hospital"], correct: "Aeroporto", category: "Inglês Técnico" },
  { id: '147', question: "Se o passageiro disser 'Slow down', deve:", options: ["Acelerar", "Parar", "Reduzir a velocidade", "Buzinar"], correct: "Reduzir a velocidade", category: "Inglês Técnico" },
  { id: '148', question: "A frase 'Can you open the trunk/boot?' refere-se a:", options: ["Abrir a janela", "Abrir a porta", "Abrir a bagageira", "Ligar o ar condicionado"], correct: "Abrir a bagageira", category: "Inglês Técnico" },
  { id: '149', question: "O que significa 'Seatbelt'?", options: ["Banco", "Cinto de segurança", "Volante", "Travão"], correct: "Cinto de segurança", category: "Inglês Técnico" },
  { id: '150', question: "Se o passageiro perguntar 'How long?', quer saber:", options: ["Quanto custa", "Quanto tempo demora", "Qual a distância", "O seu nome"], correct: "Quanto tempo demora", category: "Inglês Técnico" },
  { id: '151', question: "A palavra 'Traffic jam' significa:", options: ["Doce de tráfego", "Semáforo", "Engarrafamento/Trânsito", "Polícia"], correct: "Engarrafamento/Trânsito", category: "Inglês Técnico" },
  { id: '152', question: "Se o passageiro disser 'Straight ahead', deve:", options: ["Virar à direita", "Virar à esquerda", "Seguir em frente", "Inverter a marcha"], correct: "Seguir em frente", category: "Inglês Técnico" },
  { id: '153', question: "A palavra 'Cash' refere-se a:", options: ["Cartão de crédito", "Dinheiro vivo", "Multibanco", "App"], correct: "Dinheiro vivo", category: "Inglês Técnico" },
  { id: '154', question: "Se disserem 'Stop here, please', deve:", options: ["Continuar", "Acelerar", "Parar aqui", "Voltar para trás"], correct: "Parar aqui", category: "Inglês Técnico" },

  // ==========================================
  // 5. PRIMEIROS SOCORROS (BÁSICO E AVANÇADO)
  // ==========================================
  { id: '56', question: "Qual o número europeu de emergência?", options: ["112", "911", "115", "118"], correct: "112", category: "Segurança e Socorro" },
  { id: '57', question: "Em caso de acidente, qual a ordem correta de atuação (PAS)?", options: ["Socorrer, Prevenir, Alertar", "Prevenir, Alertar, Socorrer", "Alertar, Prevenir, Socorrer", "Fugir, Ligar, Esperar"], correct: "Prevenir, Alertar, Socorrer", category: "Segurança e Socorro" },
  { id: '58', question: "O que é a Posição Lateral de Segurança (PLS)?", options: ["Posição de condução", "Posição para dormir", "Posição para colocar vítimas inconscientes que respiram", "Posição para vítimas com fraturas na coluna"], correct: "Posição para colocar vítimas inconscientes que respiram", category: "Segurança e Socorro" },
  { id: '59', question: "Deve-se dar água a uma vítima de acidente?", options: ["Sim, sempre", "Não, nunca", "Apenas se tiver sede", "Sim, com açúcar"], correct: "Não, nunca", category: "Segurança e Socorro" },
  { id: '60', question: "Para estancar uma hemorragia externa visível, deve-se:", options: ["Fazer um torniquete no pescoço", "Aplicar compressão direta sobre a ferida", "Lavar com água quente", "Não fazer nada"], correct: "Aplicar compressão direta sobre a ferida", category: "Segurança e Socorro" },
  { id: '69', question: "Em caso de queimadura, o que se deve aplicar?", options: ["Gelo diretamente", "Água fria corrente", "Manteiga", "Pasta de dentes"], correct: "Água fria corrente", category: "Segurança e Socorro" },
  { id: '70', question: "O que significa a sigla SBV?", options: ["Suporte Básico de Vida", "Socorro Bem Vindo", "Serviço de Bombeiros Voluntários", "Sinalização Básica de Via"], correct: "Suporte Básico de Vida", category: "Segurança e Socorro" },
  { id: '155', question: "Num acidente com motociclista, deve-se retirar o capacete?", options: ["Sim, imediatamente", "Não, nunca se deve retirar o capacete salvo se for essencial para garantir a respiração (e com treino)", "Sim, se ele pedir", "Apenas se estiver calor"], correct: "Não, nunca se deve retirar o capacete salvo se for essencial para garantir a respiração (e com treino)", category: "Segurança e Socorro" },
  { id: '156', question: "O colete retrorrefletor é obrigatório para quem?", options: ["Apenas para o condutor", "Para todos os ocupantes que saiam do veículo na via", "Apenas para crianças", "Não é obrigatório"], correct: "Para todos os ocupantes que saiam do veículo na via", category: "Segurança e Socorro" },
  { id: '157', question: "Se uma vítima não responde e não respira, deve-se:", options: ["Colocar em PLS", "Iniciar Suporte Básico de Vida (Compressões)", "Dar água", "Esperar que acorde"], correct: "Iniciar Suporte Básico de Vida (Compressões)", category: "Segurança e Socorro" },
  { id: '158', question: "O que deve dizer ao ligar para o 112?", options: ["Desligar rápido", "Localização exata, tipo de ocorrência e número de vítimas", "Apenas o nome", "Pedir reboque"], correct: "Localização exata, tipo de ocorrência e número de vítimas", category: "Segurança e Socorro" },
  { id: '159', question: "Em caso de choque elétrico (veículo contra poste), a primeira atitude é:", options: ["Tocar na vítima", "Garantir que a corrente foi cortada antes de tocar no veículo ou vítima", "Atirar água", "Fugir"], correct: "Garantir que a corrente foi cortada antes de tocar no veículo ou vítima", category: "Segurança e Socorro" },
  { id: '160', question: "O kit de primeiros socorros é obrigatório no TVDE?", options: ["Não", "Sim, recomendável", "A lei não especifica, mas o triângulo e colete são obrigatórios", "Apenas compressas"], correct: "A lei não especifica, mas o triângulo e colete são obrigatórios", category: "Segurança e Socorro" },

  // ==========================================
  // 6. MECÂNICA E ECO-CONDUÇÃO
  // ==========================================
  { id: '71', question: "O que é a Eco-condução?", options: ["Conduzir apenas carros elétricos", "Uma forma de condução eficiente que reduz o consumo e a sinistralidade", "Conduzir sempre a 30 km/h", "Desligar o motor nas descidas"], correct: "Uma forma de condução eficiente que reduz o consumo e a sinistralidade", category: "Mecânica e Eco-condução" },
  { id: '72', question: "Qual a pressão correta dos pneus?", options: ["Sempre 30 PSI", "A indicada pelo fabricante do veículo", "A máxima que o pneu aguentar", "Quanto menos, melhor aderência"], correct: "A indicada pelo fabricante do veículo", category: "Mecânica e Eco-condução" },
  { id: '73', question: "Para poupar combustível, as mudanças de velocidade devem ser feitas:", options: ["No red line", "A baixas rotações", "Sempre na primeira velocidade", "Saltando mudanças"], correct: "A baixas rotações", category: "Mecânica e Eco-condução" },
  { id: '74', question: "Um filtro de ar sujo provoca:", options: ["Menor consumo", "Aumento do consumo de combustível e poluição", "Melhor rendimento do motor", "Arrefecimento do motor"], correct: "Aumento do consumo de combustível e poluição", category: "Mecânica e Eco-condução" },
  { id: '75', question: "O nível do óleo do motor deve ser verificado com:", options: ["O motor a trabalhar e quente", "O motor parado e frio, em local plano", "O motor parado, numa subida", "Em andamento"], correct: "O motor parado e frio, em local plano", category: "Mecânica e Eco-condução" },
  { id: '76', question: "O que indica a luz da bateria acesa no painel?", options: ["A bateria está totalmente carregada", "Falha no sistema de carga (alternador/bateria)", "As luzes estão ligadas", "O motor de arranque está avariado"], correct: "Falha no sistema de carga (alternador/bateria)", category: "Mecânica e Eco-condução" },
  { id: '77', question: "A profundidade mínima dos pneus ligeiros é:", options: ["1.0 mm", "1.6 mm", "2.0 mm", "0.5 mm"], correct: "1.6 mm", category: "Mecânica e Eco-condução" },
  { id: '78', question: "Conduzir com janelas abertas a alta velocidade:", options: ["Poupa ar condicionado e combustível", "Aumenta a resistência aerodinâmica e o consumo", "Arrefece o motor", "Não afeta o consumo"], correct: "Aumenta a resistência aerodinâmica e o consumo", category: "Mecânica e Eco-condução" },
  { id: '79', question: "O líquido de refrigeração serve para:", options: ["Limpar o para-brisas", "Lubrificar o motor", "Manter a temperatura ideal de funcionamento do motor", "Travar o carro"], correct: "Manter a temperatura ideal de funcionamento do motor", category: "Mecânica e Eco-condução" },
  { id: '80', question: "O uso de ar condicionado pode aumentar o consumo de combustível?", options: ["Sim, significativamente", "Não, é elétrico", "Apenas em carros a gasóleo", "Não afeta nada"], correct: "Sim, significativamente", category: "Mecânica e Eco-condução" },
  { id: '81', question: "Em descidas acentuadas, deve-se:", options: ["Colocar em ponto morto", "Desligar o motor", "Utilizar o travão motor (mudança engrenada)", "Travar a fundo constantemente"], correct: "Utilizar o travão motor (mudança engrenada)", category: "Mecânica e Eco-condução" },
  { id: '82', question: "O que é o ABS?", options: ["Sistema de navegação", "Sistema antibloqueio de travagem", "Airbag lateral", "Controlo de tração"], correct: "Sistema antibloqueio de travagem", category: "Mecânica e Eco-condução" },
  { id: '83', question: "Pneus com pressão abaixo do recomendado provocam:", options: ["Desgaste nas laterais e aumento de consumo", "Desgaste no centro", "Menor consumo", "Direção mais leve"], correct: "Desgaste nas laterais e aumento de consumo", category: "Mecânica e Eco-condução" },
  { id: '84', question: "Qual a principal causa de desgaste prematuro da embraiagem?", options: ["Conduzir com o pé no pedal de embraiagem", "Trocar muitas mudanças", "Arrancar devagar", "Usar o travão de mão"], correct: "Conduzir com o pé no pedal de embraiagem", category: "Mecânica e Eco-condução" },
  { id: '85', question: "Veículos elétricos em TVDE têm benefícios?", options: ["Não, pagam mais impostos", "Sim, menores custos de manutenção e energia", "Têm menos autonomia em cidade", "Não podem andar na autoestrada"], correct: "Sim, menores custos de manutenção e energia", category: "Mecânica e Eco-condução" },
  { id: '161', question: "O sistema 'Start-Stop' ajuda a:", options: ["Aumentar a velocidade", "Poupar combustível em paragens", "Travar mais rápido", "Arrefecer o carro"], correct: "Poupar combustível em paragens", category: "Mecânica e Eco-condução" },
  { id: '162', question: "Uma luz vermelha no painel de instrumentos geralmente indica:", options: ["Um sistema ligado", "Uma avaria grave ou perigo que exige paragem imediata", "Avaria ligeira", "Luzes de nevoeiro"], correct: "Uma avaria grave ou perigo que exige paragem imediata", category: "Mecânica e Eco-condução" },
  { id: '163', question: "O que é o ESP?", options: ["Controlo Eletrónico de Estabilidade", "Sistema de Parqueamento", "Direção Assistida", "Espelho Panorâmico"], correct: "Controlo Eletrónico de Estabilidade", category: "Mecânica e Eco-condução" },
  { id: '164', question: "Pneus 'carecas' (sem piso) aumentam o risco de:", options: ["Furo", "Aquaplaning e perda de aderência", "Consumo", "Ruído"], correct: "Aquaplaning e perda de aderência", category: "Mecânica e Eco-condução" },
  { id: '165', question: "Em veículos diesel, a luz da 'mola' (aquecimento) serve para:", options: ["Indicar pré-aquecimento das velas antes do arranque", "Amortecedores", "Travões", "Turbo"], correct: "Indicar pré-aquecimento das velas antes do arranque", category: "Mecânica e Eco-condução" },

  // ==========================================
  // 7. SEGURANÇA RODOVIÁRIA (PRP/IMT AVANÇADO)
  // ==========================================
  { id: '86', question: "Qual é o tempo médio de reação de um condutor em estado normal?", options: ["0,1 segundos", "0,5 segundos", "1 segundo", "2 segundos"], correct: "1 segundo", category: "Segurança Rodoviária (PRP)" },
  { id: '87', question: "A distância de paragem é a soma de:", options: ["Distância de reação + Distância de travagem", "Distância de reação + Distância de segurança", "Distância de travagem + Comprimento do veículo", "Apenas a distância de travagem"], correct: "Distância de reação + Distância de travagem", category: "Segurança Rodoviária (PRP)" },
  { id: '88', question: "Se duplicar a velocidade, a distância de travagem aumenta aproximadamente:", options: ["2 vezes", "3 vezes", "4 vezes", "Não altera"], correct: "4 vezes", category: "Segurança Rodoviária (PRP)" },
  { id: '89', question: "A fadiga e a sonolência são responsáveis por cerca de:", options: ["5% dos acidentes", "10% dos acidentes", "20% dos acidentes", "50% dos acidentes"], correct: "20% dos acidentes", category: "Segurança Rodoviária (PRP)" },
  { id: '90', question: "O 'efeito túnel' provocado pelo aumento da velocidade causa:", options: ["Melhor visão periférica", "Redução do campo visual e menor perceção lateral", "Aumento da acuidade visual", "Maior perceção das cores"], correct: "Redução do campo visual e menor perceção lateral", category: "Segurança Rodoviária (PRP)" },
  { id: '91', question: "Um condutor com uma TAS de 0,60 g/l incorre numa contraordenação:", options: ["Leve", "Grave", "Muito Grave", "Crime"], correct: "Grave", category: "Segurança Rodoviária (PRP)" },
  { id: '92', question: "Um condutor com uma TAS igual ou superior a 1,20 g/l incorre em:", options: ["Contraordenação Muito Grave", "Crime de condução em estado de embriaguez", "Apenas multa administrativa", "Inibição de conduzir por 1 mês"], correct: "Crime de condução em estado de embriaguez", category: "Segurança Rodoviária (PRP)" },
  { id: '93', question: "A utilização do cinto de segurança é obrigatória:", options: ["Apenas nos bancos da frente", "Apenas fora das localidades", "Para todos os ocupantes do veículo, sempre", "Apenas se o veículo tiver airbag"], correct: "Para todos os ocupantes do veículo, sempre", category: "Segurança Rodoviária (PRP)" },
  { id: '94', question: "Ao circular num túnel, deve ligar as luzes de:", options: ["Máximos", "Médios (cruzamento)", "Mínimos", "Nevoeiro"], correct: "Médios (cruzamento)", category: "Segurança Rodoviária (PRP)" },
  { id: '95', question: "O que é a 'distância de reação'?", options: ["A distância percorrida desde que se vê o perigo até se pisar o travão", "A distância percorrida com o travão a fundo", "A distância entre dois veículos", "A distância após a paragem"], correct: "A distância percorrida desde que se vê o perigo até se pisar o travão", category: "Segurança Rodoviária (PRP)" },
  { id: '96', question: "O uso de auscultadores sonoros duplos durante a condução é:", options: ["Permitido", "Proibido", "Permitido se o volume for baixo", "Permitido apenas num ouvido"], correct: "Proibido", category: "Segurança Rodoviária (PRP)" },
  { id: '97', question: "Em caso de encandeamento por outro veículo, deve:", options: ["Ligar os máximos", "Desviar o olhar para a berm (lado direito) e abrandar", "Travar bruscamente", "Fechar os olhos momentaneamente"], correct: "Desviar o olhar para a berm (lado direito) e abrandar", category: "Segurança Rodoviária (PRP)" },
  { id: '98', question: "O encosto de cabeça serve principalmente para:", options: ["Conforto do condutor", "Evitar o efeito de chicote (lesões cervicais) em caso de colisão", "Descansar em viagens longas", "Melhorar a estética do banco"], correct: "Evitar o efeito de chicote (lesões cervicais) em caso de colisão", category: "Segurança Rodoviária (PRP)" },
  { id: '99', question: "A circulação em rotundas deve fazer-se:", options: ["Pela direita, se for sair na 1ª saída; pelas vias de dentro, se for sair nas seguintes", "Sempre pela via mais à direita", "Sempre pela via do meio", "Pela via que tiver menos trânsito"], correct: "Pela direita, se for sair na 1ª saída; pelas vias de dentro, se for sair nas seguintes", category: "Segurança Rodoviária (PRP)" },
  { id: '100', question: "Os peões são considerados utilizadores vulneráveis. O condutor deve:", options: ["Buzinar para saírem da frente", "Moder a velocidade e prever comportamentos imprevisíveis", "Manter a velocidade se estiver na sua via", "Passar o mais perto possível"], correct: "Moder a velocidade e prever comportamentos imprevisíveis", category: "Segurança Rodoviária (PRP)" },
  { id: '101', question: "Em caso de nevoeiro intenso, deve utilizar:", options: ["Luzes de máximos", "Luzes de nevoeiro e médios", "Apenas mínimos", "Luzes de emergência (4 piscas) em andamento"], correct: "Luzes de nevoeiro e médios", category: "Segurança Rodoviária (PRP)" },
  { id: '102', question: "A condução sob efeito de medicamentos que causam sonolência:", options: ["É segura se tomar café", "Deve ser evitada, pois afeta a capacidade de reação", "É permitida sem restrições", "Melhora a condução"], correct: "Deve ser evitada, pois afeta a capacidade de reação", category: "Segurança Rodoviária (PRP)" },
  { id: '103', question: "O sistema ISOFIX serve para:", options: ["Fixar a carga na bagageira", "Fixar cadeiras de criança de forma segura e rápida", "Ajustar o banco do condutor", "Regular o cinto de segurança"], correct: "Fixar cadeiras de criança de forma segura e rápida", category: "Segurança Rodoviária (PRP)" },
  { id: '104', question: "Qual é o limite legal de álcool (TAS) para condutores em regime probatório ou condutores profissionais (táxi/TVDE/pesados)?", options: ["0,50 g/l", "0,20 g/l", "0,00 g/l", "0,80 g/l"], correct: "0,20 g/l", category: "Segurança Rodoviária (PRP)" },
  { id: '105', question: "O sinal de 'Cedência de Passagem' obriga a:", options: ["Parar sempre", "Dar prioridade aos veículos que circulam na via que se vai entrar", "Acelerar para passar primeiro", "Buzinar"], correct: "Dar prioridade aos veículos que circulam na via que se vai entrar", category: "Segurança Rodoviária (PRP)" },
  { id: '106', question: "A distância lateral de segurança ao ultrapassar um ciclista deve ser de:", options: ["1 metro", "1,5 metros", "0,5 metros", "2 metros"], correct: "1,5 metros", category: "Segurança Rodoviária (PRP)" },
  { id: '107', question: "A 'visão em túnel' pode ser provocada por:", options: ["Velocidade excessiva e álcool", "Condução noturna", "Óculos de sol", "Chuva"], correct: "Velocidade excessiva e álcool", category: "Segurança Rodoviária (PRP)" },
  { id: '108', question: "Se o veículo entrar em derrapagem (sobreviragem - traseira foge), deve:", options: ["Travar a fundo", "Virar o volante no sentido da derrapagem (contra-brecar)", "Largar o volante", "Acelerar a fundo"], correct: "Virar o volante no sentido da derrapagem (contra-brecar)", category: "Segurança Rodoviária (PRP)" },
  { id: '109', question: "O airbag substitui o cinto de segurança?", options: ["Sim, é mais seguro", "Não, é um sistema complementar e funciona em conjunto com o cinto", "Sim, em cidade", "Apenas em colisões frontais"], correct: "Não, é um sistema complementar e funciona em conjunto com o cinto", category: "Segurança Rodoviária (PRP)" },
  { id: '110', question: "Qual a coima por utilizar o telemóvel a conduzir (segurar na mão)?", options: ["Leve", "Grave", "Muito Grave", "Não tem coima"], correct: "Grave", category: "Segurança Rodoviária (PRP)" },
];