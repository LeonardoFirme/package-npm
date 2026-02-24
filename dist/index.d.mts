import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}
/**
 * Componente profissional para ERP
 * Minimalista, responsivo e adaptado para Tailwindcss v4
 */
declare const Button: ({ label, className, ...props }: ButtonProps) => React.JSX.Element;

export { Button, type ButtonProps };
