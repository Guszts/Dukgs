import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BrutalCardProps {
  children: ReactNode;
  variant?: 'default' | 'yellow' | 'black';
  className?: string;
  onClick?: () => void;
}

export function BrutalCard({
  children,
  variant = 'default',
  className,
  onClick,
}: BrutalCardProps) {
  return (
    <div
      className={cn(
        'brutalist-card',
        {
          'brutalist-card--yellow': variant === 'yellow',
          'brutalist-card--black': variant === 'black',
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
