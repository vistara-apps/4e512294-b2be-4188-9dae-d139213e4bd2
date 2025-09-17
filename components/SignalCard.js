'use client'

import { TrendingUp, TrendingDown, Clock } from 'lucide-react'

export default function SignalCard({ signal }) {
  const isBuy = signal.type === 'BUY'
  const timeAgo = Math.floor((Date.now() - signal.timestamp) / (1000 * 60))

  return (
    <div className="card hover:shadow-modal transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${isBuy ? 'bg-success/20' : 'bg-danger/20'}`}>
            {isBuy ? (
              <TrendingUp className="w-5 h-5 text-success" />
            ) : (
              <TrendingDown className="w-5 h-5 text-danger" />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">{signal.asset}</h3>
            <p className={`text-sm font-medium ${isBuy ? 'text-success' : 'text-danger'}`}>
              {signal.type} Signal
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-text-primary">${signal.price.toLocaleString()}</p>
          <div className="flex items-center space-x-1 text-text-secondary">
            <Clock className="w-3 h-3" />
            <span className="text-xs">{timeAgo}m ago</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm text-text-secondary">Confidence:</span>
            <div className="flex-1 bg-surface rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  signal.confidence >= 80 ? 'bg-success' :
                  signal.confidence >= 60 ? 'bg-warning' : 'bg-danger'
                }`}
                style={{ width: `${signal.confidence}%` }}
              />
            </div>
            <span className="text-sm font-medium text-text-primary">{signal.confidence}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

