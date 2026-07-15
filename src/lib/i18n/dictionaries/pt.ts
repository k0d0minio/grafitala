import type { ProductKey } from "@/lib/content";
import type { Dictionary } from "../dictionaries";

/**
 * European Portuguese (pt-PT) copy for the Grafitala site. Mirrors the shape of
 * the English dictionary; the `Dictionary` annotation keeps the two in sync.
 */
export const pt: Dictionary = {
  languageSwitcher: {
    label: "Idioma",
    ariaLabel: "Mudar de idioma"
  },

  nav: [
    { label: "O que imprimimos", href: "#products" },
    { label: "Como trabalhamos", href: "#process" },
    { label: "Porquê a Grafitala", href: "#why" },
    { label: "Contacto", href: "#contact" }
  ],

  header: {
    requestQuote: "Pedir orçamento",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    home: "Grafitala — início"
  },

  hero: {
    since: "Desde",
    titleLead: "Embalagens que",
    titleMid: "vendem o que está lá",
    titleHighlight: "dentro",
    titleTrail: ".",
    description:
      "Há mais de 30 anos, a Grafitala imprime as caixas em que a indústria alimentar confia — geleias, refeições prontas, pudins, carne e rótulos. Desenhamos, imprimimos, cortamos e colamos cada cartonagem internamente. Recebe embalagens acabadas, prontas a encher.",
    requestQuote: "Pedir orçamento",
    seeWhatWePrint: "Veja o que imprimimos",
    note: "Fazemos a embalagem — não o embalamento.",
    stats: [
      { value: "30+", label: "Anos de impressão" },
      { value: "2", label: "Gerações da família" },
      { value: "2", label: "Linhas de produção" },
      { value: "100%", label: "Feito internamente" }
    ]
  },

  products: {
    eyebrow: "O que imprimimos",
    title: "Cartonagens e rótulos, feitos para alimentos",
    description:
      "A Grafitala é especialista em embalagens impressas para a indústria alimentar — as caixas que protegem o seu produto e o vendem numa prateleira concorrida.",
    ourRoots: "As nossas raízes",
    items: {
      jelly: {
        title: "Caixas de geleias e sobremesas",
        description:
          "Cartonagens vivas e apetitosas que mantêm a forma na prateleira e no frigorífico."
      },
      "ready-meals": {
        title: "Embalagens de refeições prontas",
        description:
          "Cartonagens dobráveis robustas para comida de conveniência — do congelador ao micro-ondas à mesa."
      },
      pudding: {
        title: "Caixas de pudim",
        description:
          "Caixas de pequeno formato com dobras precisas e cor intensa que as sobremesas premium merecem."
      },
      meat: {
        title: "Caixas de carne",
        description:
          "Cartonagens robustas e próprias para alimentos, concebidas para o peso, a cadeia de frio e uma apresentação impecável."
      },
      labels: {
        title: "Rótulos",
        description:
          "Rótulos nítidos e fiéis à cor que transportam a sua marca e todos os detalhes regulamentares."
      }
    } as Record<ProductKey, { title: string; description: string }>,
    closing: {
      title: "Tem outra ideia em mente?",
      description:
        "Se for uma cartonagem ou rótulo impresso para alimentos, é muito provável que a possamos fazer. Fale-nos do seu produto.",
      cta: "Iniciar uma conversa →"
    }
  },

  process: {
    eyebrow: "Como trabalhamos",
    title: "Quatro passos. Um só espaço.",
    description:
      "Sem fornecedores externos, sem esperar pela agenda de terceiros. O seu trabalho passa da arte-final à cartonagem acabada inteiramente dentro da Grafitala.",
    steps: [
      {
        n: "01",
        title: "Design",
        description:
          "O nosso designer interno transforma o seu briefing em arte-final pronta a imprimir — estrutura, cortantes e cor, tudo pensado."
      },
      {
        n: "02",
        title: "Impressão",
        description:
          "Duas máquinas industriais fazem impressão offset e UV em duas linhas de produção para acompanhar a procura real."
      },
      {
        n: "03",
        title: "Corte",
        description:
          "O corte de precisão dá a cada cartonagem arestas limpas e dobras que encaixam exatamente como foram desenhadas."
      },
      {
        n: "04",
        title: "Colagem",
        description:
          "A colagem dedicada, feita por profissionais, entrega embalagens acabadas e prontas a encher — não folhas planas."
      }
    ],
    noteLead: "Uma coisa que não fazemos:",
    noteEmphasis: "embalar o seu produto",
    noteTrail:
      ". Fazemos a embalagem — enchê-la é consigo. É precisamente esse foco que torna as nossas cartonagens tão boas."
  },

  why: {
    eyebrow: "Porquê a Grafitala",
    title:
      "Uma gráfica que começou no lenticular e nunca deixou de se aperfeiçoar",
    description:
      "Duas gerações da mesma família gerem estas máquinas há mais de 30 anos. Começámos na impressão lenticular e crescemos até nos tornarmos uma gráfica dedicada à embalagem para a indústria alimentar — os mesmos padrões rigorosos, à escala real.",
    reasons: [
      {
        title: "Um nome de família, com duas gerações",
        description:
          "A Grafitala imprime há mais de 30 anos e passou de uma geração da família para a seguinte. O ofício — e os padrões — mantêm-se."
      },
      {
        title: "Tudo sob o mesmo teto",
        description:
          "Design, impressão, corte e colagem acontecem tudo internamente. Menos transições, um controlo de qualidade mais apertado e um único ponto de contacto para todo o seu trabalho."
      },
      {
        title: "Feita para acompanhar",
        description:
          "Duas grandes máquinas industriais e duas linhas de produção, mais uma máquina dedicada de corte e colagem, permitem-nos acompanhar volumes exigentes."
      },
      {
        title: "Impressão offset e UV",
        description:
          "Desde grandes tiragens offset económicas até ao impacto e durabilidade do UV, ajustamos a técnica ao seu produto e orçamento."
      }
    ],
    equipment: [
      { value: "2", label: "Máquinas industriais" },
      { value: "2", label: "Linhas de produção" },
      { value: "1", label: "Designer interno" },
      { value: "1", label: "Linha de corte e colagem" }
    ],
    techniquesTitle: "Técnicas que utilizamos",
    techniques: [
      {
        title: "Impressão offset",
        description:
          "O cavalo de batalha para grandes volumes. Cor consistente e detalhe nítido em tiragens longas, ao custo certo por caixa."
      },
      {
        title: "Impressão UV",
        description:
          "Tintas de cura instantânea para cor vibrante, acabamentos nítidos e superfícies duráveis que resistem ao manuseamento e ao frio."
      },
      {
        title: "Corte a cortante",
        description:
          "Formas personalizadas e dobras estruturais cortadas com tolerâncias apertadas, para que cada cartonagem monte na perfeição."
      },
      {
        title: "Colagem e acabamento",
        description:
          "A colagem profissional transforma folhas impressas e cortadas em cartonagens acabadas — prontas para a sua linha encher."
      }
    ]
  },

  contact: {
    eyebrow: "Entre em contacto",
    title: "Vamos fazer a sua próxima caixa.",
    description:
      "Fale-nos do seu produto e volumes. Voltamos com a abordagem certa — offset ou UV, estrutura e acabamento — e um orçamento.",
    details: {
      visit: "Visite",
      call: "Ligue",
      email: "Email",
      hours: "Horário"
    },
    form: {
      name: "Nome",
      namePlaceholder: "O seu nome",
      company: "Empresa",
      companyPlaceholder: "A sua empresa",
      email: "Email",
      emailPlaceholder: "voce@empresa.com",
      message: "Do que precisa?",
      messagePlaceholder:
        "Produto, tipo de caixa, volumes aproximados, prazo…",
      submit: "Enviar pedido",
      footnoteLead:
        "Isto abre a sua aplicação de email com os detalhes preenchidos.",
      footnoteCall: "Prefere ligar?",
      mailSubject: "Pedido de orçamento",
      mailName: "Nome",
      mailCompany: "Empresa",
      mailEmail: "Email"
    }
  },

  footer: {
    blurb:
      "Uma gráfica familiar que produz embalagens em cartonagem dobrável e rótulos para a indústria alimentar — desenhados, impressos, cortados e colados internamente em {location}.",
    tagline: "Nós tratamos da embalagem. Você trata do embalamento.",
    explore: "Explorar",
    whatWePrint: "O que imprimimos",
    getInTouch: "Entre em contacto",
    rights: "Todos os direitos reservados.",
    since: "A imprimir embalagens em {location} desde {year}."
  },

  hours: [
    { days: "Segunda a sexta", time: "08:00 – 18:00" },
    { days: "Sábado", time: "09:00 – 13:00" },
    { days: "Domingo", time: "Encerrado" }
  ]
};
