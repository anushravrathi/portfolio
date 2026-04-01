import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <footer className="bg-[#080e1a] py-32 px-8 relative z-20 border-t border-sky-500/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
            <h2 className="text-zinc-500 text-xl md:text-2xl font-light mb-8 uppercase tracking-[0.3em]">
                Ready to collaborate?
            </h2>
            <a 
                href="mailto:ranushrav@gmail.com" 
                className="text-6xl md:text-9xl font-bold tracking-tighter text-white hover:text-sky-400 transition-colors duration-500 mb-16 inline-flex items-center group gap-4"
            >
                LET'S TALK
                <ArrowUpRight className="w-12 h-12 md:w-24 md:h-24 opacity-0 -translate-x-8 translate-y-8 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
            </a>

            <div className="flex flex-wrap justify-center gap-6 mt-16">
                <a href="mailto:ranushrav@gmail.com" className="glass border border-white/10 px-8 py-4 rounded-full flex items-center gap-3 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                    <Mail className="w-5 h-5 group-hover:text-sky-400 transition-colors" />
                    <span className="font-medium">ranushrav@gmail.com</span>
                </a>
                <a href="https://github.com/anushravrathi" target="_blank" rel="noopener noreferrer" className="glass border border-white/10 px-8 py-4 rounded-full flex items-center gap-3 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                    <FaGithub className="w-5 h-5 group-hover:text-sky-400 transition-colors" />
                    <span className="font-medium">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/anushravrathi" target="_blank" rel="noopener noreferrer" className="glass border border-white/10 px-8 py-4 rounded-full flex items-center gap-3 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                    <FaLinkedin className="w-5 h-5 group-hover:text-sky-400 transition-colors" />
                    <span className="font-medium">LinkedIn</span>
                </a>
            </div>
            
            <div className="mt-32 w-full flex justify-between items-center text-zinc-600 text-sm border-t border-white/5 pt-8">
                <p>&copy; {new Date().getFullYear()} Anushrav Rathi</p>
                <p>Designed with Intent</p>
            </div>
        </div>
    </footer>
  );
}
