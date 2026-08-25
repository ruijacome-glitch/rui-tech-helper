/**
 * Conteúdo editável das subpáginas.
 * Separado do layout: alterar textos aqui, nunca nos componentes.
 */

export type ServicoDetalhe = {
  id: string;
  numero: string;
  titulo: string;
  resumo: string;
  problema: string;
  sinais: string[];
  incluido: string[];
  quando: string;
  detalhe: string;
};

export const servicosDetalhe: ServicoDetalhe[] = [
  {
    id: "reparacao",
    numero: "01",
    titulo: "Reparação de computadores e portáteis",
    resumo: "Avarias de hardware e sistema, avaliadas antes de qualquer substituição.",
    problema:
      "O equipamento deixou de funcionar como deve e ninguém te explicou porquê. Muitas vezes não é preciso comprar outro.",
    sinais: [
      "Não liga ou desliga-se sozinho",
      "Ecrã com falhas, riscas ou partido",
      "Teclado, dobradiças ou carregador com folga",
      "Ruído anormal ou aquecimento excessivo",
    ],
    incluido: [
      "Avaliação do estado do equipamento",
      "Identificação da avaria e das opções possíveis",
      "Substituição de componentes quando fizer sentido",
      "Testes contigo antes de dar por terminado",
    ],
    quando:
      "Assim que o problema se repete. Continuar a usar um equipamento com falhas costuma agravar a avaria.",
    detalhe:
      "Trabalho com computadores de secretária e portáteis de todas as marcas comuns em Portugal — HP, Dell, Lenovo, Asus, Acer, Apple. O diagnóstico é sempre físico e presencial ou remoto conforme o caso: abro o equipamento quando necessário, testo componentes isoladamente (fonte, memória, disco, placa) e só proponho substituição quando a peça em causa está mesmo confirmada como avariada, não por suposição.",
  },
  {
    id: "optimizacao",
    numero: "02",
    titulo: "Limpeza e optimização",
    resumo: "Desempenho recuperado sem gastar em hardware novo.",
    problema:
      "O computador demora uma eternidade a arrancar e aquece com tarefas simples. Quase sempre é acumulação, não idade.",
    sinais: [
      "Arranque muito demorado",
      "Ventoinha sempre no máximo",
      "Disco cheio sem saberes porquê",
      "Programas a abrir sozinhos com o sistema",
    ],
    incluido: [
      "Limpeza física interior e ventilação",
      "Revisão do arranque e dos programas em segundo plano",
      "Libertação de espaço em disco",
      "Actualizações e verificação de segurança básica",
    ],
    quando:
      "Quando o trabalho do dia-a-dia começa a custar. É a intervenção mais simples e a que mais se nota.",
    detalhe:
      "A maioria dos computadores lentos não precisa de peças novas — precisa de arranque revisto, ventilação limpa e disco com espaço livre. Reviso os programas que arrancam com o sistema, remoto software desnecessário, actualizo drivers desactualizados e confirmo que o antivírus e as actualizações de segurança estão activos antes de terminar.",
  },
  {
    id: "instalacao",
    numero: "03",
    titulo: "Instalação e configuração",
    resumo: "Equipamento novo, ou reinstalado, pronto a usar.",
    problema:
      "Comprar é a parte fácil. Ter as contas, os ficheiros e as cópias de segurança no sítio certo é outra história.",
    sinais: [
      "Computador novo ainda por configurar",
      "Sistema a precisar de reinstalação",
      "Email ou contas por configurar",
      "Sem qualquer cópia de segurança",
    ],
    incluido: [
      "Instalação de sistema e programas essenciais",
      "Transferência de ficheiros e contas",
      "Configuração de email e impressão",
      "Cópias de segurança explicadas de forma simples",
    ],
    quando:
      "Antes de começares a usar o equipamento novo. Evita ter de repetir tudo mais tarde.",
    detalhe:
      "Configuro Windows e macOS, contas de email (Outlook, Gmail, iCloud), impressoras em rede e programas de trabalho como Office, contabilidade ou facturação. Deixo sempre uma cópia de segurança automática a funcionar antes de sair, com o processo explicado em linguagem simples — não presumo conhecimento técnico da tua parte.",
  },
  {
    id: "dados",
    numero: "04",
    titulo: "Recuperação de dados",
    resumo: "Avaliação honesta do que é possível — sem promessas.",
    problema:
      "Ficheiros apagados, disco com falhas ou sistema que deixou de arrancar. A recuperação depende sempre do estado do suporte.",
    sinais: [
      "Ficheiros apagados por engano",
      "Disco reconhecido mas ilegível",
      "Ruídos no disco ou falhas de leitura",
      "Sistema que já não arranca",
    ],
    incluido: [
      "Avaliação prévia do estado do suporte",
      "Explicação clara do que é ou não possível",
      "Tentativa de recuperação quando houver condições",
      "Entrega dos dados recuperados em suporte seguro",
    ],
    quando:
      "Imediatamente, e sem continuar a usar o equipamento. Nenhuma recuperação pode ser garantida à partida.",
    detalhe:
      "Antes de qualquer tentativa, explico honestamente as hipóteses de sucesso pelo estado físico do disco ou pela forma como os ficheiros foram perdidos. Em casos de falha lógica (apagados, formatação, corrupção do sistema) a taxa de sucesso costuma ser boa; em falhas físicas do disco, o resultado depende do dano e é sempre avaliado primeiro sem compromisso.",
  },
  {
    id: "remoto",
    numero: "05",
    titulo: "Apoio remoto",
    resumo: "Resolução à distância, contigo a ver o que está a ser feito.",
    problema:
      "Há problemas que não precisam de deslocação nenhuma. Uma ligação remota resolve-os no próprio dia.",
    sinais: [
      "Programa que deixou de abrir",
      "Configuração de email ou contas",
      "Dúvidas de utilização recorrentes",
      "Erros que aparecem sempre no mesmo sítio",
    ],
    incluido: [
      "Ligação remota autorizada por ti",
      "Acompanhamento em directo do que faço",
      "Explicação do que estava errado",
      "Fim da sessão com o acesso encerrado",
    ],
    quando:
      "Sempre que o computador liga e tem Internet. É a via mais rápida e a mais barata.",
    detalhe:
      "Uso ferramentas de acesso remoto seguro que só funcionam com autorização explícita tua em cada sessão — nunca acedo sem que estejas presente e a ver o ecrã. No fim, a ligação fica sempre encerrada por completo. É a opção mais usada por quem trabalha a partir de casa e não pode parar para esperar uma deslocação.",
  },
  {
    id: "redes",
    numero: "06",
    titulo: "Redes Wi-Fi, impressoras e periféricos",
    resumo: "Sinal estável em casa e equipamento que responde à primeira.",
    problema:
      "O Wi-Fi não chega a metade da casa e a impressora só funciona quando quer. É configuração, não azar.",
    sinais: [
      "Zonas sem cobertura Wi-Fi",
      "Ligação a cair a meio de chamadas",
      "Impressora que aparece e desaparece",
      "Periféricos que o computador não reconhece",
    ],
    incluido: [
      "Análise da cobertura e das interferências",
      "Configuração de router, repetidores e rede",
      "Instalação de impressoras e digitalização",
      "Ligação de periféricos e testes finais",
    ],
    quando:
      "Quando trabalhas ou estudas em casa e a ligação já te fez perder tempo mais do que uma vez.",
    detalhe:
      "Analiso a cobertura Wi-Fi divisão a divisão, identifico interferências (paredes, outros routers, electrodomésticos) e configuro repetidores ou sistemas mesh quando fazem sentido para a tua casa — nem sempre é preciso comprar equipamento novo, muitas vezes basta reposicionar o router ou ajustar canais. Impressoras e periféricos ficam testados a imprimir e digitalizar antes de terminar.",
  },
];

