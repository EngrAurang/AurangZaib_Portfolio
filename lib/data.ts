import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import addme from "@/public/addme_main_banner.jpg";
import dnex from "@/public/dnex.jpg";
import ecommercePanel from "@/public/e-commerce-panel.jpg";
import pnex from "@/public/pnex.jpg";
import erp1 from "@/public/erp1.jpg";
import econex from "@/public/econex.jpg";
import erp2 from "@/public/erp2.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer (Team Lead)",
    location: "Logicon Solutions, Islamabad",
    description:
      "As a skilled Team Lead and Full-Stack Developer, I have extensive experience overseeing multiple projects, ensuring smooth onboarding of new initiatives, and managing requirements engineering. I have led teams of Laravel developers in the design, development, and maintenance of web applications, delivering high-quality code within project timelines. My expertise includes mentoring junior developers, managing version control with Git, and implementing CI/CD processes. I am proficient in PHP, Laravel, AJAX, JavaScript, Node.js and database technologies like MySQL and MongoDB. With a strong background in HTML5, CSS3, Bootstrap, Docker, and Jira, I excel in Agile methodologies and have contributed to architectural decisions and stakeholder collaborations, ensuring efficient and innovative solutions. Project management tools like Jira, Trello and Asana. Third parties integration i.e. One-Signal, Azure Active Directory, Salesforce, and HubSpot CRM.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Present",
  },
  {
    title: "Full stack Laravel & Vue.js Developer Team Lead (ECONEX PVT)",
    location: "Econex Sales and Marketing Company, Rawalpindi",
    description:
      "I led a team of Laravel developers in designing, developing, and maintaining web applications, ensuring the timely delivery of high-quality code while managing project timelines and collaborating with stakeholders to gather requirements and create project plans. I contributed to architectural decisions, provided technical leadership, and managed version control and code management using Git. My expertise includes developing and maintaining applications with Laravel, integrating third-party services like Easypaisa, and leveraging skills in SQL, PHP, AJAX, JavaScript,  Vue.js, MySQL, HTML5, CSS3, and Bootstrap. Additionally, I am proficient in Agile methodologies, CI/CD processes, Docker, and project management tools like Jira, Trello and Asana",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Nov 2023",
  },
  {
    title: "Backend Developer",
    location: "(Brokr LLC) Florida, USA",
    description:
      "At Brokel LLC, based in Florida, US, I specialize in crafting robust and scalable APIs to empower frontend developers with seamless integration capabilities. I focus on designing and delivering high-quality, secure, and efficient APIs that form the backbone of modern web and mobile applications. By collaborating closely with frontend teams, I ensure the APIs are well-documented, intuitive, and tailored to their specific needs, enabling rapid development and exceptional user experiences. With expertise in Laravel, Azure Active Directory, Salesforce, HubSpot CRM, Trello, and Asana integrations, I am dedicated to building solutions that drive innovation and meet the unique requirements of businesses.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2024 - Nov 2024 (Part time - Remote)",
  },
  {
    title: "Sernier Laravel Developer ",
    location: "WERFEL IT, Rawalpindi",
    description:
      "Worked with senior developers to develop and maintain web applications using the Laravel framework Acquired knowledge of front-end development languages such as HTML, CSS, and JavaScript Demonstrated ability to work in a collaborative team environment Skills: SQL,PHP, Laravel , AJAX Git Css3 HTML5, Bootstrap JavaScript",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2021 - Jan 2022",
  },
  {
    title: "Laravel Developer",
    location: "Finder IT solution & Software House, Rawalpindi",
    description:
      "At Finder IT Solution & Software House, located in Chakdara, Dir Lower, KPK, I worked part-time from December 2018 to March 2020, contributing to software development and IT solutions. Over two years, I gained hands-on experience in designing, developing, and maintaining software applications tailored to meet client needs. My responsibilities included collaborating with team members to deliver high-quality solutions, managing timelines effectively, and ensuring projects were completed on-site. This role enhanced my technical expertise, problem-solving skills, and ability to adapt to diverse project requirements in a fast-paced environment.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2018 - March 2020",
  },
] as const;

