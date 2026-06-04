import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';
import Comparison from '@/components/Comparison';
import LogicFabric from '@/components/LogicFabric';
import CodeProof from '@/components/CodeProof';
import Languages from '@/components/Languages';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <Header />
      
      {/* Page Body Main Wrap */}
      <main className="w-full min-h-screen pt-16 flex flex-col relative z-10 overflow-hidden bg-[#050505] text-white">
        {/* Hero Section */}
        <Hero />
        
        {/* Interactive Terminal log-stream simulator */}
        <Terminal />
        
        {/* Problem comparison matrix section */}
        <Comparison />
        
        {/* Feature Grid / Logic Fabric list */}
        <LogicFabric />
        
        {/* Developer implementation code-proof snippet */}
        <CodeProof />
        
        {/* Support badges for multiple languages */}
        <Languages />
        
        {/* Stats and Email Registration Footer */}
        <Footer />
      </main>
    </>
  );
}
