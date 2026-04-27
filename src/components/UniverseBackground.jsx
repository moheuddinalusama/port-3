import { Canvas } from '@react-three/fiber';
import StarField from './StarField.jsx';
import { Suspense } from 'react';

export default function UniverseBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-universe-base">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>

      {/* Ambient Space Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Decorative HUD Lines */}
      <div className="absolute inset-x-0 top-[15%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
      <div className="absolute inset-x-0 bottom-[20%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
      <div className="absolute inset-y-0 left-[15%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
      <div className="absolute inset-y-0 right-[15%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
    </div>
  );
}