export const projectsData = [
  {
    title: "AddMee",
    description:
      "AddMee's NFC-based products enable seamless sharing of contact details, social media, files, and emergency info without requiring an app. The AddMee app lets you create NFC-enabled business card profiles for events and organize contacts efficiently. HelpMee profiles cater to emergencies, offering enriched health and emergency details for quick access, ideal for the elderly, children, or pets.",
    tags: [
      "Laravel",
      "PHP",
      "JavaScript",
      "JQuery",
      "AJAX",
      "Bootstrap",
      "MySQL",
      "Salesforce-CRM Integration",
      "Active Directory Integration",
      "HubSpot-CRM Integration",
    ],
    imageUrl: addme,
    link: "https://addmee-business.com/",
  },
  {
    title: "Dnex",
    description:
      "We create various bundles to sell products and services online, enabling our community members to utilize the technique of 'direct sale' and earn a handsome commission. This reduces the cost of a middleman, and the savings are turned into commission, which is then divided among teams in favor of their selling efforts.",
    tags: [
      "Bootstrap",
      "MySQL",
      "Laravel",
      "PHP",
      "Tailwind",
      "JQuery",
      "AJAX",
    ],
    imageUrl: dnex,
    link: "https://dnex.pk/",
  },
  {
    title: "Shopeedo",
    description:
      "Shopeedo is your one-stop online shopping destination, offering a wide range of products across diverse categories to meet all your needs. From fashion and electronics to home essentials and more, we bring you high-quality items at unbeatable prices. Explore our user-friendly platform for a seamless shopping experience, and enjoy fast delivery and excellent customer support. At Shopeedo, we make shopping easy, convenient, and enjoyable for everyone.",
    tags: [
      "Laravel",
      "PHP",
      "Tailwind",
      "MySQL",
      "Bootstrap",
      "JavaScript",
      "JQuery",
    ],
    imageUrl: ecommercePanel,
    link: "https://dev.shopeedo.com/",
  },
  {
    title: "Pnex",
    description:
      "The purpose of Pnex is to provide solution to all problems related to real estate along with educating people the new ways they can adapt to outperform in the real estate business in Pakistan. We aim to create opportunities for people who wanted to reach the next level in the sector.",
    tags: [
      "Laravel",
      "PHP",
      "Tailwind",
      "Bootstrap",
      "JavaScript",
      "MySQL",
      "JQuery",
    ],
    imageUrl: pnex,
    link: "https://pnex.pk/",
  },
  {
    title: "ERP",
    description:
      "Developed a robust ERP system with a user-friendly dashboard to streamline business operations. The system integrates HRM, CRM, accounting, project management, and POS modules. Features include dynamic reporting with real-time charts for income, expenses, and cash flow analysis, along with customizable navigation for easy access. The dashboard provides key metrics such as customers, vendors, and invoices, enabling efficient decision-making. This ERP system showcases my expertise in building scalable, enterprise-grade solutions",
    tags: [
      "Laravel",
      "PHP",
      "JavaScript",
      "JQuery",
      "AJAX",
      "Bootstrap",
      "MySQL",
    ],
    imageUrl: erp1,
    link: "https://erp.econex.com.pk/",
  },
  {
    title: "Econex",
    description:
      "Developed a dynamic multi-vendor eCommerce platform designed to empower vendors and enhance user experiences. Features include vendor dashboards, product management, sales analytics, and payment tracking. The system supports multiple payment gateways, order management, and seamless checkout. A scalable, intuitive interface ensures efficient operations for vendors and a personalized shopping experience for customers",
    tags: [
      "Laravel",
      "PHP",
      "JavaScript",
      "JQuery",
      "AJAX",
      "Bootstrap",
      "MySQL",
    ],
    imageUrl: econex,
    link: "https://econex.pk/",
  },
  {
    title: "ERP System - PNEX",
    description:
      "Created a versatile ERP system dashboard for Econex IMS, integrating purchases, sales, expenses, and account management. Features include real-time metrics like sales, purchase dues, and invoice tracking, along with a 30-day sales chart. A user-friendly menu offers access to accounts, reports, and stock management, ensuring seamless and efficient business operations",
    tags: [
      "Laravel",
      "PHP",
      "JavaScript",
      "JQuery",
      "AJAX",
      "Bootstrap",
      "MySQL",
    ],
    imageUrl: erp2,
    link: "https://erp.pnex.pk/",
  },
] as const;

export const skillsData = [
  "Postman",
  "Hostinger",
  "Host Getter",
  "Grid Hosting",
  "GoDaddy",
  "Socket.io",
  "Stripe",
  "Trello",
  "Jira",
  "Asana",
] as const;
