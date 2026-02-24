import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input = ({ label, className, ...props }: InputProps): React.JSX.Element => {
    return (
        <div className="w-full space-y-1.5">
            {label && <label className="text-sm font-medium text-gray-500 dark:text-gray-100">{label}</label>}
            <input
                {...props}
                className={`flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:placeholder:text-gray-400 ${className}`}
            />
        </div>
    );
};