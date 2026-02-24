import React from 'react';

export const Alert = ({ title, children, variant = 'info' }: { title?: string, children: React.ReactNode, variant?: 'info' | 'danger' }): React.JSX.Element => {
    const variants = {
        info: "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950",
        danger: "border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/50 dark:text-red-200"
    };

    return (
        <div className={`relative w-full rounded-lg border p-4 ${variants[variant]}`}>
            {title && <h5 className="mb-1 font-medium leading-none tracking-tight text-gray-800 dark:text-gray-50">{title}</h5>}
            <div className="text-sm opacity-90">{children}</div>
        </div>
    );
};