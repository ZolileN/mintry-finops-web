'use client';

import React, { useState, useEffect } from 'react';

interface EndpointStatus {
  name: string;
  ttl: string;
  status: 'CACHED' | 'BYPASS' | 'STALE';
}

export default function LogicFabric() {
  const [endpoints, setEndpoints] = useState<EndpointStatus[]>([
    { name: 'experian-credit', ttl: '24h', status: 'CACHED' },
    { name: 'transunion-kyc', ttl: '12h', status: 'CACHED' },
    { name: 'aml-screening', ttl: '48h', status: 'CACHED' },
    { name: 'bank-verification', ttl: '0s (Skip)', status: 'BYPASS' },
    { name: 'identity-match', ttl: '30d', status: 'CACHED' },
  ]);

  // Simulate updating endpoint cache statuses in real-time
  useEffect(() => {
    const interval = setInterval(() => {
      setEndpoints(prev => prev.map(ep => {
        // Randomly toggle STALE and CACHED to simulate cache invalidation/refreshes
        if (ep.name !== 'bank-verification' && Math.random() > 0.8) {
          return {
            ...ep,
            status: ep.status === 'CACHED' ? 'STALE' : 'CACHED'
          };
        }
        return ep;
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#0a0a0c] py-24 px-6 relative border-t border-white/4 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute left-1/4 top-1/3 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/3 translate-x-1/2 w-[400px] h-[400px] bg-[#00E5A3]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Section Label */}
        <div className="text-xs font-mono text-[#8a8a8a] tracking-[0.2em] mb-6 uppercase text-center lg:text-left">
          {"// 02 — The Logic Fabric"}
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start mb-20 text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight shrink-0 lg:max-w-md">
            The Logic <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00E5A3] to-blue-500">Fabric</span>
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-2xl text-base font-light pt-1">
            The Fabric is not a wrapper. It is not middleware you configure. It is a network-layer presence that watches everything — silently, instantly, without asking your agents to change their behavior.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Selective TLS Interception */}
          <div className="p-8 rounded-2xl bg-[#0a0a0c]/80 border border-white/6 hover:border-[#00E5A3]/40 transition-all duration-300 flex flex-col text-left group">
            {/* Header Icon */}
            <div className="w-10 h-10 rounded-lg bg-[#00E5A3]/10 border border-[#00E5A3]/20 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5 text-[#00E5A3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00E5A3] transition-colors duration-300">Selective TLS Interception</h3>
            <p className="text-slate-400 leading-relaxed font-light text-sm flex-1 mb-8">
              Dynamically terminates and inspects outbound vendor TLS traffic. Decrypts, matches canonical hashes, and re-encrypts entirely in memory.
            </p>
            {/* Badge */}
            <div>
              <span className="inline-block text-[10px] font-mono text-[#00E5A3] bg-[#00E5A3]/10 border border-[#00E5A3]/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                Zero-Latency
              </span>
            </div>
          </div>

          {/* Card 2: SQLCipher at Rest */}
          <div className="p-8 rounded-2xl bg-[#0a0a0c]/80 border border-white/6 hover:border-[#00E5A3]/40 transition-all duration-300 flex flex-col text-left group">
            {/* Header Icon */}
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">SQLCipher at Rest</h3>
            <p className="text-slate-400 leading-relaxed font-light text-sm flex-1 mb-8">
              All cached payloads and telemetry data are protected by AES-256-GCM encryption in a local SQLite Write-Ahead Log.
            </p>
            {/* Badge */}
            <div>
              <span className="inline-block text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                AES-256-GCM
              </span>
            </div>
          </div>

          {/* Card 3: Failsafe Circuit Breaker */}
          <div className="p-8 rounded-2xl bg-[#0a0a0c]/80 border border-white/6 hover:border-[#00E5A3]/40 transition-all duration-300 flex flex-col text-left group">
            {/* Header Icon */}
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">Failsafe Circuit Breaker</h3>
            <p className="text-slate-400 leading-relaxed font-light text-sm flex-1 mb-8">
              Engineered for zero downtime. If the cache layer experiences extreme load or disk lock, traffic gracefully falls back to a transparent TCP tunnel.
            </p>
            {/* Badge */}
            <div>
              <span className="inline-block text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                Failsafe Fallback
              </span>
            </div>
          </div>

          {/* Card 4: Dynamic Routing Policies */}
          <div className="p-8 rounded-2xl bg-[#0a0a0c]/80 border border-white/6 hover:border-[#00E5A3]/40 transition-all duration-300 flex flex-col text-left group lg:col-span-1">
            {/* Header Icon */}
            <div className="w-10 h-10 rounded-lg bg-[#00E5A3]/10 border border-[#00E5A3]/20 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5 text-[#00E5A3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00E5A3] transition-colors duration-300">Dynamic Routing Policies</h3>
            <p className="text-slate-400 leading-relaxed font-light text-sm mb-6">
              Define TTL (Time-To-Live) cache invalidation rules per vendor endpoint using hot-reloadable YAML configurations.
            </p>
            
            {/* Embedded Live Endpoint Telemetry Box */}
            <div className="bg-[#050506] border border-white/6 rounded-lg p-4 font-mono text-xs w-full mb-8 flex-1 flex flex-col gap-2.5">
              {endpoints.map((ep, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/3 pb-1.5 last:border-0 last:pb-0">
                  <span className="text-slate-400">{ep.name}</span>
                  <div className="flex gap-4 items-center">
                    <span className="text-white font-medium">TTL: {ep.ttl}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                      ep.status === 'CACHED' 
                        ? 'bg-emerald-500/10 text-emerald-400' 
                        : ep.status === 'BYPASS'
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {ep.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Badge */}
            <div>
              <span className="inline-block text-[10px] font-mono text-[#00E5A3] bg-[#00E5A3]/10 border border-[#00E5A3]/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                Hot-Reloadable YAML
              </span>
            </div>
          </div>

          {/* Card 5: Telemetry Command Center */}
          <div className="p-8 rounded-2xl bg-[#0a0a0c]/80 border border-white/6 hover:border-blue-500/40 transition-all duration-300 flex flex-col text-left group lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-start">
              {/* Left Column inside card */}
              <div className="lg:col-span-5 flex flex-col h-full justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Telemetry Command Center</h3>
                  <p className="text-slate-400 leading-relaxed font-light text-sm mb-8 lg:mb-0">
                    A stunning Next.js command center tracking ZAR capital saved, real-time cache hits via WebSockets, and system memory allocations.
                  </p>
                </div>
                {/* Badge */}
                <div className="hidden lg:block">
                  <span className="inline-block text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                    Telemetry Dashboard
                  </span>
                </div>
              </div>
              
              {/* Right Column inside card - SQL Box */}
              <div className="lg:col-span-7 w-full h-full flex flex-col justify-center">
                <div className="bg-[#050506] border border-white/6 rounded-xl overflow-hidden shadow-inner w-full font-mono text-xs text-left">
                  {/* Top bar */}
                  <div className="px-4 py-2 bg-white/2 border-b border-white/4 text-slate-500 text-[10px] select-none">
                    query_profiler.sql
                  </div>
                  {/* SQL Content */}
                  <div className="p-5 overflow-x-auto leading-relaxed select-none">
                    <div className="text-[#8a8a8a] mb-2">{"// fabric.cache snapshot"}</div>
                    <div>
                      <span className="text-purple-400">SELECT</span> endpoint, cache_status, cost_saved_zar, response_time_ms
                    </div>
                    <div>
                      <span className="text-purple-400">FROM</span> mintry_cache_log
                    </div>
                    <div>
                      <span className="text-purple-400">WHERE</span> ts &gt; <span className="text-blue-400">NOW</span>() - <span className="text-purple-400">INTERVAL</span> <span className="text-emerald-400">&apos;1 hour&apos;</span>
                    </div>
                    <div>
                      <span className="text-purple-400">ORDER BY</span> cost_saved_zar <span className="text-purple-400">DESC</span>;
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-white/4 text-[#8a8a8a]">
                      &rarr; <span className="text-[#00E5A3]">84 hits</span> &middot; <span className="text-blue-400">0.2ms</span>
                    </div>
                  </div>
                </div>
                
                {/* Mobile version badge */}
                <div className="mt-6 lg:hidden">
                  <span className="inline-block text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                    Telemetry Ledger
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
