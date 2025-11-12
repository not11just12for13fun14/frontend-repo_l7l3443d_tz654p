import { motion } from 'framer-motion';

const items = [
  { title: 'Aurora', tag: 'Short Film', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Gilded Light', tag: 'Commercial', img: 'https://images.unsplash.com/photo-1526178612653-3e45e66c07d1?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Nocturne', tag: 'Music Video', img: 'https://images.unsplash.com/photo-1509087852663-5bbf3a0e1bff?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Mirage', tag: 'Feature', img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Horizon', tag: 'Documentary', img: 'https://images.unsplash.com/photo-1516912910508-60a7bd83b69a?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Echo', tag: 'Brand Film', img: 'https://images.unsplash.com/photo-1485841890310-6a055c88698a?q=80&w=1600&auto=format&fit=crop' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-[#0a0a0a] py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Featured Work</h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">A selection of films and commissions showcasing our signature contrast, movement, and golden-hour textures.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl bg-zinc-900/60 ring-1 ring-white/10"
            >
              <img src={it.img} alt={it.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <div className="text-amber-300 text-sm">{it.tag}</div>
                <div className="text-white text-xl font-medium">{it.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
