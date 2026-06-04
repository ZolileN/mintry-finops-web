'use client';

import React from 'react';
import { AptabaseProvider } from "@aptabase/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const appKey = process.env.NEXT_PUBLIC_APTABASE_KEY || "";
  return (
    <AptabaseProvider appKey={appKey}>
      {children}
    </AptabaseProvider>
  );
}
