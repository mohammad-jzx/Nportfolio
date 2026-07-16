import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function CTA() {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const subject = encodeURIComponent('New message from your portfolio site');
      const body = encodeURIComponent(message);
      window.location.href = `mailto:shalashnawar@gmail.com?subject=${subject}&body=${body}`;
      setSent(true);
      setMessage('');
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <motion.section
      id="contacts"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="bg-pink-hero py-24 px-6 lg:px-12"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight"
        >
          Have a project in mind?
          <br />
          Let's queue up a time to chat.
        </motion.h2>

        <motion.a
          href="mailto:shalashnawar@gmail.com"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: easeOut, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex items-center gap-2 bg-[#111111] text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[#E4007C] transition-colors duration-200"
        >
          Contact me
          <ArrowRight size={16} />
        </motion.a>

        {/* wavy underline decoration */}
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-6 w-48 h-4"
          viewBox="0 0 200 12"
        >
          <path
            d="M2 6 Q 25 0, 50 6 T 100 6 T 150 6 T 198 6"
            stroke="#E4007C"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </motion.svg>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.35 }}
          className="mt-10 text-base sm:text-lg text-[#111111]"
        >
          Have a project in mind? Write me so we can make something amazing
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.45 }}
          onSubmit={handleSubmit}
          className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 bg-white rounded-full px-6 py-3.5 text-sm font-bold text-[#111111] placeholder:text-[#111111]/40 focus:outline-none focus:ring-2 focus:ring-[#E4007C]"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#E4007C] text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[#111111] transition-colors duration-200"
          >
            Get a quote
          </motion.button>
        </motion.form>

        {sent && (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 text-sm font-bold text-[#111111] bg-white/60 inline-block px-4 py-2 rounded-full"
          >
            Thanks! Your message has been noted.
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.5 }}
          className="mt-6 text-xs sm:text-sm font-bold text-[#111111]/70"
        >
          +962 78 197 2138
        </motion.p>
      </div>
    </motion.section>
  );
}
