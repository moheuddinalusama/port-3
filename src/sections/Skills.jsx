import { motion } from 'motion/react';

const skills = [
  { name: 'React', level: 95, color: '#61DAFB' },
  { name: 'TypeScript', level: 90, color: '#3178C6' },
  { name: 'Tailwind', level: 98, color: '#38BDF8' },
  { name: 'Motion', level: 85, color: '#FF0055' },
  { name: 'Three.js', level: 75, color: '#FFFFFF' },
  { name: 'Next.js', level: 88, color: '#FFFFFF' },
  { name: 'Node.js', level: 82, color: '#339933' },
  { name: 'Git', level: 92, color: '#F05032' },
];

export default function Skills() {
  return (
    <section className="min-h-screen py-24 px-4 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="text-center mb-24 z-10">
        <div className="hud-label text-neon-purple mb-4">Tech Arsenal</div>
        <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 tracking-tighter">System Capabilities</h2>
        <p className="text-slate-500 max-w-md mx-auto hud-mono">Weaponry selected for maximum performance and visual precision.</p>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-6 z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5, borderColor: 'rgba(168, 85, 247, 0.5)' }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center group cursor-default transition-all duration-300"
          >
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6 bg-white/5 shadow-inner transition-all group-hover:scale-110"
              style={{ color: skill.color }}
            >
              <div className="w-2 h-2 rounded-full border border-current shadow-[0_0_10px_currentColor]" />
            </div>
            <div className="hud-label !text-xs !tracking-tighter !font-bold mb-1">{skill.name}</div>
            <div className="hud-mono group-hover:text-neon-cyan transition-colors">
              {skill.level >= 90 ? 'CORE' : skill.name === 'Three.js' ? 'RENDER' : 'SYNC'}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square flex items-center justify-center -z-10 opacity-10 pointer-events-none">
        <div className="w-full h-full border border-white/20 rounded-full animate-spin [animation-duration:30s]" />
        <div className="absolute w-[80%] h-[80%] border border-white/10 rounded-full animate-spin [animation-duration:20s] direction-reverse" />
        <div className="absolute w-[60%] h-[60%] border border-white/5 rounded-full" />
      </div>
    </section>
  );
}
