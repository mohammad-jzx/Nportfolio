import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const easeOut = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    id: 1,
    title: 'Full Stack Developer Trainee — Umniah',
    description: 'Completed full stack development training focused on web application development, working with HTML, CSS, JavaScript, and Bootstrap, alongside back-end concepts including APIs and databases (02/2026 - 04/2026).',
    color: '#F4A8B8',
  },
  {
    id: 2,
    title: 'Network & Security Trainee',
    description: 'Built and maintained a virtual lab environment for testing network configurations, IP addressing, subnetting, and basic security hardening (03/2026).',
    color: '#E4007C',
  },
  {
    id: 3,
    title: 'Multi-Router OSPF Network Design Lab',
    description: 'Designed and implemented a multi-router network topology using OSPF, configured VLANs and inter-VLAN routing, and tested failure/recovery scenarios (03/2026).',
    color: '#F4A8B8',
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="bg-blush-projects py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
          <span className="accent-underline">My Recent projects</span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.15 }}
          className="mt-6 text-sm sm:text-base text-[#111111] max-w-lg"
        >
          A selection of work I've built recently — from web apps to design systems.
        </motion.p>

        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
          {/* Project list */}
          <div className="space-y-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.15 }}
                whileHover={{ x: 6 }}
                onClick={() => setActive(i)}
                className={`project-item flex gap-5 p-5 rounded-2xl ${
                  active === i ? 'bg-white/70' : ''
                }`}
              >
                <div className="w-1 rounded-full" style={{ backgroundColor: p.color }} />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#111111]">{p.title}</h3>
                  <p className="mt-1 text-sm text-[#111111]/70 leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: easeOut, delay: 0.6 }}
              className="inline-block mt-4 text-fuchsia-brand font-bold wavy-underline"
            >
              See more
            </motion.a>
          </div>

          {/* Project mockup card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="relative flex justify-center"
          >
            {/* decorative circles */}
            <div className="absolute top-0 right-8 w-32 h-32 rounded-full bg-[#E4007C]/30 blur-sm" />
            <div className="absolute bottom-8 left-4 w-40 h-40 rounded-full bg-purple-300/40 blur-sm" />
            <div className="absolute top-1/3 -left-2 w-20 h-20 rounded-full bg-[#F4A8B8]/50" />

            {/* browser mockup */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden hover-lift"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-gray-400">nawar.dev</span>
              </div>
              <div className="h-56 bg-gradient-to-br from-[#F4A8B8] to-[#FBE3DD] flex items-center justify-center">
                <span className="text-2xl font-bold text-white/90">{projects[active].title}</span>
              </div>
            </motion.div>

            {/* small overlapping card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3 min-w-[200px]">
              <span className="font-bold text-sm text-[#111111] truncate">{projects[active].title}</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="ml-auto w-9 h-9 rounded-full bg-[#E4007C] text-white flex items-center justify-center hover:bg-[#111111] transition-colors"
              >
                <ArrowUpRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
