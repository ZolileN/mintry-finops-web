'use client';

import React from 'react';

interface Language {
  name: string;
  dotColor: string;
}

export default function Languages() {
  const languages: Language[] = [
    { name: 'Python', dotColor: 'bg-blue-500 shadow-blue-500/50' },
    { name: 'Node.js', dotColor: 'bg-emerald-500 shadow-emerald-500/50' },
    { name: 'Java', dotColor: 'bg-amber-500 shadow-amber-500/50' },
    { name: 'Go', dotColor: 'bg-cyan-500 shadow-cyan-500/50' },
    { name: 'Kotlin', dotColor: 'bg-purple-500 shadow-purple-500/50' },
    { name: 'Swift', dotColor: 'bg-rose-500 shadow-rose-500/50' },
  ];

  return (
    <section className="w-full bg-[#050505] py-24 px-6 relative border-t border-white/4">
      {/* Background glow overlay */}
      <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Label */}
        <div className="text-xs font-mono text-[#8a8a8a] tracking-[0.2em] mb-6 uppercase select-none">
          {"// 04 — Language-Agnostic"}
        </div>
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
          One Fabric. / Any Language.
        </h2>
        
        {/* Description */}
        <p className="text-slate-400 leading-relaxed max-w-2xl mb-12 font-light text-base text-center">
          Whether you build in Python, Node.js, Java, or Go — Mintry&apos;s sidecar proxy architecture transparently intercepts and caches expensive third-party financial API calls for your microservices. One deployment. Total coverage.
        </p>

        {/* Language Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full max-w-3xl mb-16">
          {languages.map((lang, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center gap-3 py-3 px-5 rounded-xl bg-[#0a0a0c]/80 border border-white/6 hover:border-white/12 transition-colors select-none font-mono text-xs text-white"
            >
              <span className={`w-2 h-2 rounded-full ${lang.dotColor} shadow-[0_0_8px_rgba(255,255,255,0.2)]`} />
              {lang.name}
            </div>
          ))}
        </div>

        {/* Sidecar Proxy Footer Box */}
        <div className="w-full max-w-3xl bg-[#0a0a0c]/50 border border-white/6 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left select-none">
          {/* Connector Icon */}
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          {/* Text */}
          <div className="text-sm leading-relaxed text-slate-400">
            <span className="text-blue-400 font-semibold font-mono">Sidecar Proxy Architecture</span> — No SDK lock-in, no vendor coupling. Deploy alongside any runtime.
          </div>
        </div>
      </div>
    </section>
  );
}
