import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: { label: string; value: string | number }[];
}

export const Select = ({ label, options, className, ...props }: SelectProps): React.JSX.Element => {
    return (
        <div className="w-full space-y-1.5">
            {label && <label className="text-sm font-medium text-gray-500 dark:text-gray-100">{label}</label>}
            <select
                {...props}
                className={`flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 ${className}`}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};