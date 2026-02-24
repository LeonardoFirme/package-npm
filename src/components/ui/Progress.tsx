import React from 'react';

export const Progress = ({ value = 0, className }: { value: number, className?: string }): React.JSX.Element => {
    return (
        <div className={`h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-900 ${className}`}>
            <div
                className="h-full bg-gray-800 transition-all dark:bg-gray-50"
                style={{ width: `${value}%` }}
            />
        </div>
    );
};