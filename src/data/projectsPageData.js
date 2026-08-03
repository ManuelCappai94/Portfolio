
import cat from "../images/cat.png"
import calendar from "../images/calendar.png"
import cover from "../images/cover.png"
import portfolio from "../images/portfolio.png"
import webdev from "../images/webdev.jpeg"
import shop from "../images/NextShop.png"
import zippy from "../images/zippy_logo.png"
import finalScoreReviews from "../images/finalScoreReviewa_logo.png"
import { devIcons } from "./uiData";




export const data = [
    {
        _id: "NextShop",
        title: "NextShop",
        tecnologies: ["Next.js", "TypeScript", "Redux Toolkit"],
        icon: [devIcons.next, devIcons.ts, devIcons.redux],
        projectType: "Solo Project",
        context: "Personal Project",
        desc: "Full frontend e-commerce application",
        img: shop,
        version: "v.1.0",
        demoUrl: "https://next-store-theta-six.vercel.app/",
        longDesc:
            "NextStore is a full frontend e-commerce application built with Next.js, TypeScript and Redux Toolkit. The project simulates a realistic online store flow with dynamic product pages, advanced filtering, persistent cart and wishlist state, internal API routes, enriched product data, and a mock checkout experience. It was designed to explore scalable frontend architecture, reusable components, state management, responsive UI, and realistic application behaviour.",
        features: [
            "Dynamic product catalog and category pages",
            "Advanced filtering and product search system",
            "Persistent cart and wishlist with Redux Toolkit",
            "Internal Next.js API routes for product data transformation",
            "Product data enrichment with customized reviews and user information",
            "Dynamic product detail pages with related products",
            "Mock checkout flow with responsive layout",
            "Reusable and modular component architecture",
            "Responsive desktop and mobile UI"
        ],
        repoUrl: "https://github.com/ManuelCappai94/NextStore"
    },
    {
        _id: "Calendar_Hub",
        title: "Calendar Hub",
        tecnologies: ["JavaScript", "CSS", "Day.js"],
        icon: [devIcons.js, devIcons.css],
        projectType: "Solo Project",
        context: "Personal Project",
        desc: "Vanilla JS calendar with events, ToDos and notifications",
        img: calendar,
        version: "v.1.0.0",
        demoUrl: "https://manuelcappai94.github.io/CalendarHub/",
        longDesc:
            "CalendarHub is a feature-complete calendar and productivity application built from scratch with vanilla JavaScript, Day.js and Vite. It synchronizes Month, Week and Daily views through a shared date flow and provides complete event creation, editing and deletion, recurring events generated at runtime, single-occurrence exceptions, contextual event management and date-based ToDo lists. Version 1.0 introduces native browser notifications with configurable advance times, a persistent activation preference and automatic scheduler restoration when the application is reopened. The project also includes a guided onboarding tutorial, responsive desktop and mobile layouts, an interactive mini calendar, seasonal themes and contextual interfaces for managing events and saved lists. Its final development phase included an XSS hardening pass, safer rendering of user-generated content, strict validation of events and ToDo data read from or written to localStorage, removal of legacy global date state, semantic and accessibility-oriented HTML improvements, updated metadata and a production workflow based on Vite and GitHub Pages. CalendarHub is now complete for its intended web scope.",
        features: [
            "Synchronized Month, Week and Daily calendar views",
            "Complete event creation, editing and deletion flow",
            "Context-aware date and time preloading",
            "Daily, weekly, monthly and custom recurring events",
            "Runtime recurring occurrence generation",
            "Single-occurrence editing and exception handling",
            "Native browser notifications with configurable advance times",
            "Persistent notification preference and automatic scheduler restoration",
            "Duplicate-notification prevention",
            "Date-based ToDo lists with localStorage persistence",
            "ToDo completion tracking, rehydration and calendar indicators",
            "Contextual event information banner and quick actions",
            "Interactive mini calendar and manual date selection",
            "Strict localStorage validation for events and ToDo data",
            "Safe rendering of user-generated content",
            "Guided onboarding tutorial with notification instructions",
            "Responsive desktop and mobile interface",
            "Semantic and accessibility-oriented interface improvements",
            "Vite production build and GitHub Pages deployment"
        ],
        repoUrl: "https://github.com/ManuelCappai94/CalendarHub"
    },
    {
        _id: "Zippy_The_Hive_Hopper",
        title: "Zippy the Hive Hopper",
        tecnologies: ["JavaScript", "CSS", "HTML5"],
        icon: [devIcons.js, devIcons.css, devIcons.html],
        projectType: "Team Project",
        context: "Mayerfeld Practicum",
        desc: "Arcade jumping game with dynamic difficulty",
        img: zippy,
        version: "v.1.1",
        demoUrl: "https://manuelcappai94.github.io/js-jumping-game/",
        longDesc:
            "Zippy the Hive Hopper is a team-built browser arcade game developed during the Mayerfeld frontend practicum. The project uses HTML, CSS and JavaScript to create a lightweight jumping game with a requestAnimationFrame-based loop, player movement, obstacle spawning, collision detection, score tracking, health management, restart flow, progressive difficulty, dedicated sound effects, original music composed for the project, and a responsive layout that makes the game playable on both desktop and mobile devices. My contribution focused on the core game loop, obstacle creation and cleanup, hitboxes, player movement, map boundaries, health and scoring logic, bug fixing, code cleanup, and general technical coordination within the team.",
        features: [
            "Browser-based arcade jumping gameplay",
            "requestAnimationFrame-based game loop",
            "Player movement and jump mechanics",
            "Obstacle spawning and cleanup system",
            "Collision detection logic",
            "Health and score tracking",
            "Pause menu with desktop and mobile access",
            "Game over restart flow",
            "Pause menu return to main menu",
            "DOM-based rendering with CSS styling",
            "Dedicated sound effects and original music",
            "Responsive layout with desktop and mobile controls"
        ],
        controls: [
            {
                title: "Desktop movement",
                keys: ["'A'", "'D'"]
            },
            {
                title: "Desktop jump",
                keys: ["'Space'"]
            },
            {
                title: "Desktop pause menu",
                keys: ["'Esc'"]
            },
            {
                title: "Mobile controls",
                keys: ["'←'", "'→'", "'A'", "'☰'"]
            }
        ],
        repoUrl: "https://github.com/ManuelCappai94/js-jumping-game"
    },
    {
        _id: "FinalScoreReviews",
        title: "FinalScoreReviews",
        tecnologies: ["HTML5", "CSS3"],
        icon: [devIcons.html, devIcons.css],
        projectType: "Team Project",
        context: "Mayerfeld Practicum",
        desc: "Static review website built under HTML/CSS-only constraints",
        img: finalScoreReviews,
        version: "v.1.0",
        demoUrl: "https://xdiomarx.github.io/FinalScoreReviews/",
        longDesc:
           "FinalScoreReviews is a static multi-page website created as a team project during the Mayerfeld frontend practicum. The assignment required building a responsive review website using only HTML and CSS, without JavaScript, which made semantic structure, reusable layout patterns, Flexbox, responsive behaviour, and shared styling decisions central to the work. I contributed as a collaborator on the repository, focusing mainly on the homepage structure, shared header/navigation, responsive layout direction, About page layout, CSS cleanup, visual consistency across pages and bug fixing.",
        features: [
            "Static multi-page website built with HTML and CSS",
            "HTML and CSS only, without JavaScript",
            "Team-based development workflow",
            "Semantic page structure",
            "Responsive layout with Flexbox",
            "Review and top-games card sections",
            "About and signup pages",
            "Shared Git workflow and conflict resolution",
            "Mobile layout refinements after review feedback"
        ],
        repoUrl: "https://github.com/XDIOmarX/FinalScoreReviews"
    },
    {
        _id: "The_Omniscent_Cat",
        title: "The Omniscient Cat",
        tecnologies: ["TypeScript", "Canvas API"],
        icon: [devIcons.ts, devIcons.canvasAPI],
        projectType: "Solo Project",
        context: "Learning Project",
        desc: "Playful TypeScript mini project",
        img: cat,
        version: "v.1.0",
        demoUrl: "https://manuelcappai94.github.io/The-Omniscent-Cat/",
        longDesc:
            "The Omniscient Cat is a playful TypeScript mini project built to practice typed JavaScript logic, external API requests, simple UI interactions, and Canvas-based visual elements. The project has a small scope, but it combines fetched facts, interactive behaviour, sound feedback, and a lighthearted interface around a cat-themed concept.",
        features: [
            "Facts fetched from external APIs",
            "TypeScript-based interaction logic",
            "Interactive cat behaviour",
            "Canvas-based visual elements",
            "Sound feedback",
            "Playful UI concept"
        ],
        repoUrl: "https://github.com/ManuelCappai94/The-Omniscent-Cat"
    },
    {
        _id: "Game_Prototype",
        title: "Game Prototype",
        tecnologies: ["JavaScript", "Canvas API", "Tiled"],
        icon: [devIcons.js, devIcons.canvasAPI, devIcons.tiled],
        projectType: "Solo Project",
        context: "Personal Project",
        desc: "2D game prototype with a custom JS engine",
        img: cover,
        version: "v.0.02",
        demoUrl: "https://gameprotoype.netlify.app/",
        longDesc:
            "Game Prototype is a 2D browser game experiment built to explore JavaScript through game development. It uses the Canvas API for rendering, Tiled for map creation, and a custom JavaScript structure for player movement, map transitions, collisions, interactions, enemies, attacks, and destructible objects. The project is still experimental, but it represents an important step in my understanding of game loops, state management, rendering, and input handling.",
        features: [
            "Canvas-based 2D rendering",
            "Custom JavaScript game structure",
            "8-direction player movement",
            "Tile-based maps created with Tiled",
            "Multiple map areas",
            "Interactive doors with a key system",
            "Basic enemy behaviour",
            "Basic attack system",
            "Destructible objects"
        ],
        controls: [
            {
            title: "Movement",
            keys: ["'W'", "'A'", "'S'", "'D'"]
            },
            {
            title: "Interact",
            keys: ["'F'"]
            },
            {
            title: "Attack",
            keys: ["'Space'"]
            }
        ],
        repoUrl: "https://github.com/ManuelCappai94/prototipo"
    },
    {
        _id: "Web_Dev_News",
        title: "Web Dev News",
        tecnologies: ["Next.js", "TypeScript"],
        icon: [devIcons.next, devIcons.ts],
        projectType: "Solo Project",
        context: "Learning Project",
        desc: "Next.js 16 news and routing project",
        img: webdev,
        version: "v.1.0",
        demoUrl: "https://web-dev-next-js-kappa.vercel.app/",
        longDesc:
            "Web Dev News is a learning-focused Next.js and TypeScript project created to practice modern routing, data fetching strategies, and page rendering patterns. The project modernizes an older idea into a newer Next.js workflow and explores static generation, server-side rendering, incremental regeneration, dynamic routes, and data from both internal and external API sources.",
        features: [
            "Next.js App Router page structure",
            "Dynamic navigation between pages",
            "Static generation and server-side rendering practice",
            "Incremental static regeneration examples",
            "Data fetched from internal and external API sources",
            "Dynamic post detail pages",
            "TypeScript-based project structure"
        ],
        repoUrl: "https://github.com/ManuelCappai94/Web_Dev_Next.js"
    },
        {
        _id: "My Portfolio",
        title: "My Portfolio",
        projectType: "Solo Project",
        context: "Personal Project",
        tecnologies: ["React", "CSS"],
        icon: [devIcons.react, devIcons.css],
        desc: "Personal portfolio built with React",
        img: portfolio,
        version: "v.1.5",
        repoUrl: "https://github.com/ManuelCappai94/Portfolio"
    }
]


