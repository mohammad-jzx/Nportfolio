import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="about" className="bg-pink-hero min-h-screen flex items-center pt-28 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        {/* Left: text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-[#111111]"
          >
            Hi I'm <span className="text-fuchsia-brand">NAWAR</span>, a full stack developer
            I create <span className="text-fuchsia-brand">DIGITAL SOLUTIONS</span> for users
          </motion.h1>

          <motion.a
            href="#contacts"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: easeOut, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 bg-[#111111] text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[#E4007C] transition-colors duration-200"
          >
            Get in touch
            <ArrowRight size={16} />
          </motion.a>

          {/* Social links */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.75 } },
            }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold uppercase tracking-wide"
          >
            {[
              { label: 'Github', href: 'https://github.com/Nawar-sh' },
              { label: 'Instagram', href: 'https://www.instagram.com/nawar_sh2003/' },
              { label: 'Linkedin', href: 'https://www.linkedin.com/in/nawar-shalash-174366338/' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: easeOut }}
                className="wavy-underline hover:text-[#E4007C] transition-colors"
              >
                {s.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: portrait cutout */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
          className="relative flex justify-center items-center lg:justify-end h-[28rem] sm:h-[34rem] lg:h-[40rem] xl:h-[44rem]"
        >
          {/* decorative dashed circle — top-right, framing the cap */}
          <svg className="absolute top-2 right-2 sm:right-6 w-24 h-24 sm:w-32 sm:h-32 opacity-60 pointer-events-none z-0" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" stroke="#111111" strokeWidth="3" fill="none" strokeDasharray="6 8" />
          </svg>
          {/* decorative arc — left side, mid-height */}
          <svg className="absolute bottom-24 left-0 sm:left-2 w-20 h-20 sm:w-24 sm:h-24 opacity-70 pointer-events-none z-0" viewBox="0 0 100 100">
            <path d="M10 70 Q 50 10, 90 70" stroke="#E4007C" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
          {/* small dot accent — upper-left */}
          <svg className="absolute top-12 left-4 w-8 h-8 opacity-50 pointer-events-none z-0" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="6" fill="#E4007C" />
          </svg>

          <img
            src="/Gemini_Generated_Image_l4gltvl4gltvl4gl_(1) copy.png"
            alt="Nawar Zaher Shalash"
            className="relative z-10 w-[18rem] sm:w-[24rem] lg:w-[30rem] xl:w-[34rem] max-h-full object-contain object-bottom drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
