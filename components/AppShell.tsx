'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  Brain, 
  Users, 
  Settings, 
  Menu, 
  X,
  Bell,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppShellProps {
  children: React.ReactNode;
  variant?: 'default' | 'minimal';
}

const navigation = [
  { name: 'Signals', href: '#signals', icon: TrendingUp, current: true },
  { name: 'AI Insights', href: '#ai', icon: Brain, current: false },
  { name: 'Community', href: '#community', icon: Users, current: false },
  { name: 'Settings', href: '#settings', icon: Settings, current: false },
];

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('signals');

  if (variant === 'minimal') {
    return (
      <div className="min-h-screen bg-bg">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Mobile sidebar */}
      <div className={cn(
        'fixed inset-0 z-50 lg:hidden',
        sidebarOpen ? 'block' : 'hidden'
      )}>
        <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
        <div className="fixed left-0 top-0 h-full w-64 bg-surface border-r border-gray-700">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h1 className="text-xl font-bold text-gradient">SignalSage</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 text-text-secondary hover:text-text-primary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="p-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveTab(item.name.toLowerCase());
                  setSidebarOpen(false);
                }}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors duration-200',
                  activeTab === item.name.toLowerCase()
                    ? 'bg-primary text-white'
                    : 'text-text-secondary hover:text-text-primary hover:bg-gray-700'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-64 lg:bg-surface lg:border-r lg:border-gray-700">
        <div className="flex items-center justify-center p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-gradient">SignalSage</h1>
        </div>
        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name.toLowerCase())}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors duration-200',
                activeTab === item.name.toLowerCase()
                  ? 'bg-primary text-white'
                  : 'text-text-secondary hover:text-text-primary hover:bg-gray-700'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-sm border-b border-gray-700">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-text-secondary hover:text-text-primary"
              >
                <Menu className="h-5 w-5" />
              </button>
              <h2 className="h1 capitalize">{activeTab}</h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-text-secondary hover:text-text-primary relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-danger rounded-full"></span>
              </button>
              <button className="p-2 text-text-secondary hover:text-text-primary">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
