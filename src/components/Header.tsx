'use client';

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show waitlist input in header when scrolled past the main hero input
      if (window.scrollY > 350) {
        setShowWaitlist(true);
      } else {
        setShowWaitlist(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Emit event to sync with other waitlist forms
      window.dispatchEvent(new CustomEvent('waitlist-submit', { detail: email }));
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  useEffect(() => {
    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent;
      setSubmitted(true);
      setEmail(customEvent.detail);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    };
    window.addEventListener('waitlist-submit', handleSync);
    return () => window.removeEventListener('waitlist-submit', handleSync);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#050505]/70 border-b border-white/6 transition-all duration-300">
      <div className="w-full px-6 md:px-12 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="nav-logo flex items-center gap-1 select-none">
          MINTRY<span>.FABRIC</span>
        </a>

        {/* Scroll-Synced Waitlist Form */}
        <div className={`flex-1 max-w-sm transition-all duration-500 transform ${
          showWaitlist 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        } hidden md:block`}>
          <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-[#0a0a0a] border border-white/8 hover:border-white/15 p-1 rounded-lg transition-all">
            <input
              type="email"
              placeholder="you@company.dev"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent text-sm text-white px-3 py-1.5 focus:outline-none w-full font-mono placeholder:text-[#444]"
              required
              disabled={submitted}
            />
            <button 
              type="submit" 
              className={`text-xs px-4 py-1.5 rounded font-bold font-mono transition-all whitespace-nowrap ${
                submitted 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-[#00E5A3] text-black hover:bg-[#00c58a] active:scale-95'
              }`}
            >
              {submitted ? 'Joined' : 'Get Access'}
            </button>
          </form>
        </div>

        {/* Early Access Status */}
        <div>
          <span className="nav-pill select-none">
            V1.0.4 Early Access
          </span>
        </div>
      </div>
    </header>
  );
}
