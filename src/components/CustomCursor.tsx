"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHovering = false;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const isTouchDevice = () => {
      return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
    };

    if (isTouchDevice()) {
      if (dotRef.current) dotRef.current.style.display = 'none';
      if (ringRef.current) ringRef.current.style.display = 'none';
      return;
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]")) {
        isHovering = true;
        dotRef.current?.classList.add("cursor-hover");
        ringRef.current?.classList.add("cursor-hover");
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]")) {
        isHovering = false;
        dotRef.current?.classList.remove("cursor-hover");
        ringRef.current?.classList.remove("cursor-hover");
      }
    };

    const animate = () => {
      const ease = 0.1;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{ transform: `translate(${-50}%, ${-50}%)` }}
      />
      {/* Sharp dot */}
      <div
        ref={dotRef}
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{ transform: `translate(${-50}%, ${-50}%)` }}
      />

      <style>{`
        * { cursor: none !important; }

        .cursor-dot {
          width: 6px;
          height: 6px;
          background: #fff;
          border-radius: 50%;
          margin-left: -3px;
          margin-top: -3px;
          transition: width 0.2s ease, height 0.2s ease, background 0.2s ease, margin 0.2s ease;
        }
        .cursor-dot.cursor-hover {
          width: 10px;
          height: 10px;
          margin-left: -5px;
          margin-top: -5px;
          background: #38bdf8;
        }

        .cursor-ring {
          width: 36px;
          height: 36px;
          border: 1.5px solid rgba(255,255,255,0.5);
          border-radius: 50%;
          margin-left: -18px;
          margin-top: -18px;
          transition: width 0.25s ease, height 0.25s ease, border-color 0.25s ease, margin 0.25s ease, opacity 0.25s ease;
          mix-blend-mode: difference;
        }
        .cursor-ring.cursor-hover {
          width: 56px;
          height: 56px;
          margin-left: -28px;
          margin-top: -28px;
          border-color: rgba(56,189,248,0.8);
        }
      `}</style>
    </>
  );
}
