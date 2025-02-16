import React from "react";

const Resume: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto my-5 p-5 bg-white text-gray-800">
            {/* Header */}
            <div className="flex items-start gap-5 mb-7">
                <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="个人照片"
                    className="w-30 h-30 object-cover"
                />
                <div className="flex-grow">
                    <h1 className="text-2xl font-bold mb-2">何锦诚</h1>
                    <div className="flex flex-col gap-2">
                        <a href="tel:13695663529" className="text-blue-600 flex items-center gap-1">
                            📱 13695663529
                        </a>
                        <a href="mailto:JacksonHe04@outlook.com" className="text-blue-600 flex items-center gap-1">
                            📧 JacksonHe04@outlook.com
                        </a>
                        <a href="https://github.com/jacksonhe04" className="text-blue-600 flex items-center gap-1">
                            🔗 https://github.com/jacksonhe04
                        </a>
                        <div>🏷️ 大三在读 随时到岗 可实习三个月以上 👨‍💻 前端开发工程师</div>
                        <a href="https://jacksonhe04.github.io" className="text-blue-600 flex items-center gap-1">
                            🏠 https://jacksonhe04.github.io
                        </a>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div>
                <div className="bg-blue-50 px-3 py-2 border-l-4 border-blue-600 text-lg font-medium mb-4">
                    教育经历
                </div>
                <div className="mb-5">
                    <div className="flex justify-between mb-1">
                        <span className="font-bold">东南大学</span>
                        <span className="text-gray-500">2022-09 ~ 2026-06</span>
                    </div>
                    <div className="text-sm text-gray-600">
                        <span>人工智能 本科</span>, <span>全日制统招</span>,{" "}
                        <span>计算机科学与工程学院</span>, <span>江苏南京</span>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div>
                <div className="bg-blue-50 px-3 py-2 border-l-4 border-blue-600 text-lg font-medium mb-4">
                    专业技能
                </div>
                <ul className="list-none pl-5 space-y-2">
                    {[
                        "熟练掌握 HTML 和 CSS，有使用 SCSS / TailWind / Bootstrap 的项目经验。",
                        "熟练掌握 JavaScript 语言和 ES6+ 的新特性，熟悉 TypeScript，了解常用设计模式。",
                        "熟悉 Vue3 框架的基本原理和使用方式，进行数据响应式的组件化开发。",
                        "熟悉 Vite / Webpack 构建工具，对打包配置有深入了解，有前后端部署的实践经验。",
                        "掌握 AJAX 技术，会使用 Axios 库，熟练使用 Apifox 进行接口管理与协作。",
                        "了解常见的数据结构和算法，能够使用 JavaScript / TypeScript 解决常见算法问题。",
                        "具备使用 Node.js / Django 配合 MySQL 搭建后端与数据库的经验，能够高效与后端进行协同开发。",
                    ].map((skill, index) => (
                        <li key={index} className="relative pl-5">
                            <span className="absolute left-0 text-blue-600">•</span>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Projects Section */}
            <div>
                <div className="bg-blue-50 px-3 py-2 border-l-4 border-blue-600 text-lg font-medium my-4">
                    项目经历
                </div>
                {[{
                    name: "东南大学PALM实验室招生系统 (Vue3 + Pinia + TypeScript + Element Plus)",
                    date: "2024-10 ~ 2024-12",
                    description: "前端开发，接口设计与部署",
                    link: "https://palm-admissions-system.vercel.app",
                    details: "在后台方面，管理人员可以通过后台对学生的报名信息进行审核、筛选，确保招生工作的准确性和公正性。同时，后台还具备数据统计、分析等功能，为招生决策提供有力的支持。在前台方面，该系统为学生提供了极大的便利，使得学生能够更加方便快捷地进行报名操作。",
                }, {
                    name: "基于大模型问答系统的书店网站 (Vue3 + Pinia + TypeScript + Element Plus)",
                    date: "2024-09 ~ 2024-11",
                    description: "前端开发，大模型调用与部署",
                    link: "https://bing-wen-book-store.vercel.app",
                    details: "开发并实现了各种页面布局和交互效果，使得用户能够更加方便地浏览和查找不同类型的图书。同时，我还负责开发并实现了用户登录、购物车和结算支付功能，并且可以对购物车商品进行数量的调整和删除操作。与此同时，我开发了基于大模型的问答系统，包括了问答系统的前端开发和大模型的调用与部署。",
                }].map((project, index) => (
                    <div key={index} className="mb-5">
                        <div className="flex justify-between mb-1">
                            <span className="font-bold">{project.name}</span>
                            <span className="text-gray-500">{project.date}</span>
                        </div>
                        <div className="text-sm">{project.description}</div>
                        <a href={project.link} className="text-blue-600 block mb-2">{project.link}</a>
                        <p>{project.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resume;