import { useState } from 'react';
import { motion } from 'framer-motion';

const BACKEND = import.meta.env.VITE_BACKEND_URL || '';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true); setSent(false); setError('');

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${BACKEND}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to send message');
      setSent(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative bg-[#0a0a0a] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Contact</h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">Tell us about your project. We typically respond within 1 business day.</p>
        </div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block text-sm text-zinc-300">Name</label>
            <input name="name" required className="mt-2 w-full rounded-md bg-zinc-900/70 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="Your name" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-zinc-300">Email</label>
            <input type="email" name="email" required className="mt-2 w-full rounded-md bg-zinc-900/70 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="you@company.com" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-zinc-300">Company</label>
            <input name="company" className="mt-2 w-full rounded-md bg-zinc-900/70 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="Optional" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-zinc-300">Project Type</label>
            <input name="project_type" className="mt-2 w-full rounded-md bg-zinc-900/70 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="Film, Commercial..." />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-zinc-300">Message</label>
            <textarea name="message" required rows="5" className="mt-2 w-full rounded-md bg-zinc-900/70 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="Share your vision, timeline, and goals"></textarea>
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button disabled={loading} className="inline-flex items-center gap-2 rounded-md bg-amber-500/90 hover:bg-amber-500 text-black font-medium px-6 py-3 transition disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {sent && <span className="text-emerald-400">Message sent. We’ll be in touch shortly.</span>}
            {error && <span className="text-red-400">{error}</span>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
