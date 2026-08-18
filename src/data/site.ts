/**
 * Dados editáveis do site "O Rui dos Computadores".
 * Todo o conteúdo textual e de contacto vive aqui, separado do layout.
 */

// TODO (a preencher pelo Rui antes de publicar): telefone, email, WhatsApp.
export const contacto = {
  marca: "O Rui dos Computadores",
  area: "Cascais e arredores",
  telefone: "" as string, // ex.: "+351 900 000 000"
  email: "" as string, // ex.: "ola@oruidoscomputadores.pt"
  whatsapp: "" as string, // link wa.me completo
  placeholder: "Contacto a adicionar",
};

export const whatsappHref = contacto.whatsapp || "#contactos";
export const telefoneLabel = contacto.telefone || contacto.placeholder;
export const emailLabel = contacto.email || contacto.placeholder;

export const navegacao = [
  { label: "Serviços", to: "/servicos" },
  { label: "Como funciona", to: "/como-funciona" },
  { label: "Para negócios", to: "/para-negocios" },
  { label: "Sobre o Rui", to: "/sobre-o-rui" },
  { label: "Preçário", to: "/precario" },
  { label: "Contactos", to: "/contactos" },
] as const;


export const sintomasTicker = [
  "Está lento",
  "Não liga",
  "Wi-Fi falha",
  "Ficheiros perdidos",
  "Impressora não imprime",
];

export type Sintoma = {
  id: string;
  numero: string;
  titulo: string;
  nota: string;
  icone: "lento" | "wifi" | "power" | "ficheiros" | "ajuda";
};

export const sintomas: Sintoma[] = [
  {
    id: "lento",
    numero: "01",
    titulo: "Computador lento",
    nota: "Normalmente é disco cheio, arranque sobrecarregado ou pó a mais. Resolve-se.",
    icone: "lento",
  },
  {
    id: "internet",
    numero: "02",
    titulo: "Internet instável",
    nota: "Vemos o router, a cobertura Wi-Fi e o que está a interferir em casa.",
    icone: "wifi",
  },
  {
    id: "arranque",
    numero: "03",
    titulo: "Não arranca",
    nota: "Pode ser alimentação, disco ou sistema. Primeiro salvo os teus dados.",
    icone: "power",
  },
  {
    id: "ficheiros",
    numero: "04",
    titulo: "Perdi ficheiros",
    nota: "Não uses mais o equipamento. Quanto mais cedo, maior a hipótese de recuperar.",
    icone: "ficheiros",
  },
  {
    id: "ajuda",
    numero: "05",
    titulo: "Preciso de ajuda",
    nota: "Se não sabes explicar, também está bem. Descreve à tua maneira.",
    icone: "ajuda",
  },
];

export type Servico = {
  numero: string;
  titulo: string;
  beneficio: string;
  detalhe: string;
};

export const servicos: Servico[] = [
  {
    numero: "01",
    titulo: "Reparação de computadores e portáteis",
    beneficio: "Volta a ter o equipamento a funcionar em vez de comprar outro.",
    detalhe: "Ecrãs, teclados, ventoinhas, discos, alimentação e avarias que ninguém explicou.",
  },
  {
    numero: "02",
    titulo: "Limpeza e optimização",
    beneficio: "Um computador rápido outra vez, sem gastar em hardware novo.",
    detalhe: "Limpeza física, arranque, espaço em disco e programas que só atrapalham.",
  },
  {
    numero: "03",
    titulo: "Instalação e configuração",
    beneficio: "Tudo pronto a usar, com as tuas contas e ficheiros no sítio certo.",
    detalhe: "Sistema, cópias de segurança, email, impressoras e equipamento novo.",
  },
  {
    numero: "04",
    titulo: "Recuperação de dados",
    beneficio: "As fotografias e documentos que julgavas perdidos.",
    detalhe: "Discos com falhas, apagamentos acidentais e sistemas que deixaram de arrancar.",
  },
  {
    numero: "05",
    titulo: "Apoio remoto",
    beneficio: "Resolução no próprio dia, sem saíres de casa.",
    detalhe: "Ligo-me ao teu computador contigo a ver tudo o que estou a fazer.",
  },
  {
    numero: "06",
    titulo: "Redes Wi-Fi, impressoras e periféricos",
    beneficio: "Casa toda com sinal e tudo a imprimir à primeira.",
    detalhe: "Routers, repetidores, cabos, impressoras e aquele equipamento que nunca liga.",
  },
];

