import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mintry Fabric — FinOps TLS Sidecar Proxy",
  description: "Mintry Fabric is a transparent, zero-touch Man-in-the-Middle (MITM) proxy for FinTech microservices. It intercepts, encrypts, and caches expensive third-party financial API calls (e.g., Credit Bureaus, KYC, AML checks) at the network layer with zero code changes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {/* Background Grid backdrop */}
        <div className="grid-bg" />
        
        {/* Outer glowing border wrapper */}
        <div className="outer-glow" />
        
        {/* Render child pages */}
        {children}
      </body>
    </html>
  );
}
