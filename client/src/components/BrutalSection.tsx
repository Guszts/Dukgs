import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BrutalSectionProps {
  children: ReactNode;
  variant?: 'default' | 'black' | 'yellow' | 'gray';
  className?: string;
  id?: string;
}

export function BrutalSection({
  children,
  variant = 'default',
  className,
  id,
}: BrutalSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section',
        {
          'section--black': variant === 'black',
          'section--yellow': variant === 'yellow',
          'section--gray': variant === 'gray',
        },
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}
