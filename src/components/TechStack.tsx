"use client";

import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiPython, SiCplusplus, SiDocker, SiJavascript } from "react-icons/si";

const technologies = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "React Native", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
];

export default function TechStack() {
  const duplicatedTech = [...technologies, ...technologies, ...technologies];

  return (
    <section className="bg-transparent py-24 relative z-20 overflow-hidden border-b border-white/5">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#080e1a] to-transparent z-30 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#080e1a] to-transparent z-30 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-8 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white text-center">Tech Symphony</h2>
      </div>

      <div className="flex w-max">
        <motion.div
          className="flex space-x-8 px-4"
          animate={{ x: ["0%", "-33.33333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {duplicatedTech.map((tech, idx) => {
            const Icon = tech.Icon;
            return (
              <div key={idx} className="relative p-[1px] rounded-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full" />
                <div className="relative h-full w-full bg-[#0a0a0c] px-8 py-4 rounded-full flex items-center gap-3 text-xl font-medium text-white/90 select-none whitespace-nowrap">
                  <Icon className="w-6 h-6" style={{ color: tech.color }} />
                  <span>{tech.name}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
