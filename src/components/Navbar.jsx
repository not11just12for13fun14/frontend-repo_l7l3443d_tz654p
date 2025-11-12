import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-white text-lg font-semibold tracking-wide">
          <span className="text-amber-300">Radiant</span> Frame
        </a>
        <div className="hidden md:flex items-center gap-8 text-zinc-200">
          <a href="#portfolio" className="hover:text-amber-300 transition">Portfolio</a>
          <a href="#about" className="hover:text-amber-300 transition">About</a>
          <a href="#contact" className="hover:text-amber-300 transition">Contact</a>
        </div>
        <button className="md:hidden text-white">
          <Menu />
        </button>
      </div>
    </nav>
  );
}
