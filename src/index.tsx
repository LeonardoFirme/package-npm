import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

/**
 * Componente profissional para ERP
 * Minimalista, responsivo e adaptado para Tailwindcss v4
 */
export const Button = ({ label, className = '', ...props }: ButtonProps): React.JSX.Element => {
  return (
    <button
      {...props}
      className={`px-4 py-2 text-sm font-medium transition-colors rounded-md border bg-gray-800 text-gray-50 border-gray-200 hover:bg-gray-950 dark:bg-gray-50 dark:text-gray-950 dark:border-gray-800 dark:hover:bg-gray-200 ${className}`}
    >
      {label}
    </button>
  );
};