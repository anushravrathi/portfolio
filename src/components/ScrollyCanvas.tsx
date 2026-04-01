"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;

const currentFrame = (index: number) =>
  `/sequence-1/frame_${String(index).padStart(3, "0")}_delay-0.066s.webp`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          loadedCount++;
          if (i === 0 && canvasRef.current) {
            renderFrame(img);
          }
        };
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (images.length > 0) {
          const latest = scrollYProgress.get();
          const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(latest * (FRAME_COUNT - 1))));
          if (images[index]?.complete) {
              renderFrame(images[index]);
          }
        }
      }
    };
    
    window.addEventListener("resize", updateCanvasSize);
    updateCanvasSize();
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, [images, scrollYProgress]);

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(latest)));
      if (images[index]?.complete) {
        renderFrame(images[index]);
      }
    });

    return () => unsubscribe();
  }, [frameIndex, images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#080e1a]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <Overlay scrollProgress={scrollYProgress} />
      </div>
    </div>
  );
}
