"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const router = useRouter();

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="flex flex-col lg:flex-row gap-8 mb-3 md:mb-8 last:mb-0 bg-gray-100 max-w-[70rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition md:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
    >
      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        className={`w-full lg:w-[30rem] shadow-2xl`}
      />
      <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 flex flex-col h-full md:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="my-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2 md:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-end mt-4">
          <button className="bg-gray-900 text-white px-7 py-3 flex justify-end items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition" onClick={() => router.push(link)}>Visit Site <FaArrowRight className="group-hover:translate-x-1 transition" /> </button>
        </div>
        {
          title === "AddMee" && <>
            <p className="mb-2">Other Websites related to <span className="font-bold">AddMee</span></p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={"https://play.google.com/store/apps/details?id=com.ls.nfc.addmee"} className="flex gap-2 items-center bg-slate-600 text-white w-fit p-2 rounded-lg hover:bg-slate-50 hover:text-slate-600">AddMe Mobile APP <FaExternalLinkAlt /></Link>
              <Link href={"https://addmee.app/addmee"} className="flex gap-2 items-center bg-slate-600 text-white w-fit p-2 rounded-lg hover:bg-slate-50 hover:text-slate-600">AddMee.APP <FaExternalLinkAlt /></Link>
              <Link href={"https://help-mee.com/"} className="flex gap-2 items-center bg-slate-600 text-white w-fit p-2 rounded-lg hover:bg-slate-50 hover:text-slate-600">HelpMee <FaExternalLinkAlt /></Link>
            </div>
          </>
        }
      </div>

      

      {/* </section> */}
    </motion.div>
  );
}
