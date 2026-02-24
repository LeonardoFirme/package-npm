import React from 'react';

export const Card = ({ title, subtitle, children, className }: { title?: string, subtitle?: string, children: React.ReactNode, className?: string }): React.JSX.Element => {
    return (
        <div className={`rounded-xl border border-gray-200 bg-white p-6 shadow-xs dark:border-gray-800 dark:bg-gray-950 ${className}`}>
            {(title || subtitle) && (
                <div className="mb-4 space-y-1">
                    {title && <h3 className="text-xl font-semibold tracking-tight text-gray-800 dark:text-gray-50">{title}</h3>}
                    {subtitle && <p className="text-sm text-gray-500 dark:text-gray-100">{subtitle}</p>}
                </div>
            )}
            <div className="text-gray-400 dark:text-gray-200">{children}</div>
        </div>
    );
};