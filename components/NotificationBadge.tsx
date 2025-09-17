'use client';

import { cn } from '@/lib/utils';

interface NotificationBadgeProps {
  count: number;
  max?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function NotificationBadge({ 
  count, 
  max = 99, 
  className,
  size = 'md' 
}: NotificationBadgeProps) {
  if (count <= 0) return null;

  const displayCount = count > max ? `${max}+` : count.toString();
  
  const sizeClasses = {
    sm: 'h-4 w-4 text-xs min-w-4',
    md: 'h-5 w-5 text-xs min-w-5',
    lg: 'h-6 w-6 text-sm min-w-6',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-danger text-white font-medium',
        sizeClasses[size],
        className
      )}
    >
      {displayCount}
    </span>
  );
}
