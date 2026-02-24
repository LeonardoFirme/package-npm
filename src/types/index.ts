/**
 * Definições de tipos globais para a biblioteca @LeonardoFirme/package-npm
 */

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
};

export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';

export type ComponentVariant = 'primary' | 'outline' | 'ghost' | 'danger';

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}