# Package NPM | Leonardo Firme

Biblioteca de componentes UI de alto padrão e utilitários de infraestrutura para ERP/SaaS. Desenvolvida exclusivamente para o ecossistema **React 19**, **NextJS 16+** e **Tailwind CSS v4**.

![Leonardo Firme](https://img.shields.io/badge/Leonardo_Firme-fff1f0?style=for-the-badge&logo=data:image/png;base64,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&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_16+-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

## 🚀 Instalação

Adicione o pacote ao seu projeto via NPM:

```bash
npm install @leonardofirme/package-npm

```

## 🎨 Integração com Tailwind CSS v4

Para que o motor do Tailwind identifique e processe as classes utilitárias e o `dark:mode` dentro dos componentes do pacote, adicione a diretiva `@source` no seu arquivo CSS principal (ex: `globals.css`):

```css
@import "tailwindcss";

/* Mapeia os componentes do pacote para o compilador do Tailwind */
@source "../../node_modules/@leonardofirme/package-npm/dist";

```

---

## 📦 Core de Dependências

O pacote gerencia e integra dependências modernas para garantir performance em aplicações complexas:

* **Interface:** `framer-motion`, `lucide-react`, `sonner`.
* **Utilitários:** `clsx`, `tailwind-merge`.
* **Segurança:** Estruturas preparadas para integração com `next-auth` e `jsonwebtoken`.

---

## 🛠️ Guia de Uso Profissional

### Componentes UI (Minimalist & Responsive)

Os componentes seguem o layout minimalista: `text-gray-800` (Light) e `text-gray-50` (Dark), prontos para dashboards ERP.

```tsx
import { Button, Input } from '@leonardofirme/package-npm';

export default function LoginForm() {
  return (
    <div className="space-y-4">
      <Input label="E-mail" type="email" placeholder="seu@email.com" />
      <Button
        label="Acessar Sistema"
        className="w-full"
        onClick={() => {}}
      />
    </div>
  );
}

```

### Hooks de Infraestrutura

Controle de tema e estados globais de forma otimizada.

```tsx
import { useTheme } from '@leonardofirme/package-npm';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Tema atual: {theme === 'dark' ? 'Escuro' : 'Claro'}
    </button>
  );
}

```

---

## ⚙️ Pipeline de CI/CD

Garantimos a integridade do código através de builds automatizados. Cada versão passa por uma validação rigorosa de tipagem estática antes de ser disponibilizada.

**Workflow:** `.github/workflows/publish.yml`

* **Build:** `tsup` (CJS, ESM, DTS).
* **Validation:** `tsc --noEmit`.
* **Registry:** Publicação automática via GitHub Actions para o registro oficial do NPM.

---

## 👨‍💻 Autor e Mantenedor

Desenvolvido por **Leonardo Firme**. Focado em entregar estruturas escaláveis para o mercado de plataformas SaaS e sistemas de gestão.

* **GitHub Pessoal:** [LeonardoFirme](https://github.com/LeonardoFirme)
* **NPM Profile:** [@leonardofirme](https://www.npmjs.com/~leonardofirme)

---

## 📄 Licença

Uso disponível para a comunidade sob os termos de desenvolvimento de plataformas do ecossistema Leonardo Firme.

---