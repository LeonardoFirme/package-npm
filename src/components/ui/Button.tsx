import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant?: 'primary' | 'outline' | 'ghost';
}

export const Button = ({ label, variant = 'primary', className, ...props }: ButtonProps): React.JSX.Element => {
    const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 border";

    const variants = {
        primary: "bg-gray-800 text-gray-50 border-gray-200 hover:bg-gray-950 dark:bg-gray-50 dark:text-gray-950 dark:border-gray-800 dark:hover:bg-gray-200",
        outline: "bg-transparent text-gray-800 border-gray-200 hover:bg-gray-100 dark:text-gray-50 dark:border-gray-800 dark:hover:bg-gray-900",
        ghost: "bg-transparent text-gray-500 border-transparent hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
    };

    return (
        <button {...props} className={cn(base, variants[variant], className)}>
            {label}
        </button>
    );
};