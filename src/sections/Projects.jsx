import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Zap, X, Cpu, Globe, Terminal, Box } from 'lucide-react';
import { useState, useMemo } from 'react';
import LivingBorder from '../components/LivingBorder.jsx';

const categories = ['All', 'Systems', 'Web', 'Visual', 'Network'];

const projects = [
  {
    id: 1,
    title: "Quantum Dashboard",
    category: "Systems",
    description: "A real-time data visualization platform for particle physics experiments. Integrated with high-velocity data streams and complex event processing engines.",
    tech: ["React", "Three.js", "D3", "WebGL"],
    gradient: "from-blue-600 to-cyan-400",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Aether OS",
    category: "Web",
    description: "Experimental browser-based operating system with a spatial interface. Features multi-threaded process management and a custom filesystem API.",
    tech: ["TypeScript", "WebWorker", "Canvas", "Rust"],
    gradient: "from-purple-600 to-pink-400",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Nebula UI",
    category: "Visual",
    description: "A high-performance component library for cyberpunk applications. Optimized for low-latency renders and fluid accessibility.",
    tech: ["Tailwind", "Motion", "Storybook", "Framer"],
    gradient: "from-orange-500 to-red-500",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Void Chat",
    category: "Network",
    description: "Decentralized end-to-end encrypted messaging terminal. Uses peer-to-peer protocols to ensure data sovereignty and anonymity.",
    tech: ["Node.js", "WebRTC", "Socket.io", "UDP"],
    gradient: "from-indigo-600 to-blue-500",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Pulse Tracker",
    category: "Systems",
    description: "A biometric data analysis tool for cyber-athletes. Real-time heart-rate variability and neural feedback monitoring.",
    tech: ["Next.js", "GraphQL", "Recharts", "Prisma"],
    gradient: "from-emerald-500 to-cyan-500",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1510511459019-5dee211c6fe2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Solaris VR",
    category: "Visual",
    description: "Interactive 3D star map explorer for VR headsets. Mapping billions of coordinates with high-precision asteroid pathing.",
    tech: ["R3F", "GLSL", "React", "Oculus"],
    gradient: "from-yellow-400 to-orange-600",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="min-h-screen py-24 px-4 relative">
      <div className="max-w-7xl mx-auto mb-20 z-10 relative">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-xl text-left">
            <div className="hud-label text-neon-cyan mb-4">Project Galaxy</div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4">Neural Architectures</h2>
            <p className="text-slate-500 hud-mono">Navigate through the constellations of high-performance digital creations.</p>
          </div>
          
          {/* HUD Filter Navigation */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl shadow-inner group">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-xl hud-mono !text-[10px] uppercase transition-all flex items-center gap-2 relative ${
                  activeFilter === cat 
                  ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30 shadow-[0_0_20px_rgba(34,211,238,0.1)]' 
                  : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {activeFilter === cat && (
                  <motion.div layoutId="activeFilter" className="absolute inset-0 border border-neon-cyan/50 rounded-xl" />
                )}
                {activeFilter === cat && <Zap size={10} className="animate-pulse" />}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30, rotateX: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer perspective-1000"
            >
              <LivingBorder glowColor="rgba(34, 211, 238, 0.3)" active={true}>
                <motion.div 
                  whileHover={{ 
                    rotateY: 5, 
                    rotateX: -5,
                    boxShadow: '0 0 50px rgba(34, 211, 238, 0.2)'
                  }}
                  className="p-6 bg-slate-900/40 backdrop-blur-md rounded-[32px] transition-all duration-500 relative overflow-hidden h-full flex flex-col"
                >
                  {/* Visual Header */}
                  <div className={`w-full aspect-[4/3] rounded-2xl mb-8 bg-gradient-to-br ${project.gradient} relative overflow-hidden group/img`}>
                    <div className="absolute inset-0 bg-slate-950/40" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover/img:grayscale-0 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/btn:opacity-100 group-hover/img:opacity-40 transition-opacity">
                      <Box size={40} className="text-white animate-spin-slow" />
                    </div>
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full hud-mono !text-[9px] text-neon-cyan uppercase">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="hud-label !text-xl !tracking-tight text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                      <Terminal size={16} className="text-slate-600 group-hover:text-neon-cyan transition-colors" />
                    </div>
                    
                    <p className="text-slate-500 text-[13px] font-light mb-8 line-clamp-3 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded-md hud-mono !text-[8.5px] uppercase tracking-wider text-slate-400">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 hud-mono !text-[8.5px] text-slate-600">+{project.tech.length - 3} MORE</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                      <div className="flex gap-4">
                        <motion.a whileHover={{ scale: 1.2, color: '#22d3ee' }} href={project.github} onClick={e => e.stopPropagation()} className="text-slate-600"><Github size={18} /></motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#fff' }} href={project.link} onClick={e => e.stopPropagation()} className="text-slate-600"><ExternalLink size={18} /></motion.a>
                      </div>
                      <span className="hud-mono !text-[9px] text-neon-cyan opacity-40 group-hover:opacity-100 transition-opacity">
                        VIEW_NODES(x01)
                      </span>
                    </div>
                  </div>
                </motion.div>
              </LivingBorder>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Holographic Detailed Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"
            />
            
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: -10 }}
              className="relative w-full max-w-5xl bg-slate-900/60 border border-white/10 rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(34,211,238,0.1)] flex flex-col md:flex-row h-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-[1010] w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all hover:scale-110"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 p-6 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
                <div className="relative rounded-[28px] overflow-hidden group/modalimg shadow-2xl">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full aspect-video md:aspect-square object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="mt-8 flex gap-6">
                  <div className="flex-1 p-4 bg-white/2 rounded-2xl border border-white/5 text-center">
                    <div className="hud-label !text-[8.5px] text-slate-500 mb-1">Complexity</div>
                    <div className="text-neon-cyan font-bold">LEVEL_09</div>
                  </div>
                  <div className="flex-1 p-4 bg-white/2 rounded-2xl border border-white/5 text-center">
                    <div className="hud-label !text-[8.5px] text-slate-500 mb-1">Status</div>
                    <div className="text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      STABLE
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="hud-label text-neon-cyan mb-4">Neural Architecture Node_{selectedProject.id}</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-glow">{selectedProject.title}</h2>
                
                <div className="space-y-8 mb-12">
                  <div className="p-6 bg-white/2 rounded-3xl border border-white/5 hover:bg-white/5 transition-colors">
                    <h4 className="hud-label !text-[10px] text-slate-500 mb-3 flex items-center gap-2">
                       <Globe size={12} className="text-neon-cyan" /> TRANSMISSION_LOGS
                    </h4>
                    <p className="text-slate-300 hud-mono !text-[13px] !leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="hud-label !text-[10px] text-slate-500 mb-4 flex items-center gap-2">
                       <Cpu size={12} className="text-neon-cyan" /> CORE_STACK
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <div key={t} className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 border border-white/10 rounded-xl text-[10px] hud-mono text-slate-300 hover:border-neon-cyan/50 transition-colors cursor-default">
                          <Zap size={10} className="text-neon-cyan" />
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <motion.a
                    href={selectedProject.link}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(34, 211, 238, 0.2)' }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-4 bg-neon-cyan/10 border border-neon-cyan/50 text-white rounded-2xl hud-label !text-[11px] flex items-center justify-center gap-3 font-bold transition-all shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                  >
                    ACCESS_UPLINK <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={selectedProject.github}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl hud-label !text-[11px] flex items-center justify-center gap-3 transition-colors"
                  >
                    REPOSITORY_OS <Github size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
