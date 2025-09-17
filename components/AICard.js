'use client'

import { Brain, TrendingUp, AlertTriangle } from 'lucide-react'

export default function AICard() {
  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/20">
          <Brain className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-text-primary">Market Analysis</h3>
          <p className="text-sm text-text-secondary">AI-Powered Insights</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-surface rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-text-primary">BTC/USDT Analysis</span>
          </div>
          <p className="text-sm text-text-secondary mb-3">
            Strong bullish momentum detected. RSI indicates oversold conditions with potential for 15-20% upside movement.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-secondary">Confidence: 87%</span>
            <span className="text-xs text-success">Bullish</span>
          </div>
        </div>

        <div className="p-4 bg-surface rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-warning" />
            <span className="text-sm font-medium text-text-primary">ETH/USDT Alert</span>
          </div>
          <p className="text-sm text-text-secondary mb-3">
            Resistance at $2800 showing signs of weakness. Consider reducing long positions above current levels.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-secondary">Confidence: 73%</span>
            <span className="text-xs text-warning">Neutral</span>
          </div>
        </div>

        <button className="w-full btn-primary">
          Ask AI Analysis
        </button>
      </div>
    </div>
  )
}

