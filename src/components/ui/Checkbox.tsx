import React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Checkbox = ({ label, className, ...props }: CheckboxProps): React.JSX.Element => {
    return (
        <label className="inline-flex cursor-pointer items-center gap-2">
            <input
                type="checkbox"
                {...props}
                className={`h-4 w-4 rounded-sm border border-gray-200 bg-white text-gray-800 focus:ring-0 focus:ring-offset-0 dark:border-gray-800 dark:bg-gray-950 dark:checked:bg-gray-50 ${className}`}
            />
            {label && <span className="text-sm font-medium text-gray-500 dark:text-gray-100">{label}</span>}
        </label>
    );
};