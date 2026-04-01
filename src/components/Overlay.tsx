"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const opacity1 = useTransform(scrollProgress, [0, 0.1, 0.15, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollProgress, [0, 0.15, 1], [0, -40, -40]);

  const opacity2 = useTransform(scrollProgress, [0, 0.2, 0.25, 0.5, 0.6, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollProgress, [0, 0.2, 0.6, 1], [40, 40, -40, -40]);

  const opacity3 = useTransform(scrollProgress, [0, 0.65, 0.7, 0.9, 0.98, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollProgress, [0, 0.65, 0.98, 1], [40, 40, -40, -40]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-black uppercase">Hi, I am Anushrav</h1>
          <p className="text-2xl md:text-4xl text-white font-bold drop-shadow-lg">FULL STACK DEVELOPER</p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <div className="text-center max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-black tracking-tight mb-4 text-black leading-[0.9] uppercase">Building Scalable Apps</h2>
          <p className="text-2xl md:text-4xl text-white font-bold drop-shadow-lg">MERN STACK & REACT NATIVE SPECIALIST</p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <div className="text-center max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-black tracking-tight mb-4 text-black leading-[0.9] uppercase">Learning by Doing</h2>
          <p className="text-2xl md:text-4xl text-white font-bold drop-shadow-lg">CRAFTING ROBUST PROJECT ARCHITECTURE</p>
        </div>
      </motion.div>
    </div>
  );
}
