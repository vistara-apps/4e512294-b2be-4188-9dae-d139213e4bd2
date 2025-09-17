export interface User {
  userId: string;
  username: string;
  walletAddress?: string;
  subscriptionTier: 'free' | 'trader' | 'pro';
  createdAt: Date;
  avatar?: string;
}

export interface Signal {
  signalId: string;
  timestamp: Date;
  asset: string;
  type: 'buy' | 'sell' | 'hold';
  price: number;
  confidenceScore: number;
  source: string;
  description?: string;
  targetPrice?: number;
  stopLoss?: number;
}

export interface Analysis {
  analysisId: string;
  userId: string;
  timestamp: Date;
  asset: string;
  prediction: string;
  confidence: number;
  explanation: string;
  timeframe: '1h' | '4h' | '1d' | '1w' | '1m';
}

export interface Post {
  postId: string;
  userId: string;
  username: string;
  avatar?: string;
  timestamp: Date;
  content: string;
  likes: number;
  comments: number;
  isVerified?: boolean;
  tags?: string[];
}

export interface Verification {
  verificationId: string;
  userId: string;
  traderUserId: string;
  status: 'pending' | 'verified' | 'rejected';
  timestamp: Date;
}

export interface MarketData {
  symbol: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  lastUpdated: Date;
}

export interface AIQuery {
  query: string;
  response: string;
  timestamp: Date;
  confidence: number;
}

export interface SubscriptionTier {
  name: 'free' | 'trader' | 'pro';
  price: number;
  features: string[];
  signalLimit?: number;
  aiQueriesLimit?: number;
}
