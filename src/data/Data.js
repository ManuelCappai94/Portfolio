
import cat from "../images/cat.png"
import calendar from "../images/calendar.png"
import cover from "../images/cover.png"
import portfolio from "../images/portfolio.png"
import webdev from "../images/webdev.jpeg"
import shop from "../images/NextShop.png"
import { devIcons } from "./uiData";
import mayerfeldImage from "../images/zippy-game-preview.jpeg"
import eurodysseyImage from "../images/IdeaLogo.png"



export const data = [
    {
    _id: "NextStore",
    title: "NextStore",
    tecnologies: ["Next.js", "TypeScript", "Redux Toolkit"],
    icon: [devIcons.next, devIcons.ts, devIcons.redux],
    desc: "Full frontend e-commerce application",
    img: shop,
    version: "v.1.0",
    demoUrl: "https://next-store-theta-six.vercel.app/",

    longDesc:
        "NextStore is a modern e-commerce application built with Next.js, TypeScript and Redux Toolkit to simulate a real-world online store architecture. The project includes dynamic product pages, advanced filtering systems, persistent cart and wishlist state, internal API routes for product data enrichment, and a mock checkout flow. The application was designed with a strong focus on scalable frontend architecture, reusable components, responsive UI, and realistic application flow.",

    features: [
        "Dynamic product catalog and category pages",
        "Advanced filtering and product search system",
        "Persistent cart and wishlist with Redux Toolkit",
        "Migration and transformation of external product data through internal Next.js API routes",
        "Product data enrichment system with customized reviews and user information",
        "Dynamic product detail pages with related products",
        "Mock checkout flow with responsive layout",
        "Reusable and modular component architecture",
        "Responsive desktop and mobile UI"
    ],

    howToUse: [
        "Browse products through categories or search",
        "Use filters to sort and refine the product catalog",
        "Add products to cart and wishlist with persistent local state",
        "Open product pages to explore details and related items",
        "Simulate a checkout process through the mock checkout flow"
    ],

    repoUrl: "https://github.com/ManuelCappai94/NextStore"
},
{
     _id: "Calendar_Hub",
    title: "Calendar Hub",
    tecnologies: ["JavaScript", "CSS", "Day.js", "Vite"],
    icon: [devIcons.js, devIcons.css],
    desc: "Vanilla JS calendar, events and to-do system",
    img: calendar,
    version: "v.0.9.1",
    demoUrl: "https://manuelcappai94.github.io/CalendarHub/",
    longDesc:
        "CalendarHub is a modular calendar and productivity application built from scratch with vanilla JavaScript. The project combines synchronized month, week and day views with a recurring event engine, single-occurrence exceptions, contextual event management, seasonal themes, onboarding, and a date-based ToDo system. The latest version also migrates the project to an npm-managed Day.js and Vite workflow with GitHub Pages deployment, improving maintainability while preserving a custom vanilla JavaScript architecture.",

    features: [
        "Synchronized Month, Week and Day views",
        "Runtime recurring event engine",
        "Single occurrence exception system",
        "Edit and delete single events or entire recurring series",
        "Contextual info banner with dynamic event actions",
        "Event creation and editing modal",
        "Date-based ToDo list system with persistent localStorage state",
        "ToDo badges and contextual menus inside calendar views",
        "Mini calendar for quick navigation",
        "Dynamic seasonal theme",
        "Guided onboarding tutorial",
        "npm-managed Day.js integration with Vite build setup",
        "GitHub Pages deployment workflow"
    ],

    howToUse: [
        "Select Month, Week or Day view using the navigation buttons",
        "Use arrows or the mini calendar to navigate between dates",
        "Click cells or time slots to create events with preloaded date and time",
        "Create recurring events using daily, weekly, monthly or custom patterns",
        "Click an existing event to open the info banner and manage single events or full series",
        "Create ToDo lists for specific dates and access them through calendar badges or contextual menus"
    ],

    repoUrl: "https://github.com/ManuelCappai94/CalendarHub"
},
    {
        _id: "The_Omniscent_Cat",
        title: "The Omniscent Cat",
        tecnologies: ["TypeScript", "Canvas API"],
        icon: [devIcons.ts, devIcons.canvasAPI],
        desc: "Ask question and Play with the Cat",
        img: cat,
        version: "v.1.0",
        demoUrl: "https://manuelcappai94.github.io/The-Omniscent-Cat/",
        longDesc: "This is a mini project I created because I wanted to practice TypeScript. Maybe in the future I'm going to add a few 'Types' of cats. Enjoy!",
        features: [
            "Facts are fetched from external APIs",
            "Interactive cat",
            "Meow sounds",
            "Play with him!"
            ],
        howToUse: [
            "Click the buttons to generate a new fun fact or a Chuck Norris joke",
            "Click different spots on the cat to play with him",
            "Perfect for cat lovers 🐾"
            ],
        repoUrl: "https://github.com/ManuelCappai94/The-Omniscent-Cat"
    },
    {
        _id: "Game_Prototype",
        title: "Game Prototype",
        tecnologies: ["JavaScript", "Canvas API", "Tiled"],
        icon: [devIcons.js, devIcons.canvasAPI, devIcons.tiled],
        desc: "Demo developed with a Custom JS engine",
        img: cover,
        version: "v.0.02", 
        demoUrl: "https://gameprotoype.netlify.app/",
        longDesc: "This game project was born from my desire to learn JavaScript by building something I genuinely enjoy.It uses the Canvas API for 2D rendering with a multi-layered approach, along with Tiled, a widely used tool for creating tile-based maps and level design.",
        features: [
            "8-direction movement",
            "One enemy, with basic AI",
            "Multiple maps",
            "Interactive doors with a key system",
            "Basic attack system",
            "Destructible objects"
        ],
        controls: [
            {
                title: "Movement",
                keys: ["'W'", "'A'", "'S'", "'D'"],
            },
            {
                title: "Interact",
                keys: ["'F'"],
            },
            {
                title: "Attack",
                keys: ["'Space'"],
            }
        ],
        repoUrl: "https://github.com/ManuelCappai94/prototipo"
    },
    {
        _id: "Web_Dev_News",
        title: "Web Dev News",
        tecnologies: [
            "Next.js",
            "TypeScript"
            ], 
        icon: [devIcons.next, devIcons.ts],
        desc: "Next.js 16 learning project",
        img: webdev,
        version: "v.1.0",
        demoUrl: "https://web-dev-next-js-kappa.vercel.app/",
        longDesc: "A learning-focused project built with Next.js 16 and TypeScript, featuring SSR, SSG, and data fetching from external and internal APIs. Created to modernize a legacy project and practice full-stack concepts.",
        features: [
            "Navigation between pages",
            "ISR, SSR, SSG types of fetch",
            "Data fetched from an external and internal API",
            ],
        howToUse: [
            "Click on a post to view its details."
            ],
        repoUrl: "https://github.com/ManuelCappai94/Web_Dev_Next.js"
    },
    {
        _id: "My Portfolio",
        title: "My Portfolio",
        tecnologies: ["React", "CSS"],
        icon: [devIcons.react, devIcons.css],
        desc: "Personal portfolio built with React",
        img: portfolio,
        version: "v.1.2",
        repoUrl: "https://github.com/ManuelCappai94/Portfolio"
    }
]

