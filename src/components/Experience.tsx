export default function Experience() {
  const workExperiences = [
    {
      role: "Founder",
      company: "Web Crafts Media",
      period: "Sep 2023 - Present",
      description: "Built and delivered full-stack web solutions for multiple clients. Managed end-to-end development lifecycle from requirement gathering to deployment."
    },
    {
        role: "AR Modeller Intern",
        company: "OSCode",
        period: "Apr 2024 - Jun 2024",
        description: "Designed and developed 3D models for augmented reality applications using modern AR tools and pipelines."
    },
    {
        role: "Web Developer Intern",
        company: "BlackTaxi India",
        period: "Jul 2023 - Dec 2023",
        description: "Developed frontend features using HTML, CSS, JS and assisted in integrating backend APIs and optimizing performance."
    },
    {
        role: "Front-End Web Developer Intern",
        company: "ASCORP TECHNOLOGIES",
        period: "Feb 2023 - Apr 2023",
        description: "Built responsive web pages for e-commerce, improved UI components and workflows working with modern frontend practices."
    }
  ];

  const extraCurriculars = [
    {
      role: "President",
      company: "Metaversity-Metaverse Club",
      period: "Nov 2024 - Present",
      description: "Led a team of 100+ members organizing technical events, workshops, and hackathons. Coordinated cross-functional teams to deliver large-scale university events."
    }
  ];

  const renderCards = (items: typeof workExperiences) => (
    <div className="space-y-8">
        {items.map((item, idx) => (
            <div key={idx} className="glass border border-white/5 rounded-3xl p-8 md:p-12 hover:bg-white/5 transition-all duration-500 relative group overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-sky-500/0 to-sky-500/0 group-hover:via-sky-500/5 opacity-50 transition-all duration-700 pointer-events-none" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative z-10">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                        <h4 className="text-lg text-sky-400">{item.company}</h4>
                    </div>
                    <span className="text-zinc-400 font-mono text-sm mt-4 md:mt-0 glass px-4 py-2 rounded-full border border-white/10">
                        {item.period}
                    </span>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed relative z-10">
                    {item.description}
                </p>
            </div>
        ))}
    </div>
  );

  return (
    <section className="bg-transparent py-32 px-8 relative z-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-16 text-center">Work Experience</h2>
        {renderCards(workExperiences)}
        
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mt-32 mb-16 text-center">Extra-Curricular</h2>
        {renderCards(extraCurriculars)}
      </div>
    </section>
  );
}
