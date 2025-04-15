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
  {
    title: "Full Stack Developer",
    location: React.createElement(
      "span",
      {},
      React.createElement(
        "a",
        {
          href: "https://palm.seu.edu.cn/",
          style: { textDecoration: "underline" },
          target: "_blank",
        },
        "SEU PALM Lab",
      ),
      " Nanjing, China",
    ),
    description:
      "We have independently developed a postgraduate enrollment management system with separate front and back ends for the laboratory, and will officially put it into use in the summer of 2025 to recruit 2026 laboratory students.",
    icon: React.createElement(FaVuejs),
    date: "2024 Oct - 2025 Mar",
  },
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
  {
    title: "全栈开发者",
    location: "东南大学 PALM Lab",
    description: `独立为实验室开发了前后端分离的研究生招生管理系统，并将于2025年夏天正式投入使用，用于招收2026级实验室推免生。`,
    icon: React.createElement(FaVuejs),
    // "icon": React.createElement(FaReact),
    date: "2024年10月 - 2025年3月",
  },
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
      "旨在促进东南大学模式识别与数据挖掘实验室在管理研究生申请的协作平台。该平台集成申请者前台、后台登录与管理、数据可视化、简历评测、面试打分机制以及注重可访问性的响应式设计。",
    tags: ["Vue3", "TypeScript", "SCSS", "Vite", "Django"],
    imageUrl: knowledgeSharingPlatformImage,
    projectUrl: "https://github.com/jackosnhe04/palm-ams",
    demoUrl: "https://palm-admissions-system.vercel.app",
  },
  {
    title: "LIKEN - AI Chat System",
    title_zh: "LIKEN - 大模型对话系统",
    description: "A modern AI chat system built with Next.js 14 and TypeScript, featuring server-side rendering (SSR), global state management with React Context, and local message persistence with IndexedDB. Integrates with Wenxin and OpenAI APIs for real-time intelligent conversations.",
    desc_zh: "基于 Next.js 14 的 App Router 实现了服务端渲染(SSR)，采用 Next.js API Routes 构建后端接口。基于 React Context 进行全局会话状态管理，实现新建会话自动在侧栏更新会话列表。使用 IndexedDB 实现浏览器本地消息持久化，并支持对话历史记录管理。使用 React Markdown 实时渲染回答结果，支持代码高亮显示和复制功能。基于 SSE 实现流式对话响应，集成火山方舟大模型 API 与 OpenAI SDK 构建实时智能对话功能。",
    tags: ["React", "Next.js", "TypeScript", "Shadcn UI"],
    imageUrl: visualizationImage,
    projectUrl: "https://github.com/JacksonHe04/liken",
    demoUrl: "https://liken.vercel.app"
  },
  {
    title: "BingWenBookStore",
    title_zh: "秉文书城",
    description:
      "Developed and implemented various page layouts and interactive effects, making it easier for users to browse and find different types of books. At the same time, I was also responsible for developing and implementing user login, shopping cart and settlement and payment functions, and can adjust and delete the quantity of shopping cart items. At the same time, I developed a Q & A system based on a large model, including the front-end development of the Q & A system and the call and deployment of the large model.",
    desc_zh:
      "开发并实现了各种页面布局和交互效果，使得用户能够更加方便地浏览和查找不同类型的图书。同时，我还负责开发并实现了用户登录、购物车和结算支付功能，并且可以对购物车商品进行数量的调整和删除操作。",
    tags: ["Vue3", "Pinia", "Element Plus", "Vite"],
    imageUrl: typingSpeedImage,
    projectUrl: "https://github.com/jacksonhe04/bing-wen-book-store",
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
    title: "VoxC - Decentralized Music Rating Platform",
    title_zh: "VoxC - 去中心化音乐评分平台",
    description: "A decentralized music rating platform based on blockchain technology, aiming to create a fair and transparent music evaluation ecosystem. The platform ensures that every user's voice can be fairly recorded and evaluated through decentralized technology, featuring a community-driven governance mechanism.",
    desc_zh: "一个基于区块链技术的去中心化音乐评分平台，旨在打造一个公平、透明的音乐评价生态系统。平台通过去中心化技术确保每个用户的声音都能被公平记录和评估，具有社区驱动的治理机制。",
    tags: ["React", "TypeScript", "Vite", "Nest.js", "Node.js"],
    imageUrl: visualizationImage,
    projectUrl: "https://github.com/jacksonhe04/voxc",
    demoUrl: "https://voxc.vercel.app"
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
