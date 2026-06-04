'use client';

import React, { useState, useEffect } from 'react';
import WaitlistForm from './WaitlistForm';

export default function Header() {
  const [showWaitlist, setShowWaitlist] = useState(false);

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
          <WaitlistForm inputId="header-waitlist" placeholder="you@company.dev" />
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
