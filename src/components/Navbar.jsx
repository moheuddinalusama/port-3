import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import logo from "../images/mohr1.png"
export default function Navbar() {
  return (
   <div className="bg-blue-400">

     <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed top-0 left-0 w-full z-[100] px-6 py-6 flex items-center justify-between pointer-events-none"
    >
      <div className="flex items-center gap-4 pointer-events-auto cursor-pointer group">
        <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center border border-white/5 group-hover:border-neon-cyan/50 transition-all shadow-inner">
  <img src={logo} alt="logo" className="w-full h-full rounded-[inherit] object-contain" />
</div>
        <div className="flex flex-col">
          <span className="hud-label !text-xs !tracking-tighter text-white group-hover:text-neon-cyan transition-colors">Moheuddin.Terminal</span>
          <span className="hud-mono !text-[8px] uppercase tracking-widest opacity-40">Ver_02.04</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-10 pointer-events-auto bg-slate-900/60 backdrop-blur-md px-10 py-3 rounded-full border border-white/5 border-b-neon-cyan/20">
        {['About', 'Skills', 'Projects', 'Contact'].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hud-label !text-[10px] !font-normal text-slate-400 hover:text-neon-cyan transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="pointer-events-auto md:hidden">
        <button className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-white/60 hover:text-neon-cyan transition-colors">
          <Menu size={20} />
        </button>
      </div>
    </motion.nav>
   </div>
  );
}
