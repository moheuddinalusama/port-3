import { motion } from 'motion/react';
import { ChevronDown, Zap, Terminal, Globe, Cpu } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import NeuralCore from '../components/NeuralCore.jsx';
import { Suspense } from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* 3D Scene Wrapper - Absolute behind content */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
          <Suspense fallback={null}>
            <NeuralCore />
          </Suspense>
        </Canvas>
      </div>

      {/* Top HUD: System Status Overlay */}
      <div className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-start z-50 pointer-events-none">
        <div className="flex flex-col gap-2">
          <div className="hud-label text-neon-cyan/60 ml-8">System Terminal</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 ml-8">
              <div className="w-2 h-2  rounded-full bg-neon-cyan shadow-[0_0_10px_#22d3ee] animate-pulse" />
              <span className="hud-mono !text-slate-200 ">CORE_ACTIVE</span>
            </div>
            <div className="hud-mono text-slate-500">SYNC: READY</div>
          </div>
        </div>
        <div className="text-right hidden md:flex flex-col items-end gap-1">
          <div className="hud-label text-neon-purple/60 tracking-[0.3em]">Sector_7G</div>
          <div className="hud-mono !text-white/40 uppercase tracking-[0.3em]">Protocol_v02.04</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-neon-cyan/5 border border-neon-cyan/20 rounded-full mb-8">
            <Zap size={12} className="text-neon-cyan animate-pulse" />
            <span className="hud-mono !text-[10px] text-neon-cyan uppercase tracking-[0.4em]">NeuralArchitect_Active</span>
          </div>

          <h1 className="font-display text-7xl md:text-[9rem] lg:text-[11rem] font-black tracking-tighter leading-[0.8] mb-8 text-glow select-none">
            MOHEUDDIN<br />
            <span className="text-stroke text-transparent">AL USAMA</span>
          </h1>

          <div className="flex flex-col items-center gap-6">
            <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="hud-mono !text-sm text-slate-400 tracking-[0.5em] uppercase mb-12">
              Transforming_Data // Into_Experiences
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34, 211, 238, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-neon-cyan text-slate-950 font-bold rounded-2xl hud-label !text-[11px] flex items-center gap-3 group"
            >
              INITIALIZE_UPLINK <Terminal size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border border-white/10 text-white rounded-2xl hud-label !text-[11px] group"
            >
              LOCATE_ARCHIVES <Globe size={16} className="ml-2 inline-block group-hover:rotate-45 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Mini HUD elements */}
        <div className="absolute top-1/2 -left-20 hidden xl:flex flex-col gap-4 -translate-y-1/2 opacity-40">
           <div className="p-4 bg-white/2 border border-white/5 rounded-2xl">
             <Cpu size={16} className="text-neon-cyan mb-2" />
             <div className="hud-mono !text-[9px]">THREAD_COUNT: 12</div>
           </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 flex flex-col items-center gap-4 opacity-30 group cursor-pointer"
      >
        <span className="hud-mono !text-[9px] uppercase tracking-[0.8em] group-hover:text-neon-cyan transition-colors">Deep_Dive</span>
        <ChevronDown size={14} className="text-neon-cyan" />
      </motion.div>

      {/* Ambient Radial Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.8)_80%)]" />
    </section>
  );
}
