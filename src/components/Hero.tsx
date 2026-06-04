'use client';

import React from 'react';
import WaitlistForm from './WaitlistForm';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#050505] flex flex-col items-center justify-center px-6 pt-32 pb-16 overflow-hidden">
      {/* Background Glow Effect mimicking the Vercel/Neon theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5A3]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a0a0c] border border-white/6 text-[#00E5A3] font-mono text-[10px] tracking-wider uppercase mb-8 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A3] animate-pulse" />
          Zero-Touch Sidecar Architecture
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1] font-display max-w-3xl">
          Transparent FinOps <br />
          TLS Proxy for <span className="text-[#00E5A3]">FinTech</span> <span className="text-[#0066FF]">APIs</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Mintry Fabric is a transparent, zero-touch Man-in-the-Middle (MITM) proxy that intercepts, encrypts, and caches expensive third-party financial API calls (e.g., Credit Bureaus, KYC, AML checks) at the network layer, dramatically reducing operational expenditures with zero code changes.
        </p>

        {/* Waitlist and CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-16">
          <WaitlistForm inputId="hero-waitlist" placeholder="you@company.dev" />
        </div>

        {/* Terminal Snippet Preview */}
        <div className="w-full max-w-2xl text-left bg-[#070708] border border-white/6 rounded-xl overflow-hidden shadow-2xl">
          <div className="flex items-center px-4 py-3 border-b border-white/6 bg-[#0c0c0e]/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="ml-4 text-xs text-slate-500 font-mono select-none">docker-compose.yml</span>
          </div>
          <div className="p-6 overflow-x-auto leading-relaxed select-none">
            <pre className="text-xs md:text-sm font-mono text-slate-300">
              <code>
                <span className="text-pink-400">environment:</span>{'\n'}
                {'  '}- <span className="text-[#00E5A3]">HTTP_PROXY</span>=http://mintry-sidecar:8080{'\n'}
                {'  '}- <span className="text-[#00E5A3]">HTTPS_PROXY</span>=http://mintry-sidecar:8080{'\n'}
                {'  '}- <span className="text-[#00E5A3]">MINTRY_SQLCIPHER_KEY</span>=your_super_secret_aes_key{'\n'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
