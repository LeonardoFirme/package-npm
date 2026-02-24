import React from 'react';

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => {
    return (
        <div
            className={`animate-pulse rounded-md bg-gray-200 dark:bg-gray-800 ${className}`}
            {...props}
        />
    );
};