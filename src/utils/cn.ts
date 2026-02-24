import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utilitário global para fusão de classes Tailwind.
 * Resolve conflitos de especificidade e condicionais de forma limpa.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}