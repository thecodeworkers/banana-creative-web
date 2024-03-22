const data = {
  metadata: {
    description:
      "metaDescription",
    ogImage: "/resources/metaResources/ogimage.jpg",
    title: "metatitle",
  },
  general: {
    phone: "+584124731515",
    email: "hello@bananacreative.io",
    contactMessage:
      "Hello Team Banana! I have a project and would like to book a meeting with the team of Tech",
    packsMessage:
      "!Hi team Banana! Thank you for your time. I’m interested in receiving more information from the Tech service:",
    haveProjectMessage:
      "Hello Team Banana! I have a project and would like to book a meeting with the team of Tech",
  },
  popup: {
    title: "joinUs",
    text: ["newsletterTextLine1", "newsletterTextLine2", "newsletterTextLine3"],
    checkboxDisclaimer: ["newsletterDisclaimerLine1", "newsletterDisclaimerLine2"],
    buttonText: "discountButtonText",
    requiredEmail: "requiredField",
    invalidEmail: "invalidEmail",
  },
  navbar: {
    image: "/resources/header/logo.svg",
    alt: "Banana Creative",
    routes: [
      { name: "processTitle", ref: "process" },
      { name: "servicesTitle", ref: "services" },
      { name: "contactTitle", ref: "contact" },
    ],
    packNav: {
      title: "packsTitle",
      packs: [
        { name: "Design", subdomain: "design" },
        { name: "Tech", subdomain: "tech" },
        { name: "Motion", subdomain: "motion" },
        { name: "Production", subdomain: "prod" },
      ],
    },
    language: "language",
  },
  hero: {
    mainTitle: ["weShape", "toNewLevel"],
    secondTitle: ["meaningful", "andTimeless"],
    smallText: [
      "wedo",
      "branding",
      "motion",
      "rrss",
      "productions",
      "tech",
      "comms",
    ],
  },
  video: "/resources/testGif.gif",
  process: {
    title: [
      "processDivTitleHalf",
      "processDivTitleRest"
    ],
    firstSlide: {
      subtitle: "findItSubtitle",
      paragraph: "findItParagraph"
    },
    secondSlide: {
      subtitle: "shapeItSubtitle",
      paragraph: "shapeItParagraph"
    },
    thirdSlide: {
      subtitle: "blowItSubtitle",
      paragraph: "blowItParagraph"
    }
  },
  sliderBanner: [
    {
      alt: "Design Service image",
      desktop: "/resources/sliderBanner/brand.png",
      mobile: "/resources/sliderBanner/brandMobile.png",
      desktopEsp: "/resources/sliderBanner/brandEsp.png",
      mobileEsp: "/resources/sliderBanner/brandEspMobile.png",
      subdomain: "design",
    },
    {
      alt: "Tech Service image",
      desktop: "/resources/sliderBanner/tech.png",
      mobile: "/resources/sliderBanner/techMobile.png",
      desktopEsp: "/resources/sliderBanner/techEsp.png",
      mobileEsp: "/resources/sliderBanner/techEspMobile.png",
      subdomain: "tech",
    },
    {
      alt: "Motion Service image",
      desktop: "/resources/sliderBanner/motion.png",
      mobile: "/resources/sliderBanner/motionMobile.png",
      desktopEsp: "/resources/sliderBanner/motionEsp.png",
      mobileEsp: "/resources/sliderBanner/motionEspMobile.png",
      subdomain: "motion",
    },
    {
      alt: "Production Service image",
      desktop: "/resources/sliderBanner/prod.png",
      mobile: "/resources/sliderBanner/prodMobile.png",
      desktopEsp: "/resources/sliderBanner/prodEsp.png",
      mobileEsp: "/resources/sliderBanner/prodEspMobile.png",
      subdomain: "prod",
    },
  ],
  services: {
    title: "services",
    dataArr: [
      {
        name: "DESIGN",
        image: "/resources/services/brand.jpg",
        subdomain: "design",
      },
      {
        name: "MOTION GRAPHICS",
        image: "/resources/services/motion.jpg",
        subdomain: "motion",
      },
      {
        name: "TECHNOLOGY",
        image: "/resources/services/tech.jpg",
        subdomain: "tech",
      },
      {
        name: "PRODUCTIONS",
        image: "/resources/services/prod.jpg",
        subdomain: "prod",
      },
    ],
  },
  testimonials: [
    {
      text: "testimonialMilagro",
      author: "Natalia Niño",
      client: "Milagro Contreras",
    },
    {
      text: "testimonialSkybike",
      author: "Ariana De Sena",
      client: "Skybike",
    },
    {
      text: "testimonialTagHunters",
      author: "Sidney García y Clarissa Monteverde",
      client: "The Tag Hunters",
    },
    {
      text: "testimonialFOMB",
      author: "Nestor Castillas",
      client: "FOMB",
    },
    {
      text: "testimonialICAI",
      author: "Moises Nuñez",
      client: "ICAI",
    },
  ],
  clients: [
    "Cantina",
    "Sotano7",
    "Carbinox",
    "Banco Activo",
    "La Praline",
    "Sonnon",
    "Victor Porfidio",
    "Mayela",
    // Lines division
    "Oui",
    "Prana",
    "Reebok",
    "VANAIDO",
    "Rodizza",
    "ACNUR",
    "Infoguia",
    "ulabel",
  ],
  contactUs: {
    address: [""],
    copyright: "© BananaCreative 2023",
    touchButton: "getInTouch",
    callButton: "bookaCall",
    sendButton: "send",
    gotTitle: "gotProject",
    mediaText: "socials",
    contactTitle: "letsGetInTouch",
    goBackText: "goBack",
    form: [
      { name: "company", key: "company" },
      { name: "email", key: "email" },
      { name: "message", key: "subject" },
    ],
    validation: ["requiredField", "invalidEmail"],
    media: [
      {
        image: "/resources/behance.svg",
        alt: "behance",
        link: "https://www.behance.net/Bananacreative?tracking_source=search_users%7Cbanana+creative",
      },
      {
        image: "/resources/instagram.svg",
        alt: "instagram",
        link: "https://www.instagram.com/_bananacreative/",
      },
      {
        image: "/resources/linkedin.svg",
        alt: "linkein",
        link: "https://www.linkedin.com/company/bananacreative/mycompany/",
      },
      {
        image: "/resources/tiktok.svg",
        alt: "tiktok",
        link: "https://www.tiktok.com/@_bananacreative?_t=8c4ErUhJZrC&_r=1",
      },
      {
        image: "/resources/twitter.svg",
        alt: "twitter",
        link: "https://twitter.com/_bananacreative?lang=es",
      },
    ],
  },
};

export default data;
