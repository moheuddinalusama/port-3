import { motion } from 'motion/react';
import { Activity, Radio, Cpu, HardDrive } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: 42, icon: <Activity size={20} />, delay: 0.1 },
  { label: 'Lines of Code', value: 120000, suffix: '+', icon: <Cpu size={20} />, delay: 0.2 },
  { label: 'Cups of Coffee', value: 1337, icon: <Radio size={20} />, delay: 0.3 },
  { label: 'Happy Clients', value: 100, suffix: '%', icon: <HardDrive size={20} />, delay: 0.4 },
];

export default function Stats() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-white/2 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3 mb-12 md:mb-0">
            <div className="hud-label text-neon-cyan mb-4">Diagnostic Feed</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-glow">Power Metrics</h2>
            <p className="text-slate-500 hud-mono !leading-relaxed">
              Real-time diagnostic data from high-performance digital explorations. Core stability maintained at optimal levels.
            </p>
            <div className="mt-12 flex items-center gap-4 text-neon-cyan animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
              <span className="hud-mono !text-neon-cyan/80">LINK_STABLE // BUFFER_SYNCED</span>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay, duration: 0.6 }}
                className="p-8 bg-slate-900/60 backdrop-blur-sm border border-white/5 rounded-3xl relative group overflow-hidden"
              >
                {/* HUD Scanning Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-cyan/40 -translate-y-full group-hover:translate-y-[200px] transition-transform duration-[1500ms] ease-in-out pointer-events-none" />
                
                <div className="flex items-center justify-between mb-8">
                  <div className="text-slate-500 group-hover:text-neon-cyan transition-colors">
                    {stat.icon}
                  </div>
                  <span className="hud-mono !text-[8.5px] uppercase opacity-40">MTRX_NODE_{index + 1}</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <motion.h3 
                    className="text-5xl md:text-6xl font-display font-black text-white tracking-tighter"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {stat.value.toLocaleString()}
                  </motion.h3>
                  {stat.suffix && <span className="text-2xl text-neon-purple font-display font-bold">{stat.suffix}</span>}
                </div>
                
                <p className="hud-label !text-[9px] !tracking-[0.2em] text-slate-500 mt-4 group-hover:text-slate-300 transition-colors">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
