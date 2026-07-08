import companyLogo from "../images/Mayerfeld-Consulting-logo-profile.jpg";
import finalScore from "../images/final-score-review-screenshot.jpeg";
import eurodysseyLogo from "../images/eurodyssey-logo.png"
import eurodysseyGroupPhoto from "../images/eurodysseyGroupPhoto.png"
import lectureSlides from "./documents/teaching-materials/unità 5.pdf"

export const workItems = [
  {
    id: "final-score-reviews",
    title: "FinalScoreReviews",
    type: "Team project",
    description:
      "A responsive multi-page game review website and my first project developed within a team. I mainly worked on the homepage, refined the overall layout, cleaned up the shared codebase, fixed bugs, and helped guide the general direction of the project.",
    links: 
      {
        label: "View repository",
        href: "https://github.com/XDIOmarX/FinalScoreReviews",
      },
  },
  {
    id: "html-mini-wiki",
    title: "HTML Mini Wiki",
    type: "Individual project",
    description:
      "A small HTML-only project created to practise semantic markup, content hierarchy, navigation, and document structure while exploring what could be achieved within the limits of HTML alone.",
    links: 
      {
        label: "View repository",
        href: "https://github.com/ManuelCappai94/htmlProject",
      },
  },
  {
    id: "number-guessing-game",
    title: "Number Guessing Game",
    type: "Team project",
    description:
      "A console-based game with input validation, a limited number of attempts, score calculation, cancellation handling, and clear feedback for invalid values. I mainly worked on the initial logic, the overall code structure and main game loop, as well as code cleanup and bug fixing.",
    links: 
      {
        label: "View repository",
        href: "https://github.com/GNevesRPereira/NumberGuessingGame",
      },
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    type: "Team project",
    description:
      "A five-round console game with score tracking, case-insensitive input, invalid-value handling, and a confirmation flow for leaving an active match. I worked mainly on the general game loop, player-name setup, state consistency throughout the rounds, code cleanup, and bug fixing.",
    links: 
      {
        label: "View repository",
        href: "https://github.com/GNevesRPereira/RockPaperScissorsJavascriptGame",
      },
  },
{
  id: "calculator",
  title: "Calculator",
  type: "Team project",
  description:
    "An interactive calculator built with a responsibility-based, object-oriented structure. I developed the initial application logic, validation functions, modal system, responsive behaviour, and calculator preview. I also cleaned up the JavaScript and CSS, fixed bugs, and coordinated the technical direction and task distribution within the team.",
  links: {
    label: "View repository",
    href: "https://github.com/ManuelCappai94/js-calculator",
  },
},
{
  id: "zippy-hive-hopper",
  title: "Zippy the Hive Hopper",
  type: "Team project",
  description:
    "A browser jumping game built with a responsibility-based architecture and a requestAnimationFrame game loop. I implemented obstacle management, hitboxes, map clamping, player movement, the health bar, progressive difficulty, and scoring improvements. I also handled bug fixing, code cleanup, and the overall technical direction of the project.",
  links: {
    label: "View repository",
    href: "https://github.com/ManuelCappai94/js-jumping-game",
  },
},
];

export const outcomes = [
  {
    id: "approved-projects",
    title: "Six projects approved",
    description:
      "Every assignment was completed, presented, reviewed, and accepted by the practicum reviewers.",
  },
  {
    id: "shared-workflow",
    title: "Experience in a shared workflow",
    description:
      "I worked with branches, shared repositories, incoming changes, merge conflicts, deadlines, and review feedback.",
  },
  {
    id: "debugging",
    title: "Stronger debugging and refactoring skills",
    description:
      "The practicum required me to identify regressions, improve responsive behaviour, simplify code, and stabilise work produced by multiple contributors.",
  },
  {
    id: "communication",
    title: "Clearer technical communication",
    description:
      "Presenting projects and discussing implementation choices helped me explain problems, solutions, and trade-offs more effectively.",
  },
];

export const eurodysseyWorkItems = [
  {
    id: "european-project-proposals",
    title: "European Project Proposals",
    type: "Project development",
    description:
      "I supported the drafting and revision of European project proposals that had not previously been approved. I reviewed existing material, proposed new ideas, and rewrote sections to prepare the projects for further evaluation and resubmission.",
  },
  {
    id: "company-workflow",
    title: "Company Workflow and Meetings",
    type: "Professional activity",
    description:
      "I contributed to IDEA’s daily workflow and attended meetings on behalf of the organisation, taking notes, collecting relevant information, and identifying ideas and opportunities that could support ongoing activities.",
  },
  {
    id: "italian-language-lessons",
    title: "Italian Language and Culture Lessons",
    type: "Teaching activity",
    description:
      "During the final two months, I designed and delivered targeted Italian lessons for A1–A2 students preparing to join an Erasmus+ mobility programme in Italy. I created visual learning materials and introduced both the language and aspects of Italian culture.",
    
    links: {
      label: "View teaching materials",
      href: lectureSlides,
    },

  },
];

