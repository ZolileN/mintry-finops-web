'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAptabase } from "@aptabase/react";

interface WaitlistFormProps {
  inputId: string;
  placeholder?: string;
  microText?: string;
}

export default function WaitlistForm({ inputId, placeholder = "you@company.dev", microText }: WaitlistFormProps) {
  const { trackEvent } = useAptabase();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleJoinWaitlist = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('A valid email is required.');
      trackEvent("waitlist_validation_failed", { inputId });
      return;
    }

    setStatus('loading');
    trackEvent("waitlist_submission_started", { inputId });

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
        trackEvent("waitlist_submission_success", { inputId });
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
        trackEvent("waitlist_submission_failed", { inputId, error: data.error });
      }
    } catch (err) {
      setStatus('error');
      setMessage('Failed to connect to the server.');
      trackEvent("waitlist_submission_error", { inputId, error: "network_failure" });
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleJoinWaitlist} className="email-form">
        <input
          type="email"
          id={inputId}
          className="email-input"
          placeholder={status === 'success' ? 'Check your inbox for the guide' : placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading' || status === 'success'}
          style={status === 'error' ? { borderColor: 'rgba(255,95,86,0.5)', boxShadow: '0 0 0 3px rgba(255,95,86,0.07)' } : {}}
        />
        <button
          type="submit"
          className="cta-btn"
          disabled={status === 'loading' || status === 'success'}
          style={status === 'success' ? { background: '#00d67a', color: '#030d07' } : {}}
        >
          {status === 'loading' ? 'Joining...' : status === 'success' ? "✓ You're on the list!" : 'Get Early Access'}
        </button>
      </form>
      
      {(status === 'error' || status === 'success') && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-[11px] mt-2 font-mono ${status === 'error' ? 'text-red-500' : 'text-mint'}`}
          style={{ color: status === 'error' ? '#FF5F56' : 'var(--mint)' }}
        >
          {message}
        </motion.p>
      )}

      {microText && status === 'idle' && (
        <p className="hero-micro mt-4">{microText}</p>
      )}
    </div>
  );
}
