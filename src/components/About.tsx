import Image from "next/image";

export default function About() {
  return (
    <section className="bg-transparent py-32 px-8 relative z-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">About Me</h2>
          <div className="space-y-6 text-xl text-zinc-400 font-light leading-relaxed">
            <p>
              I am a full stack developer currently studying Computer Science with a specialization in Artificial Intelligence at VIT Bhopal University.
            </p>
            <p>
              With a strong foundation in robust architectures and scalable APIs, I specialize in building performant applications using the MERN stack and React Native.
            </p>
            <p>
              Whether it is orchestrating complex backend systems with Node.js or crafting intuitive mobile experiences, my focus remains on learning by doing and delivering real-world projects.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="aspect-square w-full max-w-md glass rounded-3xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-0 transition-opacity duration-300 group-hover:opacity-50" />
            <div className="w-full h-full bg-zinc-900/50 rounded-2xl flex items-center justify-center text-zinc-600 italic relative z-10 border border-white/5 shadow-2xl overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Anushrav Rathi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
