import mayerfeldImage from "../images/zippy-game-preview.jpeg"
import eurodysseyImage from "../images/idea-image.jpeg"
import ideaCertificate from "./documents/certificates/1 Certificado prácticas profesionales - Manuel Cappai.pdf"
import mayerfeldAICertificate from "./documents/certificates/dc50b790-fa53-4c8c-ad37-35376c44fc40.pdf"
import  udemyReactCertificate from "./documents/certificates/UC-8acdf35f-7e46-4cb9-b34f-c2ce613045c5.pdf"
import udemyJSCertificate from "./documents/certificates/UC-ec744161-daa4-4c70-a55c-f548cf38ed0c.pdf"
import mayerfeldPracticumCertificate from "./documents/certificates/2709535b-3df5-4440-99aa-b97342482988.pdf"
import recommendationLetterPdf from "./documents/recommendations/mayerfeld-recommendation-letter-public.pdf";
import recommendationLetterPreview from "../images/recommendationLetterPreview.png";

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
    document: ideaCertificate,
  },
  {
    id: "mayerfeld-practicum-certificate",
    title: "Mayerfeld Practicum Program ® in Frontend Development",
    issuer: "Mayerfeld Consulting",
    date: "July 2026",
    document: mayerfeldPracticumCertificate,
  },
  {
    id: "mayerfeld-ai-frontend-certificate",
    title:
      "AI Frontend Engineer: Building Web Applications with Modern AI Tools",
    issuer: "Mayerfeld Consulting",
    date: "June 2026",
    document: mayerfeldAICertificate,
  },
  {
    id: "react-redux-udemy-certificate",
    title: "React.js e Redux in Italiano: Teoria, Hooks + 11 Progetti",
    issuer: "Udemy",
    date: "April 2026",
    document: udemyReactCertificate,
  },
  {
    id: "javascript-typescript-udemy-certificate",
    title: "Corso Javascript con Progetti pratici & Typescript",
    issuer: "Udemy",
    date: "October 2025",
    document: udemyJSCertificate,
  },
];

export const recommendationsData = [
  {
    id: "mayerfeld-recommendation-letter",
    title: "Frontend Development Practicum Recommendation Letter",
    issuer: "Mayerfeld Consulting",
    date: "July 2026",
    document: recommendationLetterPdf,
    preview: recommendationLetterPreview,
  },
];