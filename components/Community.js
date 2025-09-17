'use client'

import { useState } from 'react'
import { Plus, Search, Filter } from 'lucide-react'
import PostCard from './PostCard'

export default function Community() {
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [newPost, setNewPost] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock posts data
  const posts = [
    {
      id: 1,
      user: 'CryptoWhale',
      content: 'Just analyzed the BTC chart - strong bullish divergence forming. Expecting breakout above $45k resistance. The RSI is showing oversold conditions and volume is picking up significantly.',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      likes: 42,
      comments: 8,
      verified: true,
    },
    {
      id: 2,
      user: 'DeFiTrader',
      content: 'ETH showing accumulation patterns. Institutional money flowing in. Watch for $2800 target. The on-chain metrics are very positive.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      likes: 28,
      comments: 12,
      verified: false,
    },
    {
      id: 3,
      user: 'AltcoinHunter',
      content: 'SOL breaking out of its consolidation pattern. Next target $120. The network activity is increasing and developer activity is strong.',
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
      likes: 35,
      comments: 15,
      verified: true,
    },
    {
      id: 4,
      user: 'TechnicalAnalyst',
      content: 'ADA forming a beautiful cup and handle pattern. Break above $0.50 would be very bullish. Support holding at $0.42.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      likes: 19,
      comments: 6,
      verified: false,
    },
    {
      id: 5,
      user: 'MarketWatcher',
      content: 'Market analysis: BTC dominance decreasing while alts are gaining strength. This is typically a sign of alt season approaching.',
      timestamp: new Date(Date.now() - 1000 * 60 * 90),
      likes: 67,
      comments: 23,
      verified: true,
    },
  ]

  const filteredPosts = posts.filter(post =>
    searchTerm === '' ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.user.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCreatePost = () => {
    if (newPost.trim()) {
      // In production, this would send to API
      console.log('Creating post:', newPost)
      setNewPost('')
      setShowCreatePost(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Community Insights</h1>
        <p className="text-text-secondary">
          Learn from and collaborate with a community of like-minded traders
        </p>
      </div>

      {/* Search and Create Post */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10 w-full"
          />
        </div>

        <button
          onClick={() => setShowCreatePost(!showCreatePost)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Share Insight</span>
        </button>
      </div>

      {/* Create Post Form */}
      {showCreatePost && (
        <div className="card">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Share Your Analysis</h3>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your market analysis, trade setup, or insights..."
            className="input w-full h-32 resize-none mb-4"
          />
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setShowCreatePost(false)}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              onClick={handleCreatePost}
              disabled={!newPost.trim()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post
            </button>
          </div>
        </div>
      )}

      {/* Posts Feed */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary">No posts found matching your search.</p>
        </div>
      )}

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="card text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-2">Active Traders</h3>
          <p className="text-3xl font-bold text-accent">1,247</p>
          <p className="text-sm text-text-secondary">Online now</p>
        </div>
        <div className="card text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-2">Verified Experts</h3>
          <p className="text-3xl font-bold text-primary">89</p>
          <p className="text-sm text-text-secondary">Trusted analysts</p>
        </div>
        <div className="card text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-2">Posts Today</h3>
          <p className="text-3xl font-bold text-success">156</p>
          <p className="text-sm text-text-secondary">+23% from yesterday</p>
        </div>
        <div className="card text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-2">Avg Engagement</h3>
          <p className="text-3xl font-bold text-warning">4.2</p>
          <p className="text-sm text-text-secondary">Likes per post</p>
        </div>
      </div>
    </div>
  )
}

