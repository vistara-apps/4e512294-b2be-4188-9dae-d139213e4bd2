'use client'

import { useState } from 'react'
import { Filter, Search } from 'lucide-react'
import SignalCard from './SignalCard'

export default function Signals() {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock signals data
  const signals = [
    {
      id: 1,
      asset: 'BTC/USDT',
      type: 'BUY',
      price: 43250.00,
      confidence: 85,
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: 2,
      asset: 'ETH/USDT',
      type: 'SELL',
      price: 2650.00,
      confidence: 72,
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
    },
    {
      id: 3,
      asset: 'SOL/USDT',
      type: 'BUY',
      price: 98.50,
      confidence: 91,
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
    },
    {
      id: 4,
      asset: 'ADA/USDT',
      type: 'BUY',
      price: 0.45,
      confidence: 78,
      timestamp: new Date(Date.now() - 1000 * 60 * 90),
    },
    {
      id: 5,
      asset: 'DOT/USDT',
      type: 'SELL',
      price: 6.85,
      confidence: 65,
      timestamp: new Date(Date.now() - 1000 * 60 * 120),
    },
  ]

  const filteredSignals = signals.filter(signal => {
    const matchesFilter = filter === 'all' ||
      (filter === 'buy' && signal.type === 'BUY') ||
      (filter === 'sell' && signal.type === 'SELL')

    const matchesSearch = searchTerm === '' ||
      signal.asset.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Live Market Signals</h1>
        <p className="text-text-secondary">
          Real-time alerts for high-probability trading opportunities
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary text-text-primary'
                : 'bg-surface text-text-secondary hover:bg-surface/80'
            }`}
          >
            All Signals
          </button>
          <button
            onClick={() => setFilter('buy')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === 'buy'
                ? 'bg-success text-text-primary'
                : 'bg-surface text-text-secondary hover:bg-surface/80'
            }`}
          >
            Buy Signals
          </button>
          <button
            onClick={() => setFilter('sell')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === 'sell'
                ? 'bg-danger text-text-primary'
                : 'bg-surface text-text-secondary hover:bg-surface/80'
            }`}
          >
            Sell Signals
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Search assets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10 w-64"
          />
        </div>
      </div>

      {/* Signals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSignals.map((signal) => (
          <SignalCard key={signal.id} signal={signal} />
        ))}
      </div>

      {filteredSignals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary">No signals found matching your criteria.</p>
        </div>
      )}

      {/* Signal Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="card text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-2">Today's Signals</h3>
          <p className="text-3xl font-bold text-accent">24</p>
          <p className="text-sm text-text-secondary">+12% from yesterday</p>
        </div>
        <div className="card text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-2">Success Rate</h3>
          <p className="text-3xl font-bold text-success">76%</p>
          <p className="text-sm text-text-secondary">Based on last 30 days</p>
        </div>
        <div className="card text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-2">Avg Confidence</h3>
          <p className="text-3xl font-bold text-primary">82%</p>
          <p className="text-sm text-text-secondary">Across all signals</p>
        </div>
      </div>
    </div>
  )
}

