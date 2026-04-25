import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, suffix, ...props }, ref) => {
    if (icon || suffix) {
      return (
        <div className="relative flex items-center">
          {icon && (
            <span className="absolute left-3 text-muted-foreground pointer-events-none">{icon}</span>
          )}
          <input
            ref={ref}
            className={cn(
              'flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm',
              'placeholder:text-muted-foreground text-foreground',
              'focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent',
              'disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
              icon && 'pl-10',
              suffix && 'pr-10',
              className
            )}
            {...props}
          />
          {suffix && (
            <span className="absolute right-3 text-muted-foreground">{suffix}</span>
          )}
        </div>
      );
    }

    return (
      <input
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm',
          'placeholder:text-muted-foreground text-foreground',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent',
          'disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
export { Input };
