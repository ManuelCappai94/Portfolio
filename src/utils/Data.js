
import cat from "../images/cat.png"
import calendar from "../images/calendar.png"
import cover from "../images/cover.png"
import portfolio from "../images/portfolio.png"
import webdev from "../images/webdev.jpeg"
import shop from "../images/NextShop.png"
import { devIcons } from "./Assets";




export const data = [
    {
    _id: "NextStore",
    title: "NextStore",
    tecnologies: ["Next.js", "TypeScript"],
    icon: [devIcons.next, devIcons.ts],
    desc: "E-commerce application (WIP)",
    img: shop,
    version: "v.0.1",
    demoUrl: "", 

    longDesc: "NextStore is an e-commerce application built with Next.js to simulate a real-world online store.The project currently includes a responsive homepage, reusable components, and external API integration for product data. It is being developed in structured phases, with a focus on scalability and real-world architecture.Future improvements include centralized state management with Redux, dynamic pages for products and categories, and internal APIs using Next.js to simulate backend logic.",

    features: [
        "Responsive homepage layout",
        "Reusable product cards",
        "Hero section with highlighted products",
        "External API integration (Axios)",
        "Modular component structure"
    ],

    howToUse: [
        "Browse products directly from the homepage",
        "Scroll through product sections using navigation controls",
        "Explore different product categories (in development)"
    ],

    repoUrl: "https://github.com/ManuelCappai94/NextStore"
},
    {
        _id: "Calendar_Hub",
        title: "Calendar Hub",
        tecnologies: ["JavaScript", "CSS", "Day.js"],
        icon: [devIcons.js, devIcons.css],
        desc: "Vanilla JS calendar with synchronized views",
        img: calendar,
        version: "v.0.5",
        demoUrl: "https://manuelcappai94.github.io/CalendarHub/",
        longDesc: "CalendarHub is a modular calendar application built from scratch with vanilla JavaScript. It is based on a centralized synchronization system that keeps month, week, and daily views aligned through a single source of truth. The project includes a mini calendar for quick navigation, a dynamic seasonal theme system, and the foundation of an event creation workflow through a dedicated modal. The architecture is designed to remain scalable and maintain a clear separation between UI and logic, making future expansions easier to implement.",

        features: [
            "Synchronized Month, Week and Daily views",
            "Centralized state management",
            "Mini calendar for quick navigation",
            "Event creation modal",
            "Dynamic seasonal theme",
            "Responsive layout"
        ],
        howToUse: [
            "Select a view using the navigation buttons",
            "Use arrows to move between dates",
            "Click day numbers or headers to update the current date",
            "Click cells or time slots to open the event modal",
            "Use the mini calendar to jump to a specific date"
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
                keys: ["'E'"],
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
        version: "v.1.0",
        repoUrl: "https://github.com/ManuelCappai94/Portfolio"
    }
]

