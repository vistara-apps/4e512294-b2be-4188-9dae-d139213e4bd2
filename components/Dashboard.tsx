'use client';

import { useState, useEffect } from 'react';
import { SignalCard } from './SignalCard';
import { AIChatInterface } from './AIChatInterface';
import { PostCard } from './PostCard';
import { PrimaryCTAButton } from './PrimaryCTAButton';
import { NotificationBadge } from './NotificationBadge';
import { 
  Filter, 
  Search, 
  Plus, 
  TrendingUp, 
  Users, 
  Brain,
  Zap,
  Star,
  Crown
} from 'lucide-react';
import { generateMockSignals, generateMockPosts } from '@/lib/utils';
import { SUBSCRIPTION_TIERS } from '@/lib/constants';

interface DashboardProps {
  activeTab: string;
}

export function Dashboard({ activeTab }: DashboardProps) {
  const [signals, setSignals] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setSignals(generateMockSignals());
      setPosts(generateMockPosts());
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card p-4 animate-pulse">
              <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-700 rounded w-1/2 mb-4"></div>
              <div className="h-8 bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const renderSignals = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-md">
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-text-secondary">Active Signals</p>
              <p className="text-xl font-bold text-text-primary">24</p>
            </div>
          </div>
        </div>
        
        <div className="card p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-md">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-text-secondary">Success Rate</p>
              <p className="text-xl font-bold text-text-primary">78%</p>
            </div>
          </div>
        </div>
        
        <div className="card p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-md">
              <Star className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-text-secondary">Avg Confidence</p>
              <p className="text-xl font-bold text-text-primary">82%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
            <input
              type="text"
              placeholder="Search signals..."
              className="input pl-10 w-64"
            />
          </div>
          <button className="btn-outline flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
        <PrimaryCTAButton icon={<Plus className="h-4 w-4" />}>
          Create Alert
        </PrimaryCTAButton>
      </div>

      {/* Signals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {signals.map((signal) => (
          <SignalCard key={signal.signalId} signal={signal} />
        ))}
      </div>
    </div>
  );

  const renderAI = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AIChatInterface variant="withSuggestions" />
        </div>
        <div className="space-y-4">
          <div className="card p-4">
            <h3 className="font-semibold text-text-primary mb-3">Recent Analysis</h3>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="p-3 bg-gray-700 rounded-md">
                  <p className="text-sm text-text-primary font-medium">BTC Analysis</p>
                  <p className="text-xs text-text-secondary mt-1">
                    Strong support at $40k level...
                  </p>
                  <p className="text-xs text-accent mt-2">2h ago</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="card p-4">
            <h3 className="font-semibold text-text-primary mb-3">AI Insights</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-text-secondary">Market sentiment: Bullish</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span className="text-text-secondary">Volatility: Moderate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-text-secondary">Trend: Upward</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCommunity = () => (
    <div className="space-y-6">
      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-md">
              <Users className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-text-secondary">Active Traders</p>
              <p className="text-xl font-bold text-text-primary">1,247</p>
            </div>
          </div>
        </div>
        
        <div className="card p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/20 rounded-md">
              <Crown className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-text-secondary">Verified Experts</p>
              <p className="text-xl font-bold text-text-primary">23</p>
            </div>
          </div>
        </div>
      </div>

      {/* Create Post */}
      <div className="card p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            🎯
          </div>
          <div className="flex-1">
            <textarea
              placeholder="Share your market insights with the community..."
              className="input w-full h-20 resize-none"
            />
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span>Add tags:</span>
                <button className="text-primary hover:underline">#BTC</button>
                <button className="text-primary hover:underline">#ETH</button>
                <button className="text-primary hover:underline">#Analysis</button>
              </div>
              <PrimaryCTAButton size="sm">Post</PrimaryCTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.postId} post={post} />
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      {/* Subscription */}
      <div className="card p-6">
        <h3 className="h2 mb-4">Subscription Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(SUBSCRIPTION_TIERS).map(([key, tier]) => (
            <div
              key={key}
              className={`p-4 rounded-lg border-2 transition-colors duration-200 ${
                key === 'trader' 
                  ? 'border-primary bg-primary/10' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <div className="text-center">
                <h4 className="font-semibold text-text-primary">{tier.name}</h4>
                <p className="text-2xl font-bold text-text-primary mt-2">
                  ${tier.price}
                  <span className="text-sm text-text-secondary">/mo</span>
                </p>
                <ul className="text-sm text-text-secondary mt-4 space-y-2">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <PrimaryCTAButton 
                  className="w-full mt-4"
                  variant={key === 'trader' ? 'filled' : 'outline'}
                >
                  {key === 'trader' ? 'Current Plan' : 'Upgrade'}
                </PrimaryCTAButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preferences */}
      <div className="card p-6">
        <h3 className="h2 mb-4">Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Email Notifications</p>
              <p className="text-sm text-text-secondary">Receive signal alerts via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Push Notifications</p>
              <p className="text-sm text-text-secondary">Get instant alerts on your device</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  switch (activeTab) {
    case 'signals':
      return renderSignals();
    case 'ai insights':
      return renderAI();
    case 'community':
      return renderCommunity();
    case 'settings':
      return renderSettings();
    default:
      return renderSignals();
  }
}
