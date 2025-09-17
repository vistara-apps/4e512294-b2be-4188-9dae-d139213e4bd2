'use client';

import { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { Dashboard } from '@/components/Dashboard';

export default function Home() {
  const [activeTab, setActiveTab] = useState('signals');

  return (
    <AppShell>
      <Dashboard activeTab={activeTab} />
    </AppShell>
  );
}
