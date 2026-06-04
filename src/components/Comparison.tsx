'use client';

import React from 'react';

export default function Comparison() {
  const comparisonData = [
    {
      feature: 'Caching & Latency',
      standard: 'Always call vendor (High latency)',
      mintry: 'Transparent caching (<3ms, zero-touch)',
    },
    {
      feature: 'Data Security',
      standard: 'Unencrypted logs & payloads',
      mintry: 'SQLCipher (AES-256 encrypted WAL)',
    },
    {
      feature: 'Resilience',
      standard: 'App offline on vendor failure',
      mintry: 'Circuit Breaker fallback',
    },
    {
      feature: 'Policy Control',
      standard: 'Hardcoded endpoint rules',
      mintry: 'Hot-reloadable YAML TTL policies',
    },
  ];

  return (
    <section className="w-full bg-[#050505] py-24 px-6 relative border-t border-white/4">
      {/* Background glow overlay */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-6 flex flex-col text-left">
          {/* Section ID */}
          <div className="text-xs font-mono text-[#8a8a8a] tracking-[0.2em] mb-6 uppercase">
            {"// 01 — The Problem"}
          </div>
          
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            Vendor-<span className="text-[#00E5A3]">Sprawl</span>
          </h2>
          
          {/* Subquote */}
          <blockquote className="border-l-2 border-[#00E5A3] pl-6 py-1 mb-8">
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed italic">
              &quot;KYC and credit bureau checks are critical—but running redundant queries against third-party endpoints will drain your runway overnight.&quot;
            </p>
          </blockquote>
          
          {/* Body Text */}
          <div className="flex flex-col gap-6 text-slate-400 leading-relaxed font-light text-base">
            <p>
              Modern FinTech microservices query expensive third-party APIs constantly: Credit Bureaus, KYC, and AML endpoints. Without centralized, transparent caching, backend applications frequently issue duplicate queries, leading to astronomical and redundant API invoices.
            </p>
            <p>
              Mintry Fabric intercepts these calls at the network layer. It keeps sensitive data encrypted using SQLCipher, enforces TTL rules, and incorporates a graceful failsafe circuit breaker if the database or disk locks.
            </p>
          </div>
        </div>

        {/* Right Side Comparison Table */}
        <div className="lg:col-span-6 w-full">
          <div className="w-full bg-[#0a0a0c]/80 border border-white/6 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm p-1">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/6 font-mono text-xs tracking-wider text-[#8a8a8a] select-none">
                  <th className="py-4 px-6 uppercase font-medium">Feature</th>
                  <th className="py-4 px-6 uppercase font-medium text-right lg:text-left">Standard Billing</th>
                  <th className="py-4 px-6 uppercase font-medium text-right text-[#00E5A3]">Mintry Fabric</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/3">
                {comparisonData.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-white/1 transition-colors"
                  >
                    {/* Feature Name */}
                    <td className="py-5 px-6 font-medium text-slate-300 font-sans">
                      {row.feature}
                    </td>
                    
                    {/* Standard Billing */}
                    <td className="py-5 px-6 text-rose-500/90 font-mono text-xs text-right lg:text-left">
                      {row.standard}
                    </td>
                    
                    {/* Mintry Fabric */}
                    <td className="py-5 px-6 text-[#00E5A3] font-mono text-xs text-right font-semibold">
                      {row.mintry}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
