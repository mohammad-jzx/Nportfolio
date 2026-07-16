import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Works', 'Testimonials', 'Contacts'];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <span className="text-2xl font-bold tracking-widest text-[#111111]">NAWAR</span>

        <ul className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="nav-link text-[#111111] uppercase"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <motion.a
          href="/Nawar_Shalash_CV.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="hidden md:flex items-center gap-2 bg-[#111111] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#E4007C] transition-colors duration-200"
        >
          Download my Resume
          <Download size={14} />
        </motion.a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#111111]"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden bg-white/95 backdrop-blur-sm overflow-hidden border-t border-gray-100"
          >
            <ul className="flex flex-col gap-4 px-6 pt-4 pb-6">
              {links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-[#111111] font-bold uppercase tracking-wide hover:text-[#E4007C] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href="/Nawar_Shalash_CV.pdf"
              download
              className="mx-6 mb-6 inline-flex items-center gap-2 bg-[#111111] text-white text-sm font-bold px-5 py-2.5 rounded-full"
            >
              Download my Resume
              <Download size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
