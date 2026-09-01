// ============================================================================
// Conecta+ — dados mockados (protótipo acadêmico)
// Todas as empresas, instituições, vagas, cursos e rotas abaixo são FICTÍCIOS,
// criados apenas para demonstrar o fluxo de navegação do protótipo.
// Não há nenhuma integração real, persistência em banco ou API por trás disso.
// ============================================================================

export const REGIOES = [
  'Zona Norte',
  'Zona Sul',
  'Zona Leste',
  'Zona Oeste',
  'Centro',
]

export const ESCOLARIDADES = [
  'Ensino Fundamental incompleto',
  'Ensino Fundamental completo',
  'Ensino Médio incompleto',
  'Ensino Médio completo',
  'Cursando Ensino Superior',
]

export const INTERESSES = [
  'Tecnologia',
  'Administração',
  'Vendas e Atendimento',
  'Logística',
  'Marketing e Design',
  'Manutenção e Serviços Técnicos',
  'Educação e Cuidado',
]

export const TIPOS_OPORTUNIDADE = [
  { valor: 'emprego', rotulo: 'Emprego' },
  { valor: 'estagio', rotulo: 'Estágio' },
  { valor: 'jovem_aprendiz', rotulo: 'Jovem Aprendiz' },
]

// Habilidades "de base" que consideramos que todo jovem já traz de alguma
// forma (vivência, escola, comunidade) — usadas para dar um ponto de partida
// de compatibilidade no protótipo, sem precisar de um formulário de skills.
export const HABILIDADES_BASE = ['Comunicação', 'Organização', 'Pontualidade']

// --------------------------------------------------------------------------
// Cursos fictícios
// --------------------------------------------------------------------------
export const cursos = [
  {
    id: 'c1',
    nome: 'Excel Básico para o Mercado de Trabalho',
    instituicao: 'Instituto Aprender Mais',
    duracao: '20 horas',
    modalidade: 'Online',
    habilidadeAlvo: 'Excel básico',
    area: 'Administração',
    regiao: 'Online',
    descricao:
      'Curso introdutório para aprender planilhas, fórmulas simples e organização de dados no dia a dia do trabalho.',
    rotaId: null,
  },
  {
    id: 'c2',
    nome: 'Lógica de Programação para Iniciantes',
    instituicao: 'Escola Técnica Novo Horizonte',
    duracao: '40 horas',
    modalidade: 'Online',
    habilidadeAlvo: 'Lógica de programação',
    area: 'Tecnologia',
    regiao: 'Online',
    descricao:
      'Primeiros passos em lógica de programação, com exercícios práticos para quem nunca programou.',
    rotaId: null,
  },
  {
    id: 'c3',
    nome: 'Atendimento ao Cliente e Comunicação',
    instituicao: 'Centro Educacional Passos',
    duracao: '15 horas',
    modalidade: 'Presencial',
    habilidadeAlvo: 'Atendimento ao cliente',
    area: 'Vendas e Atendimento',
    regiao: 'Zona Sul',
    descricao:
      'Técnicas práticas de atendimento, escuta ativa e comunicação para quem quer trabalhar com o público.',
    rotaId: 'r2',
  },
  {
    id: 'c4',
    nome: 'Redes Sociais e Marketing Digital para Iniciantes',
    instituicao: 'Instituto Criativa Jovem',
    duracao: '30 horas',
    modalidade: 'Online',
    habilidadeAlvo: 'Redes sociais',
    area: 'Marketing e Design',
    regiao: 'Online',
    descricao:
      'Introdução à criação de conteúdo, redes sociais e edição básica de imagens para divulgação de marcas.',
    rotaId: null,
  },
  {
    id: 'c5',
    nome: 'Noções de Manutenção Elétrica Residencial',
    instituicao: 'Escola Técnica Novo Horizonte',
    duracao: '25 horas',
    modalidade: 'Presencial',
    habilidadeAlvo: 'Manutenção elétrica básica',
    area: 'Manutenção e Serviços Técnicos',
    regiao: 'Zona Norte',
    descricao:
      'Fundamentos de instalações elétricas básicas e segurança para quem quer atuar com manutenção predial.',
    rotaId: 'r3',
  },
  {
    id: 'c6',
    nome: 'Organização de Estoque e Logística Básica',
    instituicao: 'Instituto Aprender Mais',
    duracao: '20 horas',
    modalidade: 'Presencial',
    habilidadeAlvo: 'Noções de logística',
    area: 'Logística',
    regiao: 'Zona Leste',
    descricao:
      'Conceitos básicos de controle de estoque, recebimento de mercadorias e organização de armazém.',
    rotaId: 'r1',
  },
]