export const experienceCardsData = [
    {
        _id : "Mayerfeld",
        title: "Mayerfelf Consulting Practicum",
        label: "mayerfeld-practicum",
        date: "June 2026 – July 2026",
        description:
            "A project-based frontend practicum focused on building responsive interfaces, collaborating through Git, solving real development issues, and presenting work during code reviews.",
        image: mayerfeldImage,
        imageAlt:
      "Preview of projects developed during the Mayerfeld Consulting Frontend Practicum",
    },
    {
        _id: "eurodyssey",
        title: "Eurodyssey International Internship",
        label: "eurodyssey-internship",
        date: "December 2023 – June 2024",
        description:
        "An international professional experience involving European projects, partner coordination, team workflows, and daily communication in English and Spanish.",
        image: eurodysseyImage,
        imageAlt:
        "Photo representing the Eurodyssey international internship experience in Spain",
  },
]

export const certificationsData = [
  {
    id: "idea-internship-certificate",
    title: "Professional Internship Certificate",
    issuer: "Ayuntamiento de Alzira · IDEA",
    date: "May 2024",
    duration: "6 months",
    description:
      "Official certificate documenting a six-month professional internship within the local development agency, including administrative support, event organization, digital content management, and communication with local users.",
    document: "",
  },
  {
    id: "mayerfeld-ai-frontend-certificate",
    title:
      "AI Frontend Engineer: Building Web Applications with Modern AI Tools",
    issuer: "Mayerfeld Consulting",
    date: "June 2026",
    duration: "2 hours",
    description:
      "Certificate of completion for a focused training session on integrating modern AI tools into frontend development workflows.",
    document: "",
  },
  {
    id: "react-redux-udemy-certificate",
    title: "React.js e Redux in Italiano: Teoria, Hooks + 11 Progetti",
    issuer: "Udemy",
    instructors: ["Omar De Angelis", "Leonardo De Marco"],
    date: "April 2026",
    duration: "24.5 hours",
    description:
      "A practical React and Redux course covering component-based development, hooks, state management, and the implementation of multiple frontend projects.",
    document: "",
  },
  {
    id: "javascript-typescript-udemy-certificate",
    title: "Corso Javascript con Progetti pratici & Typescript",
    issuer: "Udemy",
    instructors: [
      "Out Of Class",
      "Omar De Angelis",
      "Leonardo De Marco",
    ],
    date: "October 2025",
    duration: "24.5 hours",
    description:
      "A project-oriented course covering modern JavaScript fundamentals, DOM development, application logic, and an introduction to TypeScript.",
    document: "",
  },
];
