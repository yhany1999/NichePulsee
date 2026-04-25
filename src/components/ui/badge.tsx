import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline' | 'purple' | 'cyan';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
  secondary: 'bg-secondary text-secondary-foreground border border-border',
  success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  destructive: 'bg-red-500/10 text-red-400 border border-red-500/20',
  outline: 'border border-border text-muted-foreground bg-transparent',
  purple: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
};

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