// --------------------------------------------------------------------------
// Rotas fictícias de mobilidade urbana
// --------------------------------------------------------------------------
export const rotas = [
  {
    id: 'r1',
    origemReferencia: 'Zona Norte / Zona Leste',
    resumo: 'Ônibus 425 até a Estação Central + caminhada curta',
    passos: [
      { tipo: 'a_pe', detalhe: 'Caminhar 5 min até o ponto Terminal Periferia' },
      { tipo: 'onibus', detalhe: 'Ônibus 425 (Terminal Periferia → Centro), cerca de 35 min' },
      { tipo: 'a_pe', detalhe: 'Caminhar 10 min até o destino' },
    ],
    duracaoEstimada: '≈ 50 min',
    custoEstimado: 'R$ 4,80 (1 tarifa de ônibus)',
  },
  {
    id: 'r2',
    origemReferencia: 'Zona Sul',
    resumo: 'Ônibus 118 + integração com Ônibus 302',
    passos: [
      { tipo: 'a_pe', detalhe: 'Caminhar 4 min até o ponto Vila Esperança' },
      { tipo: 'onibus', detalhe: 'Ônibus 118 até o Terminal Sul, cerca de 20 min' },
      { tipo: 'integracao', detalhe: 'Integração com Ônibus 302, cerca de 15 min' },
      { tipo: 'a_pe', detalhe: 'Caminhar 5 min até o destino' },
    ],
    duracaoEstimada: '≈ 44 min',
    custoEstimado: 'R$ 4,80 (integração incluída)',
  },
  {
    id: 'r3',
    origemReferencia: 'Zona Oeste / Centro',
    resumo: 'Metrô Linha Leste até Estação Novo Rumo',
    passos: [
      { tipo: 'a_pe', detalhe: 'Caminhar 6 min até a Estação Jardim das Flores' },
      { tipo: 'metro', detalhe: 'Metrô Linha Leste até Estação Novo Rumo, cerca de 18 min' },
      { tipo: 'a_pe', detalhe: 'Caminhar 8 min até o destino' },
    ],
    duracaoEstimada: '≈ 32 min',
    custoEstimado: 'R$ 5,20',
  },
]

