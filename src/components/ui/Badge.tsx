import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'accent';
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
      default:
        'border-transparent bg-primary/10 text-primary hover:bg-primary/20 font-medium',
      secondary:
        'border-transparent bg-secondary text-secondary-foreground hover:bg-muted font-normal',
      outline:
        'border-border text-foreground font-normal',
      accent:
        'border-transparent bg-primary text-white font-medium',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          variants[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Badge.displayName = 'Badge';

