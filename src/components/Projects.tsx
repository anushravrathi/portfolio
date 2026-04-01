import Image from "next/image";
import { ExternalLink, Code2, Smartphone, ShoppingCart, Sparkles, PenLine } from "lucide-react";

const projectMeta = [
  {
    title: "Pocket Garage",
    desc: "Mobile app to track and manage diecast collections",
    tags: ["React Native", "Expo", "AsyncStorage"],
    icon: Smartphone,
    image: "/pocket-garage.jpg",
    gradient: "from-sky-500/20 via-blue-600/10 to-zinc-900",
    glow: "rgba(56,189,248,0.15)",
    accent: "#38bdf8",
  },
  {
    title: "Ecommerce Scraper",
    desc: "Automated web scraping solution",
    tags: ["Python", "BeautifulSoup"],
    icon: ShoppingCart,
    image: "/ecommerce-scraper.jpg",
    gradient: "from-blue-500/20 via-blue-700/10 to-zinc-900",
    glow: "rgba(59,130,246,0.15)",
    accent: "#3b82f6",
  },
  {
    title: "AI Article Generator",
    desc: "AI-powered content generation tool",
    tags: ["Flask", "OpenAI"],
    icon: Sparkles,
    image: "/ai-article-generator.jpg",
    gradient: "from-cyan-500/20 via-sky-700/10 to-zinc-900",
    glow: "rgba(6,182,212,0.15)",
    accent: "#06b6d4",
  },
  {
    title: "Signature Generator",
    desc: "Custom digital signature creator",
    tags: ["HTML", "CSS", "JS"],
    icon: PenLine,
    image: "/signature-generator.jpg",
    gradient: "from-sky-400/20 via-blue-500/10 to-zinc-900",
    glow: "rgba(125,211,252,0.15)",
    accent: "#7dd3fc",
  },
];

export default function Projects() {
  return (
    <section className="bg-transparent py-32 px-8 min-h-screen relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-16">Selected Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectMeta.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={i}
                className="glass rounded-3xl p-8 transition-all duration-300 group cursor-pointer border border-white/5 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />

                {/* Project image */}
                <div className="w-full h-64 rounded-xl mb-8 overflow-hidden relative group/img">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <h3 className="text-2xl font-bold text-white group-hover:transition-colors" style={{ '--hover-color': project.accent } as React.CSSProperties}>
                    {project.title}
                  </h3>
                  <div className="flex space-x-2 text-zinc-400">
                    <ExternalLink className="w-5 h-5 hover:text-white transition-colors" />
                    <Code2 className="w-5 h-5 hover:text-white transition-colors" />
                  </div>
                </div>

                <p className="text-zinc-400 mb-6 relative z-10">{project.desc}</p>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border text-zinc-300"
                      style={{ borderColor: `${project.accent}30`, background: `${project.accent}0d` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

