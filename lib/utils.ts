import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(2)}M`;
  }
  if (price >= 1000) {
    return `$${(price / 1000).toFixed(2)}K`;
  }
  if (price >= 1) {
    return `$${price.toFixed(2)}`;
  }
  return `$${price.toFixed(6)}`;
}

export function formatPercentage(value: number): string {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
}

export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return `${diffInSeconds}s ago`;
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}d ago`;
}

export function getConfidenceColor(confidence: number): string {
  if (confidence >= 80) return 'text-success';
  if (confidence >= 60) return 'text-warning';
  return 'text-danger';
}

export function getSignalTypeColor(type: 'buy' | 'sell' | 'hold'): string {
  switch (type) {
    case 'buy':
      return 'text-success';
    case 'sell':
      return 'text-danger';
    case 'hold':
      return 'text-warning';
    default:
      return 'text-text-secondary';
  }
}

export function truncateAddress(address: string): string {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function generateMockSignals(): any[] {
  const assets = ['BTC', 'ETH', 'SOL', 'AVAX', 'MATIC', 'DOT'];
  const types = ['buy', 'sell', 'hold'] as const;
  
  return Array.from({ length: 10 }, (_, i) => ({
    signalId: `signal-${i + 1}`,
    timestamp: new Date(Date.now() - Math.random() * 3600000),
    asset: assets[Math.floor(Math.random() * assets.length)],
    type: types[Math.floor(Math.random() * types.length)],
    price: Math.random() * 50000 + 1000,
    confidenceScore: Math.floor(Math.random() * 40) + 60,
    source: 'AI Analysis',
    description: 'Technical indicators suggest strong momentum',
  }));
}

export function generateMockPosts(): any[] {
  const users = [
    { username: 'CryptoTrader', avatar: '👨‍💼', verified: true },
    { username: 'BlockchainBull', avatar: '🐂', verified: false },
    { username: 'DeFiDegen', avatar: '🚀', verified: true },
    { username: 'ChartMaster', avatar: '📊', verified: false },
  ];
  
  const contents = [
    'Just spotted a bullish divergence on ETH 4H chart. Could be setting up for a nice bounce! 📈',
    'BTC holding strong above $40k support. Looking for continuation to $45k next. #Bitcoin',
    'Altcoin season might be starting. Keep an eye on SOL and AVAX for potential breakouts 🔥',
    'Market sentiment shifting positive. Volume picking up across major pairs. Time to be ready! ⚡',
  ];
  
  return Array.from({ length: 8 }, (_, i) => {
    const user = users[Math.floor(Math.random() * users.length)];
    return {
      postId: `post-${i + 1}`,
      userId: `user-${i + 1}`,
      username: user.username,
      avatar: user.avatar,
      timestamp: new Date(Date.now() - Math.random() * 86400000),
      content: contents[Math.floor(Math.random() * contents.length)],
      likes: Math.floor(Math.random() * 50) + 5,
      comments: Math.floor(Math.random() * 20) + 1,
      isVerified: user.verified,
    };
  });
}
