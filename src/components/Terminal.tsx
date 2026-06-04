'use client';

import React, { useState, useEffect } from 'react';

interface TerminalLine {
  text: string;
  type: 'info' | 'mandate' | 'success' | 'warn' | 'error';
}

export default function Terminal() {
  const fullCommand = 'docker logs -f mintry-sidecar';
  const [typedCommand, setTypedCommand] = useState('');
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [step, setStep] = useState(0); // 0: typing, 1: streaming lines, 2: ended/pause

  // Typewriter effect for command
  useEffect(() => {
    if (step === 0) {
      if (typedCommand.length < fullCommand.length) {
        const timeout = setTimeout(() => {
          setTypedCommand(fullCommand.slice(0, typedCommand.length + 1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setStep(1);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [typedCommand, step]);

  // Log stream simulation
  useEffect(() => {
    if (step === 1) {
      const logs: { text: string; type: TerminalLine['type']; delay: number }[] = [
        { text: '[FABRIC] Intercepting TLS traffic on port 8080...', type: 'info', delay: 600 },
        { text: '[FABRIC] SQLCipher database unlocked and active.', type: 'mandate', delay: 800 },
        { text: '10:15:32 | POST https://api.experian.com/v1/credit-report - CACHE MISS (1240ms)', type: 'info', delay: 1000 },
        { text: '10:15:45 | POST https://api.experian.com/v1/credit-report - CACHE HIT (<3ms) | Saved: ZAR 145.00', type: 'success', delay: 1200 },
        { text: '10:16:12 | POST https://api.aml-verify.co.za/v2/kyc - CACHE MISS (840ms)', type: 'info', delay: 1000 },
        { text: '10:16:15 | POST https://api.aml-verify.co.za/v2/kyc - CACHE HIT (<2ms) | Saved: ZAR 85.00', type: 'success', delay: 800 },
        { text: '10:17:01 | [CIRCUIT BREAKER] Experian latency spiked >5000ms. Degrading to pass-through.', type: 'warn', delay: 1000 },
        { text: '[FABRIC] Graceful recovery. Telemetry synced: ZAR 230.00 saved.', type: 'success', delay: 800 },
      ];

      if (lines.length < logs.length) {
        const currentLine = logs[lines.length];
        const timeout = setTimeout(() => {
          setLines(prev => [...prev, { text: currentLine.text, type: currentLine.type }]);
        }, currentLine.delay);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setStep(2);
        }, 6000); // Wait 6 seconds at the end before restarting
        return () => clearTimeout(timeout);
      }
    }
  }, [lines, step]);

  // Restart loop
  useEffect(() => {
    if (step === 2) {
      const timeout = setTimeout(() => {
        setTypedCommand('');
        setLines([]);
        setStep(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [step]);

  const getLineClass = (type: TerminalLine['type']) => {
    switch (type) {
      case 'mandate':
        return 'text-blue-500 font-semibold';
      case 'success':
        return 'text-[#00E5A3] font-semibold';
      case 'warn':
        return 'text-amber-500 font-semibold';
      case 'error':
        return 'text-rose-500 font-bold';
      default:
        return 'text-slate-300';
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 mt-8 mb-20 relative">
      {/* Background glow behind terminal */}
      <div className="absolute inset-0 bg-[#00E5A3]/5 blur-[80px] rounded-full pointer-events-none" />
      
      {/* Terminal Container */}
      <div className="relative z-10 w-full bg-[#070708] border border-white/6 rounded-xl overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 border-b border-white/6 bg-[#0c0c0e]/50 justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs text-slate-500 font-mono select-none">mintry — proxy_monitor</span>
          <div className="w-12 h-3" /> {/* Spacer to balance dots */}
        </div>
        
        {/* Terminal Screen */}
        <div className="p-6 font-mono text-sm min-h-[280px] overflow-x-auto text-left leading-relaxed">
          {/* Command Prompt */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#00E5A3] font-bold select-none">$</span>
            <span className="text-white">
              {typedCommand}
              {step === 0 && <span className="inline-block w-2 h-4 bg-white animate-pulse ml-0.5" />}
            </span>
          </div>

          {/* Log Streaming */}
          <div className="flex flex-col gap-2">
            {lines.map((line, idx) => (
              <div key={idx} className={`${getLineClass(line.type)} break-all sm:break-normal`}>
                {line.text}
                {idx === lines.length - 1 && step === 1 && (
                  <span className="inline-block w-2 h-4 bg-[#00E5A3] animate-pulse ml-1" />
                )}
              </div>
            ))}
            {step === 2 && (
              <div className="text-[#00E5A3] font-semibold flex items-center">
                <span>[FABRIC] Idle. Re-checking...</span>
                <span className="inline-block w-2 h-4 bg-[#00E5A3] ml-1 select-none animate-pulse">█</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer hint */}
      <div className="text-center mt-6 text-xs font-mono text-[#8a8a8a] select-none">
        Zero code changes to prevent five-figure API waste.
      </div>
    </div>
  );
}
