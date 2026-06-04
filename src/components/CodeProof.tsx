'use client';

import React from 'react';

export default function CodeProof() {
  return (
    <section className="w-full bg-[#050505] py-24 px-6 relative border-t border-white/4">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side Info */}
        <div className="lg:col-span-5 flex flex-col text-left">
          {/* Label */}
          <div className="text-xs font-mono text-[#8a8a8a] tracking-[0.2em] mb-6 uppercase">
            {"// 03 — Zero-Touch Policy"}
          </div>
          
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Zero code changes. <br />
            <span className="text-[#00E5A3]">Hot-reloadable</span> <br />
            policies.
          </h2>
          
          {/* Description */}
          <div className="flex flex-col gap-6 text-slate-400 leading-relaxed font-light text-base">
            <p>
              Mintry Fabric runs as a network sidecar proxy. It intercepts HTTP/HTTPS requests transparently. You don&apos;t write a single line of SDK code or redeploy your applications to modify telemetry or routing behavior.
            </p>
            <p>
              Define TTL cache invalidation and security policies in a simple <code className="bg-[#00E5A3]/10 border border-[#00E5A3]/25 px-2 py-0.5 rounded font-mono text-xs text-[#00E5A3] font-semibold">mintry.yaml</code> configuration file. The proxy hot-reloads policies on the fly without dropping connections.
            </p>
          </div>
        </div>

        {/* Right Side Code Window */}
        <div className="lg:col-span-7 w-full">
          <div className="relative w-full bg-[#070708] border border-white/6 rounded-xl overflow-hidden shadow-2xl">
            {/* Code Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/6 bg-[#0c0c0e]/50 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs text-slate-500 font-mono select-none">mintry.yaml</span>
            </div>
            
            {/* Code Body */}
            <div className="p-6 font-mono text-sm overflow-x-auto text-left leading-relaxed text-slate-300">
              <pre className="select-none">
                <code>
                  <span className="text-[#444]"># mintry.yaml - Hot-reloadable routing policies</span>{'\n'}
                  <span className="text-[#00E5A3]">version</span>: <span className="text-emerald-400">&quot;1.0&quot;</span>{'\n'}
                  {'\n'}
                  <span className="text-[#00E5A3]">routing</span>:{'\n'}
                  {'  '}- <span className="text-[#00E5A3]">endpoint</span>: <span className="text-emerald-400">&quot;api.experian.com/v1/credit-report&quot;</span>{'\n'}
                  {'    '}<span className="text-[#00E5A3]">policy</span>: cache{'\n'}
                  {'    '}<span className="text-[#00E5A3]">ttl</span>: 24h       <span className="text-[#444]"># Cache credit reports for 24 hours</span>{'\n'}
                  {'    '}<span className="text-[#00E5A3]">encrypt</span>: true   <span className="text-[#444]"># Store in AES-256 SQLCipher WAL</span>{'\n'}
                  {'    '}<span className="text-[#00E5A3]">circuit_breaker</span>:{'\n'}
                  {'      '}<span className="text-[#00E5A3]">max_latency</span>: 5000ms{'\n'}
                  {'      '}<span className="text-[#00E5A3]">fail_action</span>: pass_through{'\n'}
                  {'\n'}
                  {'  '}- <span className="text-[#00E5A3]">endpoint</span>: <span className="text-emerald-400">&quot;api.identity-check.net/v2/kyc&quot;</span>{'\n'}
                  {'    '}<span className="text-[#00E5A3]">policy</span>: cache{'\n'}
                  {'    '}<span className="text-[#00E5A3]">ttl</span>: 12h       <span className="text-[#444]"># Cache KYC checks for 12 hours</span>{'\n'}
                  {'    '}<span className="text-[#00E5A3]">encrypt</span>: true{'\n'}
                  {'\n'}
                  {'  '}- <span className="text-[#00E5A3]">endpoint</span>: <span className="text-emerald-400">&quot;api.bank-verify.co.za/v1/account&quot;</span>{'\n'}
                  {'    '}<span className="text-[#00E5A3]">policy</span>: pass_through <span className="text-[#444]"># Never cache banking transactions</span>{'\n'}
                  {'    '}<span className="text-[#00E5A3]">encrypt</span>: false{'\n'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
