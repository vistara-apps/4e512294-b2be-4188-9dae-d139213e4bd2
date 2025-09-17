'use client'

import { useState } from 'react'
import { TrendingUp, Brain, Users, Bell, Settings, User } from 'lucide-react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Dashboard from '../components/Dashboard'
import Signals from '../components/Signals'
import AIAnalysis from '../components/AIAnalysis'
import Community from '../components/Community'

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'signals', label: 'Signals', icon: Bell },
    { id: 'ai', label: 'AI Analysis', icon: Brain },
    { id: 'community', label: 'Community', icon: Users },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'signals':
        return <Signals />
      case 'ai':
        return <AIAnalysis />
      case 'community':
        return <Community />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-surface">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-accent">SignalSage</h1>
              <span className="ml-2 text-sm text-text-secondary">Trading Intelligence Platform</span>
            </div>
            <div className="flex items-center space-x-4">
              <ConnectButton />
              <button className="p-2 rounded-md hover:bg-surface transition-colors">
                <Settings className="w-5 h-5 text-text-secondary" />
              </button>
              <button className="p-2 rounded-md hover:bg-surface transition-colors">
                <User className="w-5 h-5 text-text-secondary" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-surface">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-accent text-accent'
                      : 'border-transparent text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  )
}

