"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 text-justify">
        Hello! I'm a <span className="font-bold">passionate and detail-oriented Full-Stack Developer</span> with  
        <span className="font-bold"> 5 years of professional experience</span> in building dynamic, high-performance web applications. 
        My expertise lies in <span className="font-bold">backend development</span>, particularly with <span className="font-bold">Laravel PHP</span>, 
        where I have developed robust, scalable, and secure systems tailored to meet diverse business needs. I also bring hands-on 
        experience in <span className="font-bold">Node.js</span> for creating seamless server-side solutions that adhere to modern web standards.
        On the frontend, I specialize in <span className="font-bold">Vue.js, React.js, HTML, and CSS</span>, crafting visually appealing, responsive, 
        and user-friendly interfaces that deliver exceptional user experiences. My technical skill set extends to 
        <span className="font-bold"> database optimization</span>, <span className="font-bold">RESTful API design</span>, and implementing 
        <span className="font-bold"> MVC architecture</span>, ensuring clean, maintainable, and efficient code.
        I am well-versed in <span className="font-bold">CI/CD pipelines</span>, leveraging <span className="font-bold">AWS cloud services</span>, 
        and utilizing <span className="font-bold">Docker</span> for containerized application development and deployment. These tools enable me to deliver 
        secure, scalable, and high-performing applications efficiently. With extensive experience in 
        <span className="font-bold"> Agile methodologies</span> and version control systems like <span className="font-bold">Git</span>, I excel at 
        collaborating with cross-functional teams to deliver innovative solutions aligned with organizational goals.
        Beyond coding, I am a <span className="font-bold">lifelong learner</span> who enjoys staying updated with the latest trends and technologies. 
        I'm currently exploring <span className="font-bold">human behaviors</span> to broaden my understanding and connect better with people. 
        I also prioritize <span className="font-bold">physical fitness</span>—exercise is my version of leisure, helping me build stamina and stay focused.
        If you're looking for a developer who can transform your ideas into powerful web applications, let's connect and create something extraordinary together!
      </p>
  
      {/* <p className="text-justify">
        <span className="italic">When I'm not coding</span>, I enjoy <span className="font-bold">writing</span>, 
        <span className="font-bold">watching documentaries</span>, and <span className="font-bold">exploring nature</span>. 
        I also enjoy <span className="font-bold">learning new things</span>. I am currently learning about 
        <span className="font-bold">human behaviors</span>. I'm into a lot of exercising and building up my stamina. 
        For me, <span className="font-bold">exercise</span> is what people call "Leisure time:)".
      </p> */}
    </motion.section>
  );
  
}