export const passosDetalhe = [
  {
    numero: "01",
    titulo: "Explicas",
    texto:
      "Escreves à tua maneira o que se passa. Não precisas de saber o nome de nada — descreve o que vês.",
  },
  {
    numero: "02",
    titulo: "Faço uma primeira avaliação",
    texto:
      "Com o que me contaste, digo-te logo se é caso para apoio remoto ou para ir até ao local.",
  },
  {
    numero: "03",
    titulo: "Diagnostico",
    texto:
      "Vejo o equipamento, identifico a causa e distingo o que é urgente do que pode esperar.",
  },
  {
    numero: "04",
    titulo: "Confirmo a solução e o valor",
    texto:
      "Antes de mexer, explico o que proponho fazer e o valor. Só avanço depois de dizeres que sim.",
  },
  {
    numero: "05",
    titulo: "Resolvo e testo contigo",
    texto:
      "Aplico a solução e testamos juntos. Fica a funcionar e ficas a perceber o que aconteceu.",
  },
];

export const primeiraMensagem = [
  "Que equipamento é e há quanto tempo o tens.",
  "O que está a acontecer, por palavras tuas.",
  "Se apareceu alguma mensagem de erro — e qual.",
  "Quando começou e se acontece sempre ou às vezes.",
];

export const remotoOuDomicilio = [
  {
    titulo: "Assistência remota",
    texto:
      "Indicada quando o computador liga e tem Internet: configurações, programas, email e erros de sistema. Mais rápida e sem deslocação — ligo-me ao teu equipamento com a tua autorização, vês o ecrã a ser usado em tempo real e posso cortar a ligação a qualquer momento.",
  },
  {
    titulo: "Assistência ao domicílio",
    texto:
      "Indicada quando há hardware, redes, impressoras ou equipamento que não arranca. Em Cascais e arredores. Levo o material necessário para diagnóstico no local e, sempre que possível, resolvo na mesma visita em vez de levar o equipamento para oficina.",
  },
];

