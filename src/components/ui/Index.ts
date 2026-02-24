/**
 * @file Index.ts
 * @description Ponto central de exportação dos componentes atômicos (UI Kit).
 * Esta estrutura segue os padrões de Clean Architecture, permitindo que os componentes
 * sejam importados de forma modular e otimizada via Tree Shaking.
 * * @author Leonardo Firme | v0 Digital
 * @version 1.1.0
 */

// Exportação do componente de botão com suporte a variantes (primary, outline, ghost)
export * from './Button';

// Exportação de campos de entrada de texto com tipagem estrita e modo dark nativo
export * from './Input';

// Exportação de containers de conteúdo com suporte a títulos e subtítulos
export * from './Card';

// Exportação de indicadores de status e tags informativas
export * from './Badge';

// Exportação de campo de texto multilinhas para descrições e observações
export * from './Textarea';

// Exportação de placeholders animados para estados de carregamento (Loading)
export * from './Skeleton';

// Exportação de interruptores (Switch) para controle de estados binários (on/off)
export * from './Toggle';

// Exportação do ecossistema de tabelas (Table, Header, Row, Cell) para exibição de dados
export * from './Table';

// Exportação de janelas sobrepostas animadas via Framer Motion
export * from './Modal';

// Exportação de menus de seleção única com mapeamento de opções
export * from './Select';

// Exportação de componentes para feedbacks visuais, mensagens de erro ou avisos
export * from './Alert';

// Exportação de sistemas de navegação estruturada (Trilhas)
export * from './Breadcrumb';

// Exportação de seletores de múltipla escolha (Check)
export * from './Checkbox';

// Exportação de menus de contexto e ações suspensas
export * from './Dropdown';

// Exportação de barras de progresso e indicadores de carregamento linear
export * from './Progress';

// Exportação do provedor de notificações (Toast) padronizado v0 Digital
export * from './Toaster';