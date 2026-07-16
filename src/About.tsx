import { motion } from 'framer-motion';
import { useState } from 'react';

const easeOut = [0.22, 1, 0.36, 1] as const;

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function About() {
  const [imgError, setImgError] = useState(false);

  const tools = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  ];

  return (
    <motion.section
      id="works"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="bg-gray-about py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
          <span className="accent-underline">About myself</span>
        </h2>

        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="bg-pink-hero rounded-[2rem] p-6 flex justify-center"
          >
            <div className="w-full max-w-sm h-80 sm:h-96 rounded-[1.5rem] overflow-hidden bg-white/30">
              {!imgError ? (
                <img
  src="/5965194032499592670_121.png"
  alt="Nawar working"
  className="w-full h-full object-cover grayscale"
  onError={() => setImgError(true)}
/>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#E4007C]/10 text-[#111111] font-bold text-center p-6">
                  Nawar Shalash
                </div>
              )}
            </div>
          </motion.div>

          {/* Text + stats */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="text-base sm:text-lg leading-relaxed text-[#111111]"
            >
              I'm <span className="text-fuchsia-brand font-bold">Nawar Zaher Shalash</span>, a Computer Science
              graduate with hands-on training in full stack web development, networking, and IT support. I'm
              passionate about building clean, user-friendly digital solutions using HTML, CSS, JavaScript, and
              Bootstrap, with a growing back-end foundation in APIs, databases, and server-side logic.
            </motion.p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: '2026', label: 'Fresh Graduate' },
                { value: '2+', label: 'Completed Trainings' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: easeOut, delay: i * 0.15, type: 'spring', bounce: 0.4 }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="bg-pink-hero rounded-2xl p-6 text-center hover-lift"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-[#111111]">{stat.value}</p>
                  <p className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-[#111111]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
            <span className="accent-underline">Tools I use</span>
          </h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12"
          >
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: easeOut } },
                }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="tool-icon flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <img src={tool.icon} alt={tool.name} className="w-9 h-9 sm:w-11 sm:h-11" />
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#111111]">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
