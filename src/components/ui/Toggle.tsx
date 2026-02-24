import React from 'react';

export interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Toggle = ({ label, className, ...props }: ToggleProps): React.JSX.Element => {
    return (
        <label className="inline-flex cursor-pointer items-center gap-2">
            <div className="relative">
                <input type="checkbox" {...props} className="peer sr-only" />
                <div className="h-6 w-11 rounded-full border border-gray-200 bg-gray-100 transition-colors peer-checked:bg-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:peer-checked:bg-gray-50" />
                <div className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-5 dark:bg-gray-950" />
            </div>
            {label && <span className="text-sm font-medium text-gray-500 dark:text-gray-100">{label}</span>}
        </label>
    );
};