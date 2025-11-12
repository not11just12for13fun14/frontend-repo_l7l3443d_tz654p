import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ujidb4bmigoHT4IV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white"
          >
            Radiant Frame <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300">Production</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 max-w-2xl text-zinc-300 text-lg sm:text-xl"
          >
            Cinematic storytelling crafted with precision, light, and emotion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 flex items-center gap-4"
          >
            <button onClick={scrollToPortfolio} className="group inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-5 py-3 text-amber-300 backdrop-blur-sm transition hover:bg-amber-500/20">
              View Portfolio
              <ArrowDown className="size-4 transition group-hover:translate-y-0.5" />
            </button>
            <a href="#contact" className="inline-flex items-center rounded-full px-5 py-3 text-zinc-100 hover:text-amber-300 transition">
              Start a Project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
