'use client';

import { TrendingUp, TrendingDown, Minus, Clock, Target, Shield } from 'lucide-react';
import { Signal } from '@/lib/types';
import { cn, formatPrice, formatTimeAgo, getConfidenceColor, getSignalTypeColor } from '@/lib/utils';

interface SignalCardProps {
  signal: Signal;
  variant?: 'active' | 'historical';
}

export function SignalCard({ signal, variant = 'active' }: SignalCardProps) {
  const getSignalIcon = (type: string) => {
    switch (type) {
      case 'buy':
        return <TrendingUp className="h-4 w-4" />;
      case 'sell':
        return <TrendingDown className="h-4 w-4" />;
      case 'hold':
        return <Minus className="h-4 w-4" />;
      default:
        return <TrendingUp className="h-4 w-4" />;
    }
  };

  const isHistorical = variant === 'historical';

  return (
    <div className={cn(
      'card p-4 transition-all duration-200 hover:shadow-lg',
      isHistorical && 'opacity-75'
    )}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={cn(
            'p-2 rounded-md',
            signal.type === 'buy' && 'bg-success/20 text-success',
            signal.type === 'sell' && 'bg-danger/20 text-danger',
            signal.type === 'hold' && 'bg-warning/20 text-warning'
          )}>
            {getSignalIcon(signal.type)}
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">{signal.asset}</h3>
            <p className="text-sm text-text-secondary capitalize">{signal.type} Signal</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-text-primary">{formatPrice(signal.price)}</p>
          <div className="flex items-center gap-1 text-sm">
            <div className={cn(
              'w-2 h-2 rounded-full',
              getConfidenceColor(signal.confidenceScore).replace('text-', 'bg-')
            )} />
            <span className={getConfidenceColor(signal.confidenceScore)}>
              {signal.confidenceScore}%
            </span>
          </div>
        </div>
      </div>

      {signal.description && (
        <p className="text-sm text-text-secondary mb-3">{signal.description}</p>
      )}

      <div className="flex items-center justify-between text-sm text-text-secondary">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{formatTimeAgo(signal.timestamp)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="h-3 w-3" />
            <span>{signal.source}</span>
          </div>
        </div>
        
        {signal.targetPrice && (
          <div className="flex items-center gap-1">
            <Target className="h-3 w-3" />
            <span>{formatPrice(signal.targetPrice)}</span>
          </div>
        )}
      </div>

      {!isHistorical && (
        <div className="mt-3 pt-3 border-t border-gray-700">
          <div className="flex gap-2">
            <button className="btn-primary flex-1 text-sm py-1">
              Follow Signal
            </button>
            <button className="btn-outline flex-1 text-sm py-1">
              View Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