export const eurodysseyOutcomes = [
  {
    id: "public-speaking",
    title: "Greater confidence in public speaking",
    description:
      "Preparing and delivering lessons strengthened my ability to explain ideas clearly, adapt my communication to an audience, and speak confidently in front of a group.",
  },
  {
    id: "organisation",
    title: "Stronger organisational skills",
    description:
      "Working on proposals, meetings, documentation, and lessons improved my ability to organise information, manage different responsibilities, and contribute to a professional workflow.",
  },
  {
    id: "international-teamwork",
    title: "Experience in an international environment",
    description:
      "Living and working with people from different European countries strengthened my teamwork, interpersonal communication, and ability to adapt to unfamiliar professional and social contexts.",
  },
  {
    id: "languages-and-confidence",
    title: "Language growth and personal confidence",
    description:
      "The experience significantly improved my English and Spanish while increasing my independence and confidence in building relationships and starting from zero in a completely new environment.",
  },
];

export const experienceDetailsData = [
  {
    id: "mayerfeld-practicum",

    title: "Mayerfeld Consulting Practicum",
    date: "June 2026 – July 2026",

    companyLogo,
    companyLogoAlt: "Mayerfeld Consulting logo",

    overview: {
      label: "Experience Overview",
      title: "A Quick Look at the Practicum",

      image: finalScore,
      imageAlt: "Screenshot of the FinalScoreReviews website",
      imageCaption:
        "Hero of FinalScoreReviews, developed during the practicum",

      paragraphs: [
        "The Mayerfeld Consulting Frontend Practicum was a project-based programme built around weekly assignments, teamwork, presentations, and code reviews. It placed strong emphasis on semantic HTML, accessibility, clean and maintainable code, and delivering working projects within defined deadlines.",

        "The programme also introduced security concerns such as prompt injection and possible mitigation strategies, while giving me practical experience with shared Git workflows, task coordination, conflict resolution, debugging, and improving code produced within a team.",

        "It also included an introduction to AI-assisted development through Vercel v0, covering its workflow, different prompting approaches, and how the platform turns requirements into generated interfaces and application code.",
      ],
    },

    selectedWork: {
      label: "Selected Work",
      title: "Projects Completed During the Practicum",
      description:
        "Six assignments covering semantic HTML, responsive design, JavaScript logic, DOM interaction, teamwork, and browser-based game development.",

      items: workItems,
    },

    outcomes: {
      label: "Outcomes",
      title: "Skills and Experience Gained",
      description:
        "The practicum strengthened both my technical foundation and my ability to contribute effectively within a shared development workflow.",

      items: outcomes,
    },
  },
  {
    id: "eurodyssey-internship",

    title: "Eurodyssey Internship at IDEA",
    date: "November 2023 – May 2024",

    companyLogo: eurodysseyLogo,
    companyLogoAlt: "IDEA Alzira logo",

    overview: {
      label: "Experience Overview",
      title: "A Quick Look at the Internship",

      image: eurodysseyGroupPhoto,
      imageAlt:
        "Participants from different European countries during the Eurodyssey internship programme",
      imageCaption:
        "Group photo of the international participants in the Eurodyssey programme",

      paragraphs: [
        "The Eurodyssey traineeship was an international experience shared with participants from across Europe. During the first month, we attended language training and took part in guided activities around Valencia and the surrounding area, designed to introduce us to Spain and the Valencian community.",

        "After the initial month, each participant began a professional placement in a different organisation. I joined IDEA in December 2023, where I mainly supported the drafting and revision of European project proposals, contributed new ideas, and helped prepare previously rejected projects for further evaluation and resubmission. I also attended meetings on behalf of the organisation, taking notes and collecting relevant information and opportunities.",

        "During the final two months, I designed and delivered targeted Italian language and culture lessons for A1–A2 students preparing to participate in an Erasmus+ mobility programme in Italy. I prepared the learning materials myself and adapted the lessons to their practical needs.",
      ],
    },

    selectedWork: {
      label: "Selected Work",
      title: "Activities Completed During the Internship",
      description:
        "The placement combined European project development, participation in IDEA’s professional workflow, and the preparation of Italian language and culture lessons for future Erasmus+ participants.",

      items: eurodysseyWorkItems,
    },

    outcomes: {
      label: "Outcomes",
      title: "Skills and Experience Gained",
      description:
        "The internship strengthened my public speaking, organisation, teamwork, English and Spanish, while giving me greater confidence in adapting to a completely new international environment.",

      items: eurodysseyOutcomes,
    },
  },
];