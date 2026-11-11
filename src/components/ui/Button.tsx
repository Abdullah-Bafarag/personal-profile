import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer';

    const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
      default:
        'bg-primary text-white hover:bg-primary-hover shadow-sm transition-all duration-200 active:scale-[0.98]',
      secondary:
        'bg-secondary text-secondary-foreground hover:bg-muted border border-border transition-all duration-200',
      outline:
        'border border-border bg-transparent hover:bg-muted text-foreground transition-all duration-200',
      ghost:
        'hover:bg-muted text-foreground hover:text-foreground transition-all duration-200',
      link: 'text-primary underline-offset-4 hover:underline p-0 h-auto',
    };

    const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
      sm: 'h-8 px-3 text-xs gap-1.5',
      md: 'h-10 px-4 text-sm gap-2',
      lg: 'h-12 px-6 text-base gap-2.5',
      icon: 'h-10 w-10 p-0',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