export const antesDaIntervencao = [
  "Explico o que encontrei em linguagem simples.",
  "Digo o que é possível fazer e o que não vale a pena.",
  "Sempre que houver risco para os dados, aviso antes.",
  "Nada avança sem a tua confirmação.",
];

export const negociosAreas = [
  {
    numero: "01",
    titulo: "Computadores e postos de trabalho",
    texto: "Equipamento preparado, actualizado e igual para toda a equipa.",
    detalhe:
      "Instalo o sistema operativo, actualizações de segurança e os programas que cada posto precisa, com a mesma configuração base em toda a equipa — para que um substituto ou um posto novo não seja um problema à parte.",
  },
  {
    numero: "02",
    titulo: "Redes Wi-Fi",
    texto: "Cobertura estável para a equipa e para os clientes, sem cortes a meio.",
    detalhe:
      "Analiso a cobertura por divisão, separo a rede de trabalho da rede de clientes quando faz sentido e ajusto ou substituo equipamento apenas quando é mesmo necessário — muitas vezes o problema resolve-se sem comprar nada de novo.",
  },
  {
    numero: "03",
    titulo: "Impressoras e periféricos",
    texto: "Impressão, digitalização e equipamento partilhado a funcionar sempre.",
    detalhe:
      "Configuro impressoras partilhadas em rede, digitalização para email ou pasta, e verifico que todos os postos conseguem imprimir sem filas nem erros de driver nas horas de maior movimento.",
  },
  {
    numero: "04",
    titulo: "Instalação e configuração",
    texto: "Postos novos, contas de email e programas do dia-a-dia prontos a usar.",
    detalhe:
      "Quando entra alguém novo na equipa, preparo o posto, a conta de email e os acessos antes do primeiro dia de trabalho — sem perdas de tempo a improvisar configurações no momento.",
  },
  {
    numero: "05",
    titulo: "Resolução de avarias",
    texto: "Diagnóstico rápido quando alguma coisa pára no meio do horário de trabalho.",
    detalhe:
      "Uma avaria a meio do dia custa tempo e clientes. Faço uma primeira avaliação remota para perceber se dá para resolver à distância ou se compensa mais ir ao local, e priorizo sempre o que está a impedir o negócio de funcionar.",
  },
  {
    numero: "06",
    titulo: "Apoio próximo e remoto",
    texto: "Falas comigo directamente. Resolvo à distância ou apareço no local.",
    detalhe:
      "Sem central de atendimento nem tickets a rodar por técnicos diferentes. Falas sempre comigo, explico o que encontrei em linguagem simples e confirmo o valor antes de avançar.",
  },
];

export const negociosQuando = [
  "O posto da caixa ou da recepção deixou de arrancar.",
  "A impressora de facturas falha nas horas de maior movimento.",
  "O Wi-Fi dos clientes não chega à sala toda.",
  "Entrou alguém novo na equipa e falta um posto configurado.",
  "Ninguém sabe onde estão as cópias de segurança.",
  "Há um computador lento que trava o trabalho todos os dias.",
];

