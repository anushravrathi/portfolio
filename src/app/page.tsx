import ScrollyCanvas from "@/components/ScrollyCanvas";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0f0f11] min-h-screen text-white">
      {/* 
        The canvas animation sequence that tracks 500vh of scroll 
        and overlays the parallax text. 
      */}
      <ScrollyCanvas />
      
      {/* Infinite scrolling marquee of technologies */}
      <TechStack />
      
      {/* The Selected Work / Projects layout */}
      <Projects />
      
      {/* Dual layout About Me section */}
      <About />
      
      {/* Timeline format Work Experience */}
      <Experience />
      
      {/* Mega footer with email and social links */}
      <Contact />
    </main>
  );
}
