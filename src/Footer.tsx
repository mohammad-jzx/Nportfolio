import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Github, Instagram, Linkedin } from 'lucide-react';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const socials = [
    { Icon: Github, href: 'https://github.com/Nawar-sh' },
    { Icon: Instagram, href: 'https://www.instagram.com/nawar_sh2003/' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/nawar-shalash-174366338/' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className="bg-white py-12 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* social icons */}
        <div className="flex gap-3">
          {socials.map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#111111] hover:bg-[#E4007C] hover:text-white transition-colors duration-200"
              aria-label="Social link"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-[#111111] text-center order-first sm:order-none">
          © 2026 Designed &amp; coded by Nawar Zaher Shalash
        </p>

        {/* scroll to top */}
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: easeOut }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#111111] hover:bg-[#E4007C] hover:text-white transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.footer>
  );
}
