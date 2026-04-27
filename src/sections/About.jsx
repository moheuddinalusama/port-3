import { motion } from 'motion/react';
import LivingBorder from '../components/LivingBorder.jsx';
import { User, Code, Palette, Globe } from 'lucide-react';

export default function About() {
  const cards = [
    { icon: <User size={20} />, title: "Identity", text: "Senior architect of high-performance digital environments." },
    { icon: <Code size={20} />, title: "Logic", text: "Bridging physics-based motion with functional architecture." },
    { icon: <Palette size={20} />, title: "Aesthetics", text: "Immersive React ecosystems with terminal-grade precision." },
    { icon: <Globe size={20} />, title: "Reach", text: "Connecting nodes across the global digital network." },
  ];

  return (
    <section className="min-h-screen py-24 px-4 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Main Identity Panel (Design Reference: Left Panel) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-4 relative space-y-8"
        >
          <div className="p-8 bg-white/5 backdrop-blur-md border-l-2 border-neon-cyan rounded-r-2xl shadow-2xl">
            <div className="hud-label text-neon-cyan mb-4">Identity Module</div>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Specializing in high-performance digital environments and immersive React ecosystems. Bridging the gap between physics-based motion and functional architecture.
            </p>
          </div>

          <div className="space-y-6 px-2">
            {[
              { label: 'Cognition', value: 85 },
              { label: 'Execution', value: 92 },
              { label: 'Aesthetics', value: 98 }
            ].map(skill => (
              <div key={skill.label} className="flex flex-col gap-3">
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-neon-cyan shadow-[0_0_10px_#22d3ee]" 
                  />
                </div>
                <div className="flex justify-between hud-mono">
                  <span className="uppercase tracking-widest">{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-cyan/10 blur-[80px] rounded-full -z-10" />
        </motion.div>

        {/* Orbiting Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="glass p-8 rounded-3xl h-full flex flex-col gap-6 border-white/5 hover:border-neon-purple/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:bg-neon-purple/20 transition-colors shadow-inner">
                  {card.icon}
                </div>
                <div>
                  <h3 className="hud-label text-slate-200 mb-2">{card.title}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{card.text}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="hud-mono opacity-40 uppercase">Sector 0{index + 1}</span>
                  <div className="w-1 h-1 rounded-full bg-neon-cyan animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Decorative Grid Lines */}
          <div className="absolute -inset-8 border border-white/5 rounded-[60px] pointer-events-none -z-10 opacity-30" />
        </div>
      </div>
    </section>
  );
}
