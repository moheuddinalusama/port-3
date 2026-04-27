import { motion } from 'motion/react';
import { Send, Terminal } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="hud-label text-neon-cyan mb-4">Uplink Portal</div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 tracking-tighter">Communication Terminal</h2>
          <p className="text-slate-500 hud-mono">Initiate high-priority uplink with my core system nodes.</p>
        </div>

        <div className="p-8 md:p-12 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-10 text-neon-cyan/50">
            <Terminal size={18} />
            <span className="hud-mono !text-neon-cyan/60 uppercase">System.Connect(Request_Access)</span>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="hud-label !text-[9px] text-slate-500 ml-1">Identity Name</label>
                <input 
                  type="text" 
                  placeholder="ID_INPUT_REQUIRED..."
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all text-slate-200 placeholder:text-slate-600 hud-mono"
                />
              </div>
              <div className="space-y-3">
                <label className="hud-label !text-[9px] text-slate-500 ml-1">Comm Channel</label>
                <input 
                  type="email" 
                  placeholder="ADDR_INPUT_REQUIRED..."
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-purple/50 focus:bg-white/10 transition-all text-slate-200 placeholder:text-slate-600 hud-mono"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="hud-label !text-[9px] text-slate-500 ml-1">Transmission Content</label>
              <textarea 
                rows={5}
                placeholder="DATA_STREAM_INIT..."
                className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all text-slate-200 placeholder:text-slate-600 hud-mono resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(34, 211, 238, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-neon-cyan/10 border border-neon-cyan/50 rounded-xl hud-label !text-[11px] !tracking-[0.4em] text-white flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(34,211,238,0.1)] group"
            >
              <span className="relative z-10 flex items-center gap-4">
                INITIATE_TRANSMISSION <Send size={16} />
              </span>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
