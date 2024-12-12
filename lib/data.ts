import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import knowledgeSharingPlatformImage from "@/public/knowledge-sharing-platform.png";
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";
import visualizationImage from "@/public/d3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "Experiences",
    hash: "#experience",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //     name: "Contact",
  //     hash: "#contact",
  // },
] as const;

export const headerLanguageMap = {
  Home: "首页",
  Projects: "我的项目",
  Skills: "我的技能",
  Experiences: "我的经历",
  About: "关于我",
};

export const experiencesData = [
  // {
  //   title: "Frontend Intern",
  //   location: React.createElement(
  //     "span",
  //     {},
  //     React.createElement(
  //       "a",
  //       {
  //         href: "https://xiaomi.com/",
  //         style: { textDecoration: "underline" },
  //         target: "_blank",
  //       },
  //       "Xiaomi Inc.",
  //     ),
  //     " Nanjing, China",
  //   ),
  //   description:
  //     "Deeply participate in web front-end business projects, accurately grasp and lead the development from the communication of requirements, and promote the project. Responsible for online maintenance in related service areas, monitor status and tune performance to ensure efficiency and stability. Select frameworks and optimize components according to technical trends and experience at the architecture design level to improve the advanced and scalable architecture. Communicate closely with multiple teams, and propose technical solutions according to scenarios to promote collaboration. Focus on problem analysis and summary, analyze the root causes, and provide suggestions for R & D process improvement to help the team improve efficiency and quality.",
  //   icon: React.createElement(FaVuejs),
  //   date: "2025 Feb - 2025 May",
  // },
  {
    title: "Undergraduate in Artificial Intelligence",
    location: "Southeast University, CN",
    description:
      "In-depth study in computer science, artificial intelligence, mathematics, and other fields, cultivating strong abilities in computational thinking, user-centered design, and data lake visualization, expected to graduate in June 2026.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Aug - Now",
  },
];

export const experiencesDataZn = [
  // {
  //   title: "前端实习生",
  //   location: "小米",
  //   description: `深入参与web前端业务项目，从需求的沟通中准确把握和引领发展，推动项目。负责相关服务领域的在线维护，监控状态并调优性能，确保效率和稳定性。根据架构设计层面的技术趋势和经验选择框架并优化组件，以改进先进且可扩展的架构。与多个团队密切沟通，并根据场景提出技术解决方案，促进协作。专注于问题分析和总结，分析根源，为研发流程改进提供建议，帮助团队提高效率和质量。`,
  //   icon: React.createElement(FaVuejs),
  //   // "icon": React.createElement(FaReact),
  //   date: "2025年1月 - 2025年5月",
  // },
  {
    title: "人工智能本科在读",
    location: "东南大学",
    description:
      "在计算机科学、人工智能、数学等领域深入学习，培养计算思维、以用户为中心的设计、数据可视化等方面的较强能力，预计2026年6月毕业。",
    icon: React.createElement(LuGraduationCap),
    date: "2022年8月 - 现在",
  },
];

export type ProjectTags = (typeof projectsData)[number]["tags"];

export const projectsData = [
  {
    title: "SEU PALM Lab Admissions System",
    title_zh: "东南大学 PALM Lab 研究生招生系统",
    description:
      "It aims to promote the collaborative platform of the Pattern Recognition and Data Mining Laboratory of Southeast University in managing graduate applications. The platform integrates applicant front-end, back-end login and management, data lake visualization, resume AI scoring, interview scoring mechanism, and responsive design focusing on accessibility.",
    desc_zh:
      "旨在促进东南大学模式识别与数据挖掘实验室在管理研究生申请的协作平台。该平台集成申请者前台、后台登录与管理、数据可视化、简历AI评分、面试打分机制以及注重可访问性的响应式设计。",
    tags: ["Vue3", "TypeScript", "SCSS", "Vite", "Django"],
    imageUrl: knowledgeSharingPlatformImage,
    projectUrl: "https://github.com/jackosnhe04/PalmAdmissionsSystem",
    demoUrl: "https://palm-admissions-system.vercel.app",
  },
  {
    title: "BingWenBookStore",
    title_zh: "秉文书城",
    description:
      "Developed and implemented various page layouts and interactive effects, making it easier for users to browse and find different types of books. At the same time, I was also responsible for developing and implementing user login, shopping cart and settlement and payment functions, and can adjust and delete the quantity of shopping cart items. At the same time, I developed a Q & A system based on a large model, including the front-end development of the Q & A system and the call and deployment of the large model.",
    desc_zh:
      "开发并实现了各种页面布局和交互效果，使得用户能够更加方便地浏览和查找不同类型的图书。同时，我还负责开发并实现了用户登录、购物车和结算支付功能，并且可以对购物车商品进行数量的调整和删除操作。与此同时，我开发了基于大模型的问答系统，包括了问答系统的前端开发和大模型的调用与部署。",
    tags: ["Vue3", "Pinia", "Element Plus", "Vite"],
    imageUrl: typingSpeedImage,
    projectUrl: "https://github.com/jacksonhe04/BingWenBookStore",
    demoUrl: "https://bing-wen-book-store.vercel.app/",
  },
  {
    title: "iNon",
    title_zh: "iNon: 组合式时间管理工具",
    description: `This is a combined time management tool, its interface is simple and easy to use, with rich and practical functions: daily schedule section rolling presentation, can carry out matters and DDL management, while supporting daily, weekly, monthly, quarterly and annual review operation.
            `,
    desc_zh:
      "这是一款组合式时间管理工具，其界面简洁易用，具备丰富实用的功能：每日日程板块滚动呈现，可进行事项与 ddl 管理，同时支持每日、每周、每月、每季度以及每年的复盘操作。 ",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: breadditImage,
    projectUrl: "https://github.com/jacksonhe04/iNon",
    demoUrl: "https://inon.vercel.app/",
  },
  {
    title: "Super Doctor",
    title_zh: "Super Doctor: 可视化的语义处理平台",
    description:
      "Super Doctor is a visualized semantic processing platform for natural language processing, which can help users analyze, operate and visualize their data.",
    desc_zh:
      "Super Doctor 是一个基于自然语言处理的可视化医疗语义处理平台，能够帮助用户分析、操作并可视化他们的数据。",
    tags: ["Vue3", "Express", "Vite", "Tensorflow"],
    imageUrl: visualizationImage,
    projectUrl: "https://github.com/jacksonhe04/SuperDoctor",
    demoUrl: "https://jacksonhe04.github.io/SuperDoctor/",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue2",
  "Vue3",
  "Vite",
  "Webpack",
  "React",
  "Next",
  "Node",
  "Express",
  "Git",
  "Github",
  "Tailwind",
  "Boostrap",
  "Element UI",
  "Ant Design",
  "Shadcn UI",
  "Django",
  "MySQL",
  "MongoDB",
  "Learning......",
];
