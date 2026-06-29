export const siteData = {
  company: {
    name: "SuCatering",
    slogan: "Transformando momentos especiais em experiências inesquecíveis.",
    city: "Recife, PE",
    foundedYear: 2019,
    whatsapp: "5581999999999",
    whatsappMessage: "Olá! Vim pelo site e gostaria de solicitar um orçamento.",
    email: "contato@sucatering.com.br",
    instagram: "@sucatering",
  },

  hero: {
    eyebrow: "Buffet Premium em Recife",
    headline: "Sua festa merece\numa experiência\ninesquecível.",
    subheadline:
      "Do evento social ao corporativo, entregamos gastronomia de alto nível com sofisticação, pontualidade e o cuidado que cada momento especial exige.",
    cta: "Solicitar Orçamento Grátis",
    ctaSecondary: "Ver Nossos Serviços",
  },

  about: {
    eyebrow: "Sobre a SuCatering",
    headline: "Desde 2019 transformando\nevento em memória afetiva.",
    paragraphs: [
      "A SuCatering nasceu da paixão por gastronomia e pela crença de que uma boa mesa aproxima pessoas. Atuamos em Recife e Grande Recife com um time especializado que cuida de cada detalhe — do cardápio à apresentação final.",
      "Em mais de 5 anos de atuação, construímos uma reputação sólida servindo casamentos, formaturas, eventos corporativos e celebrações familiares com o mesmo nível de excelência e dedicação.",
    ],
    stats: [
      { value: "+500", label: "Eventos realizados" },
      { value: "5+", label: "Anos de experiência" },
      { value: "100%", label: "Satisfação garantida" },
    ],
  },

  services: [
    {
      icon: "🥂",
      title: "Casamentos",
      description:
        "Cardápios personalizados para o dia mais especial. Buffet completo com finger foods, pratos principais, sobremesas e bar estruturado.",
    },
    {
      icon: "🎓",
      title: "Formaturas",
      description:
        "Celebre sua conquista com elegância. Opções para jantares, coquetéis e festas de formatura com apresentação impecável.",
    },
    {
      icon: "💼",
      title: "Eventos Corporativos",
      description:
        "Coffee breaks, almoços executivos e confraternizações. Praticidade e sofisticação para impressionar seus clientes e equipe.",
    },
    {
      icon: "🎉",
      title: "Festas Sociais",
      description:
        "Aniversários, batizados, chás e celebrações em geral. Criamos experiências gastronômicas para qualquer estilo de festa.",
    },
  ],

  differentials: [
    {
      icon: "✨",
      title: "Cardápio Personalizado",
      description:
        "Desenvolvemos o menu ideal para o seu evento e público, sem cardápios engessados.",
    },
    {
      icon: "👨‍🍳",
      title: "Equipe Especializada",
      description:
        "Profissionais treinados em gastronomia e atendimento premium, do preparo ao serviço.",
    },
    {
      icon: "⏱️",
      title: "Pontualidade Garantida",
      description:
        "Comprometidos com cada etapa do seu evento. Zero atrasos, zero imprevistos.",
    },
    {
      icon: "🌿",
      title: "Ingredientes Frescos",
      description:
        "Selecionamos os melhores insumos regionais e nacionais para garantir sabor e qualidade.",
    },
    {
      icon: "📋",
      title: "Estrutura Completa",
      description:
        "Louças, utensílios, decoração de mesa e logística inclusos. Você não se preocupa com nada.",
    },
    {
      icon: "💬",
      title: "Atendimento Humanizado",
      description:
        "Acompanhamento próximo do primeiro contato ao encerramento. Você sempre terá alguém disponível.",
    },
  ],

  cta: {
    eyebrow: "Pronto para começar?",
    headline: "Vamos criar algo\nextraordinário juntos.",
    subheadline:
      "Solicite seu orçamento agora. É gratuito, sem compromisso e respondemos em até 2 horas no WhatsApp.",
    cta: "Falar no WhatsApp Agora",
  },

  footer: {
    tagline: "Gastronomia com alma para eventos que importam.",
    links: [
      { label: "Sobre", href: "#about" },
      { label: "Serviços", href: "#services" },
      { label: "Diferenciais", href: "#differentials" },
      { label: "Contato", href: "#cta" },
    ],
  },
};

export type SiteData = typeof siteData;
