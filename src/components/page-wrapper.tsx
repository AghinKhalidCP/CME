
'use client';

import React, { type ReactNode } from 'react';

export function PageWrapper({ children }: { children: ReactNode }) {
  return <div className="animate-page-load">{children}</div>;
}
