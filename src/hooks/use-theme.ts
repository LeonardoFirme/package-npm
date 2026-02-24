import { useState, useEffect } from 'react';

/**
 * Hook global para gestão de Dark Mode.
 * Sincroniza o estado com o LocalStorage e a classe 'dark' no documento.
 * Ideal para aplicações NextJS 16+ e Laravel + React.
 */
export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Removemos ambos para garantir um estado limpo antes de aplicar o novo
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  // Correção: O toggle deve alternar apenas entre os valores do tipo definido
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return { theme, setTheme, toggleTheme };
}