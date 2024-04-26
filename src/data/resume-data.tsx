import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Galina Ufimtseva",
  initials: "GU",
  location: "Mississauga, ON, Canada (valid work permit)",
  locationLink: "https://www.google.com/maps/place/Mississauga",
  about:
    "QA Engineer with a love for high-quality software",
  summary:
    "9+ years of expertise in testing of desktop applications, web interfaces, and API for big FinTech company. Successfully led and maintained the assurance process for 12 transport e-card software products used in several countries. Experienced in functional, regression, integration, exploratory, security, usability and user acceptance testing, to ensure software adheres to functional and non-functional requirements. Managed a QA team for 7 years, honing strong leadership and mentorship skills. Launched 4 major business projects and conducted extensive training for junior testers that upskilled over 150 employees in quality assurance best practices. Skilled in collaborating with developers to identify and resolve issues. Conducted effective testing in the absence of specifications.",
  avatarUrl: "https://avatars.githubusercontent.com/u/71631431?v=4",
  //personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "g.s.ufimtseva@gmail.com",
    tel: "+14166595727",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/gufimtseva",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/galina-ufimtseva/",
        icon: LinkedInIcon,
      },
      /*{
        name: "X",
        url: "https://x.com/GalinaUfimtseva",
        icon: XIcon,
      },*/
    ],
  },
  education: [
    {
      school: "Novosibirsk State University",
      degree: "Bachelor's degree in Computer Science - Informatics And Computing Technology",
      start: "2009",
      end: "2012",
    },
    {
      school: "Higher College of Informatics at Novosibirsk State University",
      degree: "Technician - Information Technology",
      start: "2005",
      end: "2009",
    },
  ],
  work: [
    {
      company: "Center of Financial Technologies (CFT)",
      link: "https://www.linkedin.com/company/cft/",
      badges: ["Hybrid"],
      title: "Senior QA Engineer, Team Leader",
      //logo: ClevertechLogo,
      start: "2020",
      end: "2022 (2 yrs 1 mo)",
      description:
        "My role: product quality control and assistance in testing, requirement analysis, management of the development team (8 people), planning of teamwork, training new team members"+
        ", interaction with related departments and customers",
    },
    {
      company: "Center of Financial Technologies (CFT)",
      link: "https://www.linkedin.com/company/cft/",
      badges: ["Remote"],
      title: "Middle QA Engineer, QA Leader",
      //logo: JojoMobileLogo,
      start: "2015",
      end: "2020 (5 yrs 6 mos)",
      description:
        "Planned, designed, and executed manual testing of Desktop applications, Web interfaces and SOAP/REST APIs for e-transport card emission",
    },
    {
      company: "Center of Financial Technologies (CFT)",
      link: "https://www.linkedin.com/company/cft/",
      badges: ["Onsite"],
      title: "Junior QA Engineer",
      //logo: NSNLogo,
      start: "2012",
      end: "2015 (2 yrs 4 mos)",
      description: "Planned, designed and executed functional and regression testing of Desktop applications",
    },
  ],
  skills: [
    "Java",
    "Python",
    "SQL",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
