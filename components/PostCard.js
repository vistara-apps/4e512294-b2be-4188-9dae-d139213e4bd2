'use client'

import { Heart, MessageCircle, Share, Shield } from 'lucide-react'

export default function PostCard({ post }) {
  const timeAgo = Math.floor((Date.now() - post.timestamp) / (1000 * 60))

  return (
    <div className="card hover:shadow-modal transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-text-primary">
              {post.user.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-medium text-text-primary">{post.user}</span>
              {post.verified && (
                <Shield className="w-4 h-4 text-accent" />
              )}
            </div>
            <span className="text-xs text-text-secondary">{timeAgo}m ago</span>
          </div>
        </div>
      </div>

      <p className="text-text-primary mb-4 leading-relaxed">
        {post.content}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-surface">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-text-secondary hover:text-success transition-colors">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{post.likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">{post.comments}</span>
          </button>
        </div>
        <button className="text-text-secondary hover:text-primary transition-colors">
          <Share className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

