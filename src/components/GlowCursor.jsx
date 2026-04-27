import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function TinyGlowSpider() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [rotation, setRotation] = useState(0);
  const [isAttacking, setIsAttacking] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  // মাকড়সার মুভমেন্টকে আরও স্মুথ এবং হালকা করার জন্য কনফিগ
  const springConfig = { damping: 25, stiffness: 120 };
  const sx = useSpring(cursorX, springConfig);
  const sy = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;

      // দূরত্ব মেপে স্পর্শ শনাক্ত করা
      const dx = clientX - sx.get();
      const dy = clientY - sy.get();
      const distance = Math.sqrt(dx * dx + dy * dy);
      setIsAttacking(distance < 20);

      // রোটেশন হিসাব
      const deltaX = clientX - lastPos.current.x;
      const deltaY = clientY - lastPos.current.y;
      if (Math.abs(deltaX) > 0.2 || Math.abs(deltaY) > 0.2) {
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotation(angle + 90);
      }

      cursorX.set(clientX);
      cursorY.set(clientY);
      lastPos.current = { x: clientX, y: clientY };
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [cursorX, cursorY, sx, sy]);

  return (
    <>
      {/* মাকড়সার চারপাশের লাইট ইফেক্ট (Glow/Torch) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: sx,
          y: sy,
          translateX: '-50%',
          translateY: '-50%',
          width: '150px',
          height: '150px',
          background: isAttacking 
            ? 'radial-gradient(circle, rgba(255,50,0,0.2) 0%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(255,200,100,0.15) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* মূল মাকড়সা (ছোট আকারে) */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9999]"
        style={{
          x: sx,
          y: sy,
          rotate: rotation,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-[0_0_5px_rgba(255,200,100,0.8)]">
          <defs>
            {/* বডি টেক্সচার */}
            <radialGradient id="spiderBody" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#444" />
              <stop offset="100%" stopColor="#111" />
            </radialGradient>
            
            {/* আগুনের গ্রাডিয়েন্ট */}
            <linearGradient id="fire" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ff0" />
              <stop offset="100%" stopColor="#f00" />
            </linearGradient>
          </defs>

          {/* আক্রমণ করলে আগুন বের হবে */}
          {isAttacking && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.path
                d="M 50 20 L 35 -30 Q 50 -60 65 -30 Z"
                fill="url(#fire)"
                filter="blur(1px)"
                animate={{ scaleY: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 0.1 }}
              />
            </motion.g>
          )}

          {/* মাকড়সার শরীর */}
          <ellipse cx="50" cy="60" rx="12" ry="16" fill="url(#spiderBody)" stroke="#000" />
          <ellipse cx="50" cy="40" rx="9" ry="10" fill="url(#spiderBody)" stroke="#000" />

          {/* জ্বলজ্বলে চোখ (Light Source) */}
          <circle cx="46" cy="36" r="1.5" fill={isAttacking ? "#ff0" : "#ffcc00"} className="animate-pulse" />
          <circle cx="54" cy="36" r="1.5" fill={isAttacking ? "#ff0" : "#ffcc00"} className="animate-pulse" />

          {/* ৮টি পা - ছোট এবং তীক্ষ্ণ */}
          {[...Array(8)].map((_, i) => {
            const side = i < 4 ? -1 : 1;
            const yPos = 35 + (i % 4) * 7;
            const legPath = side === -1 
              ? `M 42 ${yPos} Q 20 ${yPos-15} 5 ${yPos+15}`
              : `M 58 ${yPos} Q 80 ${yPos-15} 95 ${yPos+15}`;
            const legPathAlt = side === -1 
              ? `M 42 ${yPos} Q 10 ${yPos} 8 ${yPos-10}`
              : `M 58 ${yPos} Q 90 ${yPos} 92 ${yPos-10}`;

            return (
              <motion.path
                key={i}
                d={legPath}
                stroke="#222"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                animate={{ d: [legPath, legPathAlt, legPath] }}
                transition={{ repeat: Infinity, duration: 0.25, delay: i * 0.05 }}
              />
            );
          })}
        </svg>
      </motion.div>
    </>
  );
}