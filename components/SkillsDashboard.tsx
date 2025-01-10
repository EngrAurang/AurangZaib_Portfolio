import React from 'react';
import {
    FaNodeJs, FaJava, FaPython, FaDocker,
    FaGit, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaLaravel
} from 'react-icons/fa';
import { DiRuby, DiPhp, DiMongodb } from 'react-icons/di';
import { SiPostgresql, SiMysql, SiVuedotjs, SiJquery } from 'react-icons/si';
import SectionHeading from './section-heading';
import { skillsData } from "@/lib/data";


interface Skill {
    name: string;
    icon: React.ElementType;
    percentage: number;
    experience: string;
    category: 'Backend' | 'Frontend';
}

const skills: Skill[] = [
    // Backend Skills
    { name: 'Laravel', icon: FaLaravel, percentage: 98, experience: '4+ years experience', category: 'Backend' },
    { name: 'PHP 8.0+', icon: DiPhp, percentage: 95, experience: '4+ years experience', category: 'Backend' },
    { name: 'Node.js', icon: FaNodeJs, percentage: 80, experience: '2+ years experience', category: 'Backend' },
    { name: 'MySQL', icon: SiMysql, percentage: 93, experience: '4+ years experience', category: 'Backend' },
    { name: 'PostgreSQL', icon: SiPostgresql, percentage: 85, experience: '4+ years experience', category: 'Backend' },
    { name: 'Docker', icon: FaDocker, percentage: 75, experience: '2+ years experience', category: 'Backend' },
    { name: 'MongoDB', icon: DiMongodb, percentage: 80, experience: 'Less than a year experience', category: 'Backend' },
    { name: 'JQuery', icon: SiJquery, percentage: 90, experience: '3+ years experience', category: 'Backend' },
    { name: 'Git', icon: FaGit, percentage: 95, experience: '5+ years experience', category: 'Backend' },

    // Frontend Skills
    { name: 'HTML5', icon: FaHtml5, percentage: 98, experience: '6+ years experience', category: 'Frontend' },
    { name: 'CSS3', icon: FaCss3Alt, percentage: 99, experience: '6+ years experience', category: 'Frontend' },
    { name: 'JavaScript ES6+', icon: FaJs, percentage: 83, experience: '4+ years experience', category: 'Frontend' },
    { name: 'Vue.js', icon: SiVuedotjs, percentage: 75, experience: '1 year experience', category: 'Frontend' },
    { name: 'Bootstrap', icon: FaBootstrap, percentage: 98, experience: '3+ years experience', category: 'Frontend' },
];

const SkillsDashboard = () => {
    return (
        <section id="skills" className="dark:bg-gray-900 mb-4 p-2 sm:p-8 text-black dark:text-white min-h-screen w-full sm:w-[70%] ">
            <SectionHeading>Skills</SectionHeading>

            {['Backend', 'Frontend'].map((category) => (
                <div key={category} className="mb-12 w-full">
                    <h2 className="text-2xl font-bold mb-6 border-l-4 border-green-500 pl-4">{category}</h2>
                    <div className="flex flex-col gap-6 w-full">
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
                        {skills
                            .filter((skill) => skill.category === category)
                            .map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <div key={skill.name} className="dark:bg-gray-800 bg-gray-200 p-4 rounded-lg">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Icon className="text-2xl" />
                                            <span className="font-semibold">{skill.name}</span>
                                            <span className="ml-auto text-gray-400">{skill.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                                            <div
                                                className="bg-green-500 h-2.5 rounded-full transition-all duration-500"
                                                style={{ width: `${skill.percentage}%` }}
                                            />
                                        </div>
                                        <div className="text-sm text-gray-400 flex items-center gap-2">
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            {skill.experience}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            ))}

            <SectionHeading>Other Skills</SectionHeading>
            <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5  gap-4'>
                {skillsData.map((data, index) => (
                    <div className='rounded-full text-center p-6 dark:bg-slate-600 bg-slate-200' key={index}>{data}</div>
                ))}
            </div>
        </section>
    );
};

export default SkillsDashboard;