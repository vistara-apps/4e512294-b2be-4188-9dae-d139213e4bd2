import axios from 'axios'

// CoinGecko API for market data
const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3'

// OpenAI API for AI analysis (mock implementation)
const OPENAI_BASE_URL = 'https://api.openai.com/v1'

// Mock API key - in production, use environment variables
const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY || 'mock-key'

export const marketAPI = {
  // Get current prices for multiple cryptocurrencies
  async getPrices(coinIds = ['bitcoin', 'ethereum', 'solana']) {
    try {
      const ids = coinIds.join(',')
      const response = await axios.get(`${COINGECKO_BASE_URL}/simple/price`, {
        params: {
          ids,
          vs_currencies: 'usd',
          include_24hr_change: true,
          include_24hr_vol: true,
        },
      })
      return response.data
    } catch (error) {
      console.error('Error fetching prices:', error)
      // Return mock data for development
      return {
        bitcoin: { usd: 43250, usd_24h_change: 2.5, usd_24h_vol: 28500000000 },
        ethereum: { usd: 2650, usd_24h_change: -1.2, usd_24h_vol: 15200000000 },
        solana: { usd: 98.5, usd_24h_change: 5.8, usd_24h_vol: 3200000000 },
      }
    }
  },

  // Get market data for trending coins
  async getTrendingCoins() {
    try {
      const response = await axios.get(`${COINGECKO_BASE_URL}/search/trending`)
      return response.data
    } catch (error) {
      console.error('Error fetching trending coins:', error)
      return { coins: [] }
    }
  },

  // Get detailed coin data
  async getCoinData(coinId) {
    try {
      const response = await axios.get(`${COINGECKO_BASE_URL}/coins/${coinId}`, {
        params: {
          localization: false,
          tickers: false,
          market_data: true,
          community_data: false,
          developer_data: false,
          sparkline: true,
        },
      })
      return response.data
    } catch (error) {
      console.error('Error fetching coin data:', error)
      return null
    }
  },
}

export const aiAPI = {
  // Get AI analysis for a trading query
  async getAnalysis(query) {
    try {
      const response = await axios.post(
        `${OPENAI_BASE_URL}/chat/completions`,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are an expert cryptocurrency trading analyst. Provide concise, actionable analysis based on technical indicators, market sentiment, and current trends. Include confidence levels and risk assessments.',
            },
            {
              role: 'user',
              content: query,
            },
          ],
          max_tokens: 500,
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      )

      const analysis = response.data.choices[0].message.content

      // Extract sentiment and confidence from the response
      const sentiment = analysis.toLowerCase().includes('bullish') ? 'bullish' :
                       analysis.toLowerCase().includes('bearish') ? 'bearish' : 'neutral'
      const confidence = Math.floor(Math.random() * 20) + 75 // Mock confidence 75-95%

      return {
        response: analysis,
        sentiment,
        confidence,
        timestamp: new Date(),
      }
    } catch (error) {
      console.error('Error getting AI analysis:', error)

      // Return mock response for development
      return {
        response: `Based on current market analysis, ${query.toLowerCase().includes('btc') ? 'Bitcoin' : 'the asset'} shows promising technical indicators. The market momentum suggests potential for positive movement, though volatility remains a consideration. Consider monitoring key support and resistance levels.`,
        sentiment: 'bullish',
        confidence: 82,
        timestamp: new Date(),
      }
    }
  },
}

export const signalsAPI = {
  // Get live trading signals
  async getSignals(limit = 20) {
    // In production, this would fetch from a real signals API
    // For now, return mock data
    const mockSignals = [
      {
        id: 1,
        asset: 'BTC/USDT',
        type: 'BUY',
        price: 43250.00,
        confidence: 85,
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        source: 'Technical Analysis',
      },
      {
        id: 2,
        asset: 'ETH/USDT',
        type: 'SELL',
        price: 2650.00,
        confidence: 72,
        timestamp: new Date(Date.now() - 1000 * 60 * 45),
        source: 'AI Prediction',
      },
      {
        id: 3,
        asset: 'SOL/USDT',
        type: 'BUY',
        price: 98.50,
        confidence: 91,
        timestamp: new Date(Date.now() - 1000 * 60 * 60),
        source: 'Volume Analysis',
      },
    ]

    return mockSignals.slice(0, limit)
  },
}

export const communityAPI = {
  // Get community posts
  async getPosts(limit = 20) {
    // In production, this would fetch from a real community API
    // For now, return mock data
    const mockPosts = [
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

    return mockPosts.slice(0, limit)
  },

  // Create a new post
  async createPost(content) {
    // In production, this would send to a real API
    console.log('Creating post:', content)
    return {
      id: Date.now(),
      user: 'CurrentUser',
      content,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      verified: false,
    }
  },
}

