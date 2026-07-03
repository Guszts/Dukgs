import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BrutalButtonProps {
  children: ReactNode;
  variant?: 'default' | 'yellow' | 'black' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
}

export function BrutalButton({
  children,
  variant = 'default',
  className,
  onClick,
  type = 'button',
  disabled = false,
  href,
}: BrutalButtonProps) {
  const baseClasses = cn(
    'brutalist-btn',
    {
      'brutalist-btn--yellow': variant === 'yellow',
      'brutalist-btn--black': variant === 'black',
      'brutalist-btn--outline': variant === 'outline',
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
