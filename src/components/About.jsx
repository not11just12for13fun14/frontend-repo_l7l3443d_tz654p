import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.08),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">About</h2>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Radiant Frame Production is a film collective dedicated to crafting cinematic stories
            with evocative light and immersive sound. We blend narrative instincts with
            technical precision to deliver premium visuals across film, commercials, and music videos.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-amber-300/90">
            <div>
              <div className="text-3xl font-semibold">10+</div>
              <div className="text-xs uppercase tracking-wider text-amber-200/70">Years</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">120+</div>
              <div className="text-xs uppercase tracking-wider text-amber-200/70">Projects</div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10">
          <img src="https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCZWhpbmQlMjB0aGUlMjBzY2VuZXN8ZW58MHwwfHx8MTc2MjkzNzMwOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Behind the scenes" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 to-blue-500/10 mix-blend-overlay" />
        </motion.div>
      </div>
    </section>
  );
}
