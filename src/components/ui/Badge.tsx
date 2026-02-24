import React from 'react';

export const Badge = ({ children, className }: { children: React.ReactNode, className?: string }): React.JSX.Element => {
    return (
        <span className={`inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-semibold text-gray-800 transition-colors dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50 ${className}`}>
            {children}
        </span>
    );
};