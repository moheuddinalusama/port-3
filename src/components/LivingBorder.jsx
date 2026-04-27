import { motion } from 'motion/react';

export default function LivingBorder({ 
  children, 
  className = "", 
  glowColor = "rgba(126, 34, 206, 0.5)", 
  speed = 4 
}) {
  return (
    <div className={`relative group p-[2px] rounded-2xl overflow-hidden ${className}`}>
      {/* Animated gradient container */}
      <motion.div 
        className="absolute inset-[-50%] z-0"
        animate={{ 
          rotate: [0, 360] 
        }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{
          background: `conic-gradient(from 0deg, transparent, ${glowColor}, transparent)`,
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full bg-universe-base/90 rounded-[14px] backdrop-blur-md overflow-hidden">
        {children}
      </div>
      
      {/* Glossy overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />
    </div>
  );
}
