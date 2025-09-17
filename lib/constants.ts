export const SUBSCRIPTION_TIERS = {
  free: {
    name: 'Free',
    price: 0,
    features: [
      'Limited signals (5/day)',
      'Basic market data',
      'Community access',
    ],
    signalLimit: 5,
    aiQueriesLimit: 3,
  },
  trader: {
    name: 'Trader',
    price: 19,
    features: [
      'Unlimited signals',
      'AI analysis',
      'Community insights',
      'Real-time alerts',
    ],
    signalLimit: -1, // unlimited
    aiQueriesLimit: 50,
  },
  pro: {
    name: 'Pro',
    price: 49,
    features: [
      'Everything in Trader',
      'Priority support',
      'Advanced AI features',
      'Expert insights',
      'Custom alerts',
    ],
    signalLimit: -1, // unlimited
    aiQueriesLimit: -1, // unlimited
  },
} as const;

export const SUPPORTED_ASSETS = [
  'BTC', 'ETH', 'SOL', 'AVAX', 'MATIC', 'DOT', 'LINK', 'UNI', 'AAVE', 'COMP'
] as const;

export const TIMEFRAMES = [
  { label: '1H', value: '1h' },
  { label: '4H', value: '4h' },
  { label: '1D', value: '1d' },
  { label: '1W', value: '1w' },
  { label: '1M', value: '1m' },
] as const;

export const SIGNAL_TYPES = [
  { label: 'All', value: 'all' },
  { label: 'Buy', value: 'buy' },
  { label: 'Sell', value: 'sell' },
  { label: 'Hold', value: 'hold' },
] as const;

export const API_ENDPOINTS = {
  COINGECKO_PRICE: 'https://api.coingecko.com/api/v3/simple/price',
  COINGECKO_MARKETS: 'https://api.coingecko.com/api/v3/coins/markets',
  OPENAI_CHAT: 'https://openrouter.ai/api/v1/chat/completions',
} as const;

export const MOCK_USER = {
  userId: 'user-1',
  username: 'TraderPro',
  walletAddress: '0x1234...5678',
  subscriptionTier: 'trader' as const,
  createdAt: new Date(),
  avatar: '🎯',
};