export const passos = [
  {
    numero: "01",
    titulo: "Explicas",
    texto: "Sem linguagem técnica. Dizes o que se passa.",
  },
  {
    numero: "02",
    titulo: "Diagnostico",
    texto: "Analiso o problema e identifico a causa.",
  },
  {
    numero: "03",
    titulo: "Resolvo",
    texto: "Aplico a solução certa e confirmo contigo.",
  },
];

export const argumentos = [
  { titulo: "Desde 2006", texto: "A resolver problemas de informática." },
  { titulo: "Cascais", texto: "Local, disponível e de confiança." },
  { titulo: "Ao domicílio", texto: "Vou até ti. Tu ficas descansado." },
  {
    titulo: "Particulares e pequenos negócios",
    texto: "Soluções à medida do que precisas.",
  },
];

/**
 * CONTEÚDO DE EXEMPLO — substituir por testemunho real e autorizado
 * antes da publicação. Não representa um cliente concreto.
 */
export const testemunhoExemplo = {
  citacao: "Finalmente alguém que explica sem complicar.",
  atribuicao: "Exemplo editorial — a validar antes da publicação",
};

/** PREÇOS — valores a definir. Editar aqui quando estiverem fechados. */
export const precos = [
  {
    servico: "Diagnóstico",
    valor: "Valor a confirmar",
    nota: "Avaliação do problema e explicação do que é preciso fazer.",
  },
  {
    servico: "Assistência remota",
    valor: "Valor a confirmar",
    nota: "Resolução à distância, contigo a acompanhar.",
  },
  {
    servico: "Assistência ao domicílio",
    valor: "Valor a confirmar",
    nota: "Deslocação em Cascais e arredores.",
  },
];

export const negocios = {
  titulo: "PEQUENOS NEGÓCIOS DE CASCAIS",
  texto:
    "Também ajudo lojas, ateliês, clínicas e escritórios pequenos a manter tudo a trabalhar: computadores, redes Wi-Fi, impressoras e postos de trabalho. Sem contratos complicados e sem conversa empresarial vazia — falas comigo, eu resolvo.",
  pontos: [
    "Computadores e postos de trabalho",
    "Redes Wi-Fi estáveis para clientes e equipa",
    "Impressoras e equipamento partilhado",
    "Apoio próximo, com resposta rápida",
  ],
  cta: "Falar sobre o meu negócio",
};

/** Valor por defeito enquanto os preços finais não estiverem fechados. */
export const VALOR_A_CONFIRMAR = "Valor a confirmar";

/** Áreas de preçário adicionais — editar aqui quando os valores existirem. */
export const precarioAreas = [
  {
    titulo: "Limpeza e optimização",
    valor: VALOR_A_CONFIRMAR,
    nota: "Limpeza física, arranque, espaço em disco e desempenho geral.",
  },
  {
    titulo: "Instalação e configuração",
    valor: VALOR_A_CONFIRMAR,
    nota: "Sistema, contas, email, cópias de segurança e equipamento novo.",
  },
  {
    titulo: "Redes e periféricos",
    valor: VALOR_A_CONFIRMAR,
    nota: "Wi-Fi, routers, repetidores, impressoras e equipamento partilhado.",
  },
  {
    titulo: "Recuperação de dados",
    valor: "Mediante avaliação",
    nota: "Depende sempre do estado do equipamento. Nunca há garantia de recuperação.",
  },
];

export const notasPrecario = [
  "O valor é sempre confirmado contigo antes de qualquer intervenção.",
  "Peças e materiais não estão incluídos, salvo indicação em contrário.",
  "A recuperação de dados depende de avaliação prévia e não tem resultado garantido.",
  "Deslocações fora da área habitual de Cascais e arredores são avaliadas caso a caso.",
];
