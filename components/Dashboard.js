'use client'

import { TrendingUp, TrendingDown, Activity, Users, Brain, Bell } from 'lucide-react'
import SignalCard from './SignalCard'
import AICard from './AICard'
import PostCard from './PostCard'

export default function Dashboard() {
  // Mock data - in production, this would come from APIs
  const stats = [
    { label: 'Active Signals', value: '24', change: '+12%', icon: Bell, positive: true },
    { label: 'AI Predictions', value: '89%', change: '+5%', icon: Brain, positive: true },
    { label: 'Community Posts', value: '1,247', change: '+23%', icon: Users, positive: true },
    { label: 'Success Rate', value: '76%', change: '+8%', icon: Activity, positive: true },
  ]

  const recentSignals = [
    {
      id: 1,
      asset: 'BTC/USDT',
      type: 'BUY',
      price: 43250.00,
      confidence: 85,
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    },
    {
      id: 2,
      asset: 'ETH/USDT',
      type: 'SELL',
      price: 2650.00,
      confidence: 72,
      timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
    },
    {
      id: 3,
      asset: 'SOL/USDT',
      type: 'BUY',
      price: 98.50,
      confidence: 91,
      timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    },
  ]

  const recentPosts = [
    {
      id: 1,
      user: 'CryptoWhale',
      content: 'Just analyzed the BTC chart - strong bullish divergence forming. Expecting breakout above $45k resistance.',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      likes: 42,
      comments: 8,
      verified: true,
    },
    {
      id: 2,
      user: 'DeFiTrader',
      content: 'ETH showing accumulation patterns. Institutional money flowing in. Watch for $2800 target.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      likes: 28,
      comments: 12,
      verified: false,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Welcome to SignalSage
        </h1>
        <p className="text-text-secondary">
          Trade Smarter, Faster, Confidently: Your All-in-One Trading Intelligence Platform
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-secondary text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
                  <p className={`text-sm ${stat.positive ? 'text-success' : 'text-danger'}`}>
                    {stat.change} from last week
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.positive ? 'bg-success/20' : 'bg-danger/20'}`}>
                  <Icon className={`w-6 h-6 ${stat.positive ? 'text-success' : 'text-danger'}`} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Signals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-text-primary mb-4">Recent Signals</h2>
          <div className="space-y-4">
            {recentSignals.map((signal) => (
              <SignalCard key={signal.id} signal={signal} />
            ))}
          </div>
        </div>

        {/* AI Insights */}
        <div>
          <h2 className="text-xl font-semibold text-text-primary mb-4">AI Market Analysis</h2>
          <AICard />
        </div>
      </div>

      {/* Community Feed */}
      <div>
        <h2 className="text-xl font-semibold text-text-primary mb-4">Community Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

