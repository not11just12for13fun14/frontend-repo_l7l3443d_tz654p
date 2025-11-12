import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <Portfolio />
      <Contact />
      <footer className="bg-black/95 border-t border-white/10 py-8 text-center text-zinc-500">
        © {new Date().getFullYear()} Radiant Frame Production — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
