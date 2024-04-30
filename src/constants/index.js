import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#features",
  },
  {
    id: "1",
    title: "Precio",
    url: "#pricing",
  },
  // {
  //   id: "2",
  //   title: "How to use",
  //   url: "#how-to-use",
  // },
  // {
  //   id: "3",
  //   title: "Roadmap",
  //   url: "#roadmap",
  // },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Oso",
    description: "1 Año",
    price: "1",
    features: [
      "1 Metro cuadrado de Paramo",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    linkUrl: "https://app.unlock-protocol.com/checkout?id=2ed293d7-e4a6-4ec6-873d-91d190a20bea"
  },
  // {
  //   id: "1",
  //   title: "Venado",
  //   description: "1 Año",
  //   price: "Soon",
  //   features: [
  //     "30 Metros cuadrados",
  //     "An analytics dashboard to track your conversations",
  //     "Priority support to solve issues quickly",
  //   ],
  //   linkUrl: "https://www.truesocialtoken.xyz/"
  // },
  {
    id: "2",
    title: "Corporate",
    description: "1 Año",
    price: "Soon",
    features: [
      "150 Metros cuadrados",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    linkUrl: "https://example.com/gold"
  },
  
];


export const benefits = [
  {
    id: "0",
    title: "Misión",
    text: "TokeNatura consiste en la protección de áreas de alta biodiversidad como  páramos y otros ecosistemas de gran importancia, con el fin de proporcionar una alternativa eficiente y transparente de compensación ambiental a empresas y al mismo tiempo, ofrecer incentivos monetarios a los propietarios de tierras para que continúen protegiendo y conservando estos valiosos ecosistemas.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    
  },
  {
    id: "1",
    title: "Introducción",
    text: "El presente informe detalla los métodos utilizados y los resultados obtenidos durante el muestreo en el páramo, con el objetivo de estudiar la composición de especies y la diversidad alfa en dos alturas diferentes (3280m y 3310m).",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Técnicas de Muestreo",
    text: "Muestreo de Composición de Especies: se realizó un muestreo sistemático utilizando cuadrantes de 1m x 1m en diferentes áreas del páramo. En cada cuadrante, se registraron todas las especies presentes junto con su abundancia relativa. Diversidad: en estas parcelas, se registraron todas las plántulas presentes, incluyendo datos sobre su especie, tamaño y estado. Se tomaron fotografías.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Consideraciones",
    text: "Durante el muestreo, se tuvieron en cuenta las consideraciones ambientales y éticas para minimizar el impacto en el hábitat del páramo. Se evitó el daño a la vegetación circundante y se respetaron las regulaciones locales relacionadas con la protección de especies en peligro de extinción.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Análisis",
    text: "La muestra se considera representativa de la diversidad de especies presente en el páramo, ya que se seleccionaron múltiples áreas de muestreo y se utilizaron métodos estandarizados para recolectar datos. Sin embargo, se reconoce que pueden existir sesgos asociados con la selección de sitios de muestreo y la limitación de recursos.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Resultados",
    text: "Durante el muestreo, se registraron un total de 18 especies diferentes en el páramo. Los datos preliminares sugieren una variabilidad en la composición de especies entre las dos alturas muestreadas, con algunas especies que son más dominantes en una altura que en la otra. En su mayoría, se encontraron especies sanas, no obstante, hay evidencia de algunas especies en estados deteriorados por la sequía y aumento en la temperatura, como el frailejón.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
