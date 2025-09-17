'use client';

import { Heart, MessageCircle, Share, MoreHorizontal, CheckCircle } from 'lucide-react';
import { Post } from '@/lib/types';
import { formatTimeAgo, cn } from '@/lib/utils';
import { useState } from 'react';

interface PostCardProps {
  post: Post;
  variant?: 'user' | 'expert';
}

export function PostCard({ post, variant = 'user' }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const isExpert = variant === 'expert' || post.isVerified;

  return (
    <div className={cn(
      'card p-4 transition-all duration-200 hover:shadow-lg',
      isExpert && 'border-accent/50'
    )}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-lg">
            {post.avatar || '👤'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-text-primary">{post.username}</h4>
              {isExpert && (
                <CheckCircle className="h-4 w-4 text-accent" />
              )}
            </div>
            <p className="text-sm text-text-secondary">
              {formatTimeAgo(post.timestamp)}
            </p>
          </div>
        </div>
        <button className="p-1 text-text-secondary hover:text-text-primary">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-text-primary leading-relaxed">{post.content}</p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-700">
        <div className="flex items-center gap-6">
          <button
            onClick={handleLike}
            className={cn(
              'flex items-center gap-2 text-sm transition-colors duration-200',
              liked ? 'text-danger' : 'text-text-secondary hover:text-danger'
            )}
          >
            <Heart className={cn('h-4 w-4', liked && 'fill-current')} />
            <span>{likeCount}</span>
          </button>
          
          <button className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors duration-200">
            <MessageCircle className="h-4 w-4" />
            <span>{post.comments}</span>
          </button>
          
          <button className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-200">
            <Share className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>

        {isExpert && (
          <div className="flex items-center gap-1 text-xs text-accent">
            <CheckCircle className="h-3 w-3" />
            <span>Verified Trader</span>
          </div>
        )}
      </div>
    </div>
  );
}
