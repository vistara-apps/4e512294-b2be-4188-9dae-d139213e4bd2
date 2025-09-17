'use client';

import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface PrimaryCTAButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export function PrimaryCTAButton({
  children,
  variant = 'filled',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  className,
  icon,
}: PrimaryCTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    filled: 'bg-primary text-white hover:bg-blue-600 active:bg-blue-700',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md gap-1.5',
    md: 'px-4 py-2 text-base rounded-md gap-2',
    lg: 'px-6 py-3 text-lg rounded-lg gap-2.5',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : icon ? (
        icon
      ) : null}
      {children}
    </button>
  );
}