export const negociosModelo = [
  {
    titulo: "Intervenções pontuais",
    texto:
      "Chamas quando precisas. Avalio, confirmo o valor e resolvo. Sem qualquer compromisso posterior.",
  },
  {
    titulo: "Acompanhamento adaptado",
    texto:
      "Se fizer sentido para o teu negócio, combinamos uma forma de acompanhamento à medida. Falamos primeiro; nada é vendido em pacote fechado.",
  },
];

export const sobreTimeline = [
  {
    ano: "2006",
    texto:
      "Começo no suporte técnico presencial, a diagnosticar hardware, software e problemas reais de utilizadores.",
  },
  {
    ano: "2008",
    texto:
      "Assumo a coordenação de uma equipa local de suporte informático, sem deixar o trabalho técnico no terreno.",
  },
  {
    ano: "2011",
    texto:
      "Avanço para funções de responsável sénior de equipa de suporte e de especialista técnico sénior, com problemas mais complexos, sistemas, redes e infraestruturas.",
  },
  {
    ano: "Hoje",
    texto:
      "Aplico essa experiência a particulares e pequenos negócios de Cascais, com apoio próximo, explicações claras e soluções proporcionais ao problema.",
  },
];

export const sobreValores = [
  {
    numero: "01",
    titulo: "Explicar primeiro",
    texto: "Antes de qualquer intervenção, percebes o que se passa e porquê.",
  },
  {
    numero: "02",
    titulo: "Diagnosticar antes de substituir",
    texto: "Trocar peças sem diagnóstico é caro e raras vezes resolve.",
  },
  {
    numero: "03",
    titulo: "Confirmar antes de avançar",
    texto: "A solução e o valor são confirmados contigo antes de começar.",
  },
  {
    numero: "04",
    titulo: "Resolver com transparência",
    texto: "Digo o que fiz, o que não é possível e o que convém vigiar.",
  },
];

export const tiposProblema = [
  "Computador lento",
  "Não arranca",
  "Internet ou Wi-Fi",
  "Ficheiros perdidos",
  "Impressora ou periféricos",
  "Instalação e configuração",
  "Pequeno negócio",
  "Outro / não sei explicar",
];

export const periodosContacto = ["Manhã", "Tarde", "Fim do dia", "Indiferente"];

export const antesDeEnviares = [
  {
    numero: "01",
    titulo: "Identifica o equipamento",
    texto: "Portátil ou fixo, marca e, se souberes, há quantos anos o tens.",
  },
  {
    numero: "02",
    titulo: "Anota a mensagem de erro",
    texto: "Se aparece um erro no ecrã, escreve-o tal como surge — ou fotografa-o.",
  },
  {
    numero: "03",
    titulo: "Não continues a usar o equipamento",
    texto: "Se houver ficheiros em risco, desliga. Cada utilização reduz as hipóteses.",
  },
];

export const faq = [
  {
    pergunta: "Atende ao domicílio em Cascais?",
    resposta: "Sim, particulares e pequenos negócios em Cascais e arredores.",
  },
  {
    pergunta: "Quanto custa um diagnóstico?",
    resposta: "39 €.",
  },
  {
    pergunta: "Faz recuperação de dados com garantia?",
    resposta:
      "Não há garantia; depende do estado do disco, avaliado antes de orçamentar.",
  },
  {
    pergunta: "Preciso de saber termos técnicos para explicar o problema?",
    resposta: "Não, descreve por palavras próprias.",
  },
  {
    pergunta: "O valor final é sempre o mesmo do preçário?",
    resposta: "É o valor de partida; confirmado contigo antes de qualquer intervenção.",
  },
  {
    pergunta: "Fazem apoio remoto ou só ao domicílio?",
    resposta:
      "Os dois: primeira avaliação remota decide se resolve à distância ou exige deslocação.",
  },
  {
    pergunta: "Atendem fora de Cascais?",
    resposta: "Áreas fora de Cascais e arredores são avaliadas caso a caso.",
  },
  {
    pergunta: "As peças estão incluídas no valor?",
    resposta: "Não, salvo indicação em contrário; são orçamentadas à parte.",
  },
  {
    pergunta: "Trabalham com pequenos negócios, não só particulares?",
    resposta: "Sim — lojas, ateliês, clínicas, escritórios.",
  },
  {
    pergunta: "Quanto tempo demora a resolver um problema?",
    resposta:
      "Apoio remoto costuma resolver no próprio dia; ao domicílio depende do diagnóstico, sempre confirmado antes de avançar.",
  },
];
