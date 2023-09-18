const data = {
  metadata: {
    description:
      "We specialize in the development of technological solutions, security, UI/UX design, and infrastructure to achieve a complete digital experience",
    ogImage: "/resources/metaResources/ogimage.jpg",
    title: "BANANA CREATIVE",
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
  navbar: {
    image: "/resources/header/logo.svg",
    alt: "Banana Creative",
    routes: [
      { name: "navProcess", ref: "process" },
      { name: "navServices", ref: "services" },
      { name: "navContact", ref: "contact" },
    ],
    packs: [
      { name: "Design", subdomain: "design" },
      { name: "Tech", subdomain: "tech" },
      { name: "Motion", subdomain: "motion" },
      { name: "Production", subdomain: "prod" },
    ],
  },
  hero: {
    title: "WE HELP YOU BOOST YOUR",
    bold: "INTERFACE",
    subtitle: "We develop, create and innovate your ideas.",
    button: "Contact Us",
    image: "/resources/banners/tech/banana.svg",
    altImage: "Banana",
  },
  sliderBanner: [
    {
      alt: "brandLink",
      desktop: "/resources/sliderBanner/brand.png",
      mobile: "/resources/sliderBanner/brandMobile.png",
      link: "",
    },
    {
      alt: "techLink",
      desktop: "/resources/sliderBanner/tech.png",
      mobile: "/resources/sliderBanner/techMobile.png",
      link: "",
    },
    {
      alt: "motionLink",
      desktop: "/resources/sliderBanner/motion.png",
      mobile: "/resources/sliderBanner/motionMobile.png",
      link: "",
    },
    {
      alt: "prodLink",
      desktop: "/resources/sliderBanner/prod.png",
      mobile: "/resources/sliderBanner/prodMobile.png",
      link: "",
    },
    {
      alt: "commsLink",
      desktop: "/resources/sliderBanner/comms.png",
      mobile: "/resources/sliderBanner/commsMobile.png",
      link: "",
    },
  ],
  services: {
    title: "Services",
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
      {
        name: "COMMUNICATIONS",
        image: "/resources/services/tech.jpg",
        subdomain: "comms",
      },
    ],
  },
  contactUs: {
    address: [""],
    copyright: "© BananaCreative 2023",
    touchButton: "Get in touch",
    callButton: "Book a Call",
    sendButton: "Send",
    gotTitle: "footerTitle1",
    mediaText: "footerMedia",
    contactTitle: "footerTitle2",
    goBackText: "footerBack",
    form: [
      { name: "footerForm1", key: "company" },
      { name: "footerForm2", key: "email" },
      { name: "footerForm3", key: "subject" },
    ],
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
