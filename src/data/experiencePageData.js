import mayerfeldImage from "../images/zippy-game-preview.jpeg"
import eurodysseyImage from "../images/idea-image.jpeg"
import ideaCertificate from "./documents/certificates/1 Certificado prácticas profesionales - Manuel Cappai.pdf"
import mayerfeldAICertificate from "./documents/certificates/dc50b790-fa53-4c8c-ad37-35376c44fc40.pdf"
import  udemyReactCertificate from "./documents/certificates/UC-8acdf35f-7e46-4cb9-b34f-c2ce613045c5.pdf"
import udemyJSCertificate from "./documents/certificates/UC-ec744161-daa4-4c70-a55c-f548cf38ed0c.pdf"

export const experienceCardsData = [
    {
        _id : "Mayerfeld",
        title: "Mayerfeld Consulting Practicum",
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
        title: "Eurodyssey Internship at IDEA",
        label: "eurodyssey-internship",
        date: "November 2023 – May 2024",
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
    document: ideaCertificate,
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
    document: mayerfeldAICertificate,
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
    document: udemyReactCertificate,
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
    document: udemyJSCertificate,
  },
];