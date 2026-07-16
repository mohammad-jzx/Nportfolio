import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const easeOut = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    quote: 'Nawar delivered our landing page ahead of schedule and the design was pixel-perfect. A real pleasure to work with.',
    name: 'Sarah Mitchell',
    title: 'Product Manager, TechFlow',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote: 'One of the most detail-oriented frontend developers I\u2019ve collaborated with. Clean code, great UI sense.',
    name: 'James Carter',
    title: 'CTO, StartupHub',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote: 'Working with Nawar was effortless. Communication was clear and the final product exceeded expectations.',
    name: 'Lena Park',
    title: 'Designer, Pixel Studio',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(1);
  const [direction, setDirection] = useState(0);

  const go = (next: number) => {
    setDirection(next > active ? 1 : -1);
    setActive(next);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="bg-gray-about py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
          <span className="accent-underline">Testimonials</span>
        </h2>

        <div className="mt-14 relative overflow-hidden">
          <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-10 min-h-[24rem]">
            <AnimatePresence mode="popLayout" custom={direction}>
              {testimonials.map((t, i) => {
                const offset = i - active;
                const isActive = i === active;
                return (
                  <motion.div
                    key={i}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.9 }}
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      x: offset * 20,
                      scale: isActive ? 1 : 0.9,
                      zIndex: isActive ? 10 : 1,
                    }}
                    exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: easeOut }}
                    whileHover={isActive ? { y: -6 } : {}}
                    onClick={() => go(i)}
                    className={`bg-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col items-center text-center ${
                      isActive ? 'shadow-2xl w-full max-w-md' : 'w-72 hidden sm:flex'
                    } cursor-pointer`}
                  >
                    <Quote className="text-[#E4007C]" size={28} />
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#111111]">"{t.quote}"</p>
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="mt-6 w-14 h-14 rounded-full object-cover border-2 border-[#E4007C]"
                    />
                    <p className="mt-3 font-bold text-sm text-[#111111]">{t.name}</p>
                    <p className="text-xs text-[#111111]/60 mt-1">{t.title}</p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* arrows */}
          <button
            onClick={() => go((active - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#E4007C] hover:text-white transition-colors z-20"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => go((active + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#E4007C] hover:text-white transition-colors z-20"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          {/* dots */}
          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  active === i ? 'w-8 bg-[#E4007C]' : 'w-3 bg-[#111111]/30'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
