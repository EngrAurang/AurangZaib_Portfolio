"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import '@/styles/global.css';

import Typewriter from "typewriter-effect";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-8"
          >
            {/* Intro-jk */}
            <div className="w-full sm:w-[70%] text-left space-y-2">
              <p className="">Hello, I'm </p>
              <h1 className="font-bold text-3xl dark:text-[#9cee69] text-[#475105]">Aurang Zaib</h1>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Laravel Developer",
                    "Core PHP Developer",
                    "NodeJS Developer",
                    "VueJS Developer"
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  wrapperClassName: "typewriterpara",
                  delay: 80,
                  deleteSpeed: 20,

                }}
              />
            </div>

            <Image
              src="/aurang.png"
              alt="Aurang Zaib"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-44 w-44 rounded-full object-cover border-[0.35rem] border-[#475105] dark:border-[#9cee69] shadow-xl"
            />
          </motion.div>

          {/* <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
        </div>
      </div>

      {/* <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Aurang Zaib.</span> I'm a{" "}
        <span className="font-bold">Full Stack developer</span> {" "} having experience in <span className="font-bold">Laravel & NodeJS</span>
        <span className="font-bold">with a Passion</span> for developing solutions that create social impact. I enjoy
        building <span className="italic">sites & apps</span>. 
      </motion.h1> */}

      <motion.div
        className="flex flex-col gap-6 sm:flex-row items-center justify-center sm:gap-2 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Stay in Touch{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/myCV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-4 sm:gap-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/engr-rahman-ullah/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/econexrahman"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
