// 使用客户端渲染
"use client";

// 导入必要的库和组件
import React from "react";
import { headerLanguageMap, skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useLocale } from "next-intl";

// 定义淡入动画的变体
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

// Skills组件，展示技能信息
export default function Skills() {
  // 使用自定义钩子管理技能部分的视口状态
  const { ref } = useSectionInView("Skills");
  // 获取当前语言环境
  const activeLocale = useLocale();
  return (
    // 设置技能部分的HTML结构和样式
    <section
      id="skills"
      ref={ref}
      className="max-w-[53rem] scroll-mt-28 text-center mb-28"
    >
      {/* 根据语言环境显示不同的技能部分标题 */}
      <SectionHeading>
        {activeLocale === "zh" ? headerLanguageMap["Skills"] : "My Skills"}
      </SectionHeading>
      {/* 显示技能列表，使用动画效果 */}
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            // 设置每个技能项的样式和动画效果
            className="border font-bold borderBlack rounded-xl px-5 py-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 bg-white/10"

            // className="bg-gradient-to-r from-blue-500 to-purple-500 text-white borderBlack rounded-xl px-5 py-3 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
