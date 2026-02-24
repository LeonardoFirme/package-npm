/**
 * @file index.tsx
 * @description Entry point oficial do pacote @LeonardoFirme/package-npm.
 * Centraliza e expõe a biblioteca de componentes, hooks, utilitários e tipos
 * para garantir compatibilidade total com NextJS 16+, Laravel e React puro.
 */

// Exportação do UI Kit (Componentes atômicos com Tailwindcss v4)
export * from './components/ui/Index';

// Exportação de Utilitários (Função cn para merge de classes)
export * from './utils/cn';

// Exportação de Hooks (Gestão de Tema e estados globais)
export * from './hooks/use-theme';

// Exportação de Types (Definições de tipos e interfaces globais)
export * from './types';

// Exportação de Proxy (Suporte a rotas e substituição de Middleware no NextJS 16+)
export * from './proxy';