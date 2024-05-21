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
import { ResumeData } from "@/data/types";
import { Certificate } from "crypto";

export const RESUME_DATA = {
  name: "Galina Ufimtseva",
  initials: "GU",
  location: "Mississauga, ON, Canada (work permit)",
  locationLink: "https://www.google.com/maps/place/Mississauga",
  about:
    //"QA Engineer (9+ years experience) | Team Leader",
    "Senior QA Engineer | Team Leader | ISTQB Certified",
  summary:
    "Certified Software Test Engineer with 9+ years of desktop, web, and API testing expertise in a leading Fintech company. Led quality assurance for 12 multi-national transport e-card software products, managing a QA team for 7 years and launching 4 major business projects. Proficient in various testing types, including functional, regression, system integration, exploratory, UAT and maintenance testing. Skilled in leading training programs for junior testers that enhanced the skills of over 150 employees. Experienced in performing tasks without specifications and effectively troubleshooting issues with developers.",
  avatarUrl: "https://avatars.githubusercontent.com/u/71631431?v=4",
  //personalWebsiteUrl: "https://gufimtseva.ca/",
  personalWebsiteUrl: "https://app.skillsclub.com/credential/62135-8a4e2c0943c512a10351e1a5714480c93bddab561fc4a8558ef9d38431ece559?locale=en&badge=true",
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
      start: "2012",
      end: "2022 (9 yrs 10 mos)",
      //description:
      summary: "",
      bullets: [
        "Manual Testing: Planned, designed, and executed manual testing for 12 complex Desktop applications, Web interfaces, and SOAP/REST APIs, resulting in a 90% reduction in critical bugs for e-transport card usage.",
        "Test Management: Engineered and oversaw comprehensive test plans and test cases, achieving 98% feature coverage and robust regression testing across all functionalities, resulting in 0 to 2 post-release defects.",
        "Environment Management: Configured and maintained 20 diverse test environments on Windows and Unix operating systems integrated with card readers/printers, ensuring 99% uptime for testing activities.",
        "Automation and Efficiency: Spearheaded a Python-based automation project for REST API testing, reducing testing time by 50% and increasing coverage by 40%, enhancing software quality and release frequency.",
        "Project Leadership: Led the entire SDLC for 4 valuable business projects, from requirements analysis to user training, cutting documentation update times by 67%.",
        "Stakeholder Training: Conducted over 100 practical product demonstrations and training sessions for stakeholders, enhancing user understanding and adoption rates by 70%.",
        "Documentation: Prepared comprehensive test, product, and user documentation, increasing accuracy to 95% and ensuring up-to-date technical information.",
        "Collaboration and Quality Improvement: Strengthened collaboration with developers and stakeholders, translating 200+ customer requirements into development scenarios and refining design for 5 new products.",
        "Customer and Colleague Support: Provided expert advice to colleagues and customers, resolving 80% of inquiries within 24 hours and improving overall customer satisfaction.",
        "Release Coordination: Directed release planning and execution for an 8-person team, managing software rollouts across 23 regions to ensure alignment and timely delivery.",
        "Team Development and Training: Developed 25+ step-by-step training guides for team products and processes, significantly reducing onboarding time by 30%. Delivered training sessions, enhancing team proficiency.",
        "Performance Management: Mentored new team members across roles (6 QA specialists, 2 developers, 1 analyst) guiding their progression to advanced positions. Conducted 15 performance reviews, actively promoting continuous development and performance improvements.",
        ],
    },
    /*{
      company: "Center of Financial Technologies (CFT)",
      link: "https://www.linkedin.com/company/cft/",
      badges: ["Remote"],
      title: "Middle QA Engineer, QA Leader",
      //logo: JojoMobileLogo,
      start: "2015",
      end: "2020 (5 yrs 6 mos)",
      summary: "",
      bullets: [
          "Planned, designed, and executed manual testing of Desktop applications, Web interfaces and SOAP/REST APIs for e-transport card emission.",
          "Configured test environments on Windows and Unix operating systems.",
          "Prepared test, product and user documentation, ensuring accuracy and up-to-date technical information.",
          "Analyzed requirements of specifications and new tasks.",
          "Performed practical product demonstrations for stakeholders.",
          "Advised customers and colleagues.",
          "Managed QA team.",
          "Trained new QA specialists.",
      ],
    },
    {
      company: "Center of Financial Technologies (CFT)",
      link: "https://www.linkedin.com/company/cft/",
      badges: ["Onsite"],
      title: "Junior QA Engineer",
      //logo: NSNLogo,
      start: "2012",
      end: "2015 (2 yrs 4 mos)",
      summary: "",
      bullets: [
        "Planned, designed and executed functional and regression testing of Desktop applications.",
        "Upgraded test documentation and user manuals.",
        "Demonstrated released versions.",
      ],
    },*/
  ],
  skills: {
    "": [
      "Functional Testing",
      "Requirements Analysis",
      "Test Design",
      "Project Management",
      "Leadership",
    ],
    "Languages/Formats": [
      "Java",
      "Python",
      "SQL",
      "HTML/CSS",
      "Markdown",
      "XML/XSD",
      "JSON",
    ],
    "Technologies": [
      "Jira (+ Scrum/Structure Boards)",
      "Confluence (+ Gliffy)",
      "Postman",
      "Swagger",
      "SoapUI",
      "Jmeter",
      "Playwright",
      "PL/SQL Developer",
      "Oracle Database",
      "VS Code",
      "IntelliJ",
      "Overleaf",
      "Git (Bitbucket, GitHub)",
      "Docker",
      "Linux",
      "Oracle VM VirtualBox",
      "CI/CD (Atlassian Bamboo)",
      "Grafana",
      "Miro Boards",
      "Xmind",
      "Altova XMLSpy",
      "Help&Manual",
      "Microsoft Office",
      "Microsoft Teams",
      "Slack",
      "ChatGPT",
      "Agile (Scrum)",
    ],
  },
  certifications: [
    {
      name: "ISTQB® Certified Tester - Foundation Level 4.0",
      certificateLink: "https://app.skillsclub.com/credential/62135-8a4e2c0943c512a10351e1a5714480c93bddab561fc4a8558ef9d38431ece559",
      issuedBy: "iSQI",
      issued: "May 2024",
    },
    {
      name: "Verified International Academic Qualifications",
      certificateLink: "https://www.credly.com/badges/f60c9300-9376-4681-b75a-94d26e8235f8/linked_in_profile",
      issuedBy: "World Education Services (WES)",
      issued: "January 2023",
    },
  ],
  projects: [
    {
      title: "Test report",
      techStack: ["Exploratory Testing", "Notion"],
      description:
        "Exploratory Testing Report for Inworld Studio (the platform for generating lifelike AI characters)",
      //logo: TastyCloudLogo,
      link: {
        //label: "Test report for Inworld Studio",
        href: "https://mahogany-pressure-ffa.notion.site/Exploratory-Testing-Report-e08374eee03e4790b2a098047bf25617",
      },
    },
    {
      title: "Bug report",
      techStack: ["GitHub", "Markdown", "Defect Managing"],
      description:
        "Bug reports for VanHack (the platform that helps Tech Professionals get a job)",
      //logo: TastyCloudLogo,
      link: {
        //label: "Bug report for VanHack",
        href: "https://github.com/gufimtseva/Bug-reports/blob/master/VanHack/VanHack.MD",
      },
    },
    {
      title: "Autotests project",
      techStack: ["Autotesting", "Playwright", "VS Code"],
      description:
        "The Playwright autotests project for the web application Stickerfy",
      //logo: TastyCloudLogo,
      link: {
        //label: "StickerfyTestsPlaywright",
        href: "https://github.com/gufimtseva/StickerfyTestsPlaywright",
      },
    },
  ],
} as const;
