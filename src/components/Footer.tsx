'use client';

import React from 'react';
import WaitlistForm from './WaitlistForm';

export default function Footer() {
  const stats = [
    { value: '$0', label: 'Cost to Join' },
    { value: '<3ms', label: 'Cache Latency' },
    { value: '100%', label: 'Transparent Coverage' },
    { value: '6+', label: 'Languages Supported' },
  ];

  return (
    <footer className="w-full bg-[#050505] py-20 px-6 md:px-12 relative border-t border-white/4 overflow-hidden" style={{
      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
      `,
      backgroundSize: '8.333333% 80px',
      backgroundPosition: 'center top'
    }}>
      {/* Background glow overlay */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[350px] bg-[#00E5A3]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        {/* Sub-text */}
        <p className="text-slate-400 leading-relaxed max-w-2xl text-center mb-12 font-light text-base">
          Early Access subscribers get priority onboarding, direct access to the founding team, and a complimentary CTO playbook on securing third-party FinTech APIs.
        </p>

        {/* Waitlist Card */}
        <div className="w-full max-w-lg bg-[#0a0a0c]/80 border border-white/6 rounded-2xl p-8 mb-24 backdrop-blur-sm text-center shadow-xl select-none animate-fade-in">
          <WaitlistForm 
            inputId="footer-waitlist" 
            placeholder="engineering@yourco.dev" 
            microText="Join 240+ engineers already on the list" 
          />
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl border-t border-white/4 pt-16 mt-16 text-center select-none">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-extrabold text-[#00E5A3] font-display">
                {stat.value}
              </span>
              <span className="text-[10px] font-mono text-[#8a8a8a] uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Brand Copyright */}
        <div className="w-full max-w-4xl text-xs font-mono text-[#444] mt-16 text-center select-none uppercase tracking-wider">
          <span className="text-[#00E5A3] font-semibold">MINTRY.FABRIC</span> - BUILT FOR THE MODERN FINTECH STACK - © 2026 MINTRY INC.
        </div>
      </div>
    </footer>
  );
}
