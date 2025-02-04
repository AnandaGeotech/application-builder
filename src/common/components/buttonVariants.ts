// buttonVariants.ts
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 px-3 leading-tight',
  {
    variants: {
      variant: {
        default: [
          'bg-primary text-primary-foreground hover:bg-primary/90',
          'text-gray-500 border border-gray-300 hover:text-gray-700 hover:bg-gray-100',
          'dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:text-gray-300 dark:hover:bg-gray-700',
        ].join(' '),
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        danger: 'text-red-500 hover:underline',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline ',
        Login: 'w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