// --------------------------------------------------------------------------
// Oportunidades fictícias (emprego, estágio, Jovem Aprendiz)
// --------------------------------------------------------------------------
export const oportunidades = [
  {
    id: 'v1',
    tipo: 'jovem_aprendiz',
    cargo: 'Auxiliar Administrativo',
    empresa: 'Grupo Horizonte Comércio',
    regiao: 'Zona Norte',
    horario: 'Segunda a sexta, manhã (4h/dia)',
    nivel: 'Sem experiência',
    area: 'Administração',
    requisitos: ['Comunicação', 'Organização', 'Excel básico'],
    beneficios: ['Vale-transporte', 'Vale-alimentação', 'Bolsa auxílio'],
    descricao:
      'Apoio em tarefas administrativas do dia a dia, organização de documentos e atendimento interno, como parte do programa de Jovem Aprendiz da empresa.',
    cursoRecomendadoId: 'c1',
    rotaId: 'r1',
  },
  {
    id: 'v2',
    tipo: 'estagio',
    cargo: 'Estagiário(a) de Suporte de TI',
    empresa: 'TechNova Soluções',
    regiao: 'Centro',
    horario: 'Segunda a sexta, tarde (6h/dia)',
    nivel: 'Estudante / iniciante',
    area: 'Tecnologia',
    requisitos: ['Comunicação', 'Lógica de programação'],
    beneficios: ['Vale-transporte', 'Bolsa estágio', 'Auxílio home office'],
    descricao:
      'Apoio no atendimento a chamados técnicos simples e aprendizado prático com a equipe de tecnologia da empresa.',
    cursoRecomendadoId: 'c2',
    rotaId: 'r3',
  },
  {
    id: 'v3',
    tipo: 'emprego',
    cargo: 'Atendente de Loja',
    empresa: 'Comercial Novo Rumo',
    regiao: 'Zona Sul',
    horario: 'Escala 6x1, período integral',
    nivel: 'Iniciante',
    area: 'Vendas e Atendimento',
    requisitos: ['Comunicação', 'Organização', 'Atendimento ao cliente'],
    beneficios: ['Vale-transporte', 'Vale-alimentação', 'Comissão por vendas'],
    descricao:
      'Atendimento ao público, organização das prateleiras e apoio no caixa em loja de comércio local.',
    cursoRecomendadoId: 'c3',
    rotaId: 'r2',
  },
  {
    id: 'v4',
    tipo: 'jovem_aprendiz',
    cargo: 'Auxiliar de Logística',
    empresa: 'Distribuidora Caminho Certo',
    regiao: 'Zona Leste',
    horario: 'Segunda a sexta, manhã (4h/dia)',
    nivel: 'Sem experiência',
    area: 'Logística',
    requisitos: ['Organização', 'Pontualidade', 'Noções de logística'],
    beneficios: ['Vale-transporte', 'Vale-alimentação', 'Bolsa auxílio'],
    descricao:
      'Apoio no recebimento e organização de mercadorias no depósito, como parte do programa Jovem Aprendiz.',
    cursoRecomendadoId: 'c6',
    rotaId: 'r1',
  },
  {
    id: 'v5',
    tipo: 'estagio',
    cargo: 'Assistente de Marketing Digital',
    empresa: 'Agência Ponto Criativo',
    regiao: 'Centro',
    horario: 'Segunda a sexta, tarde (5h/dia)',
    nivel: 'Estudante / iniciante',
    area: 'Marketing e Design',
    requisitos: ['Comunicação', 'Redes sociais'],
    beneficios: ['Vale-transporte', 'Bolsa estágio'],
    descricao:
      'Apoio na criação de conteúdo para redes sociais e organização do calendário de postagens de clientes da agência.',
    cursoRecomendadoId: 'c4',
    rotaId: 'r3',
  },
  {
    id: 'v6',
    tipo: 'emprego',
    cargo: 'Auxiliar de Manutenção Predial',
    empresa: 'ServFácil Manutenção',
    regiao: 'Zona Norte',
    horario: 'Segunda a sábado, período integral',
    nivel: 'Iniciante',
    area: 'Manutenção e Serviços Técnicos',
    requisitos: ['Organização', 'Pontualidade', 'Manutenção elétrica básica'],
    beneficios: ['Vale-transporte', 'Vale-alimentação', 'Plano odontológico'],
    descricao:
      'Apoio em pequenos reparos elétricos e manutenção geral de condomínios e edifícios comerciais.',
    cursoRecomendadoId: 'c5',
    rotaId: 'r3',
  },
  {
    id: 'v7',
    tipo: 'jovem_aprendiz',
    cargo: 'Recepcionista',
    empresa: 'Instituto Novo Ciclo',
    regiao: 'Zona Sul',
    horario: 'Segunda a sexta, manhã (4h/dia)',
    nivel: 'Sem experiência',
    area: 'Vendas e Atendimento',
    requisitos: ['Comunicação', 'Organização', 'Atendimento ao cliente'],
    beneficios: ['Vale-transporte', 'Bolsa auxílio'],
    descricao:
      'Recepção de visitantes, apoio no agendamento de atendimentos e organização da recepção do instituto.',
    cursoRecomendadoId: 'c3',
    rotaId: 'r2',
  },
]

export function rotuloTipo(tipo) {
  return TIPOS_OPORTUNIDADE.find((t) => t.valor === tipo)?.rotulo ?? tipo
}

export function getOportunidadePorId(id) {
  return oportunidades.find((o) => o.id === id)
}

export function getCursoPorId(id) {
  return cursos.find((c) => c.id === id)
}

export function getRotaPorId(id) {
  return rotas.find((r) => r.id === id)
}

// Calcula compatibilidade (%) entre as habilidades do usuário e os
// requisitos de uma oportunidade, e retorna a lista de habilidades faltantes.
export function calcularCompatibilidade(oportunidade, habilidadesUsuario) {
  const requisitos = oportunidade.requisitos
  const possuidas = new Set(habilidadesUsuario)
  const faltantes = requisitos.filter((r) => !possuidas.has(r))
  const atendidos = requisitos.length - faltantes.length
  const percentual = requisitos.length
    ? Math.round((atendidos / requisitos.length) * 100)
    : 100
  return { percentual, faltantes }
}
