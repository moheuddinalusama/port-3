import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { icon: <Github size={18} />, href: '#' },
    { icon: <Twitter size={18} />, href: '#' },
    { icon: <Linkedin size={18} />, href: '#' },
    { icon: <Instagram size={18} />, href: '#' },
  ];

  return (
    <footer className="py-12 px-4 border-t border-white/5 relative bg-universe-base">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-1">
          <h3 className="hud-label text-slate-200">Moheuddin Alusama</h3>
          <p className="hud-mono !text-[8.5px] tracking-[0.3em] uppercase">© 2026 ALL_SYSTEMS_ACTIVE</p>
        </div>

        <div className="flex gap-4">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ y: -3, color: '#22d3ee' }}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-600 hover:border-neon-cyan/40 hover:text-neon-cyan transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, color: '#22d3ee' }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-600 hover:border-neon-cyan/40 transition-all"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent" />
    </footer>
  );
}
