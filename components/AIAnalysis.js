'use client'

import { useState } from 'react'
import { Send, Brain, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react'

export default function AIAnalysis() {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [analysis, setAnalysis] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)

    // Mock AI response - in production, this would call an actual AI API
    setTimeout(() => {
      setAnalysis({
        query: query,
        response: `Based on current market data and technical analysis, ${query.toLowerCase().includes('btc') ? 'Bitcoin' : 'the asset'} shows strong momentum with key support levels at current price points. The RSI indicates room for upward movement, while volume analysis suggests increasing institutional interest.`,
        confidence: 87,
        sentiment: 'bullish',
        timestamp: new Date(),
      })
      setIsLoading(false)
      setQuery('')
    }, 2000)
  }

  const quickQueries = [
    "What's the outlook for BTC in the next week?",
    "Analyze ETH price action",
    "Should I buy SOL now?",
    "Market sentiment analysis",
    "Technical analysis for ADA",
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-text-primary mb-2">AI Market Analysis</h1>
        <p className="text-text-secondary">
          Leverage AI models to predict market trends and get data-driven insights
        </p>
      </div>

      {/* AI Chat Interface */}
      <div className="max-w-4xl mx-auto">
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/20">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-text-primary">AI Trading Assistant</h2>
              <p className="text-sm text-text-secondary">Ask me anything about market analysis</p>
            </div>
          </div>

          {/* Quick Query Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {quickQueries.map((quickQuery, index) => (
              <button
                key={index}
                onClick={() => setQuery(quickQuery)}
                className="p-3 text-left bg-surface rounded-lg hover:bg-surface/80 transition-colors text-sm text-text-secondary hover:text-text-primary"
              >
                {quickQuery}
              </button>
            ))}
          </div>

          {/* Query Input */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about market trends, technical analysis, or specific assets..."
                className="input w-full h-24 resize-none pr-12"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="absolute right-3 top-3 p-2 bg-primary rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 text-text-primary" />
              </button>
            </div>
          </form>

          {/* Analysis Result */}
          {isLoading && (
            <div className="mt-6 p-4 bg-surface rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                <span className="text-text-secondary">Analyzing market data...</span>
              </div>
            </div>
          )}

          {analysis && !isLoading && (
            <div className="mt-6 p-4 bg-surface rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                {analysis.sentiment === 'bullish' ? (
                  <TrendingUp className="w-5 h-5 text-success" />
                ) : analysis.sentiment === 'bearish' ? (
                  <TrendingDown className="w-5 h-5 text-danger" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-warning" />
                )}
                <span className="font-medium text-text-primary">AI Analysis</span>
                <span className={`text-sm px-2 py-1 rounded ${
                  analysis.sentiment === 'bullish' ? 'bg-success/20 text-success' :
                  analysis.sentiment === 'bearish' ? 'bg-danger/20 text-danger' :
                  'bg-warning/20 text-warning'
                }`}>
                  {analysis.sentiment.toUpperCase()}
                </span>
              </div>

              <p className="text-text-primary mb-3 leading-relaxed">
                {analysis.response}
              </p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">
                  Confidence: {analysis.confidence}%
                </span>
                <span className="text-text-secondary">
                  {analysis.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="card text-center">
            <h3 className="text-lg font-semibold text-text-primary mb-2">Market Sentiment</h3>
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5 text-success" />
              <span className="text-xl font-bold text-success">Bullish</span>
            </div>
            <p className="text-sm text-text-secondary mt-2">Overall market mood</p>
          </div>

          <div className="card text-center">
            <h3 className="text-lg font-semibold text-text-primary mb-2">Risk Level</h3>
            <div className="flex items-center justify-center space-x-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              <span className="text-xl font-bold text-warning">Moderate</span>
            </div>
            <p className="text-sm text-text-secondary mt-2">Current market risk</p>
          </div>

          <div className="card text-center">
            <h3 className="text-lg font-semibold text-text-primary mb-2">AI Confidence</h3>
            <span className="text-2xl font-bold text-primary">84%</span>
            <p className="text-sm text-text-secondary mt-2">Average prediction accuracy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

