# @LeonardoFirme/package-npm

Biblioteca de componentes UI de alto padrão e utilitários de infraestrutura para ERP/SaaS. Desenvolvida exclusivamente para o ecossistema **React 19**, **NextJS 16+** e **Tailwindcss v4**.

![Leonardo Firme](https://img.shields.io/badge/Leonardo_Firme-fff1f0?style=for-the-badge&logo=data:image/png;base64,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&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_16+-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)


## 🚀 Instalação Quickstart

Antes de instalar, certifique-se de ter o arquivo `.npmrc` configurado na raiz do seu projeto para autenticação no GitHub Packages.

```bash
npm install @LeonardoFirme/package-npm

```

## 🎨 Configuração do Tailwindcss v4

Para que o Tailwind identifique as classes utilitárias dentro do pacote instalado em `node_modules`, adicione a diretiva `@source` no seu arquivo CSS principal:

```css
@import "tailwindcss";

/* Adicione esta linha para ler os componentes da v0 Digital */
@source "../../node_modules/@leonardolirme/package-npm/dist";

```

## 📦 Dependências Integradas

Este pacote utiliza dependências modernas para garantir performance e segurança. Elas são instaladas automaticamente, mas você pode referenciá-las conforme sua stack:

### UI & UX (Client Side)

* `sonner` & `framer-motion` (Feedback e Animações)
* `clsx` & `tailwind-merge` (Gestão de Classes)

### Auth & Security (Server Side / Proxy)

* `next-auth`, `bcrypt`, `jsonwebtoken`

---

## 🛠️ Guia de Uso

### Componente: Button (Minimalist ERP)

Botão responsivo com suporte nativo a **Dark Mode** (bg-gray-800 -> bg-gray-50) e transições suaves.

```tsx
import { Button } from '@leonardofirme/package-npm';

export default function Dashboard() {
  return (
    <Button
      label="Salvar Alterações"
      className="w-full sm:w-auto"
      onClick={() => console.log('Operação realizada')}
    />
  );
}

```

### Hook: useTheme (Dark Mode Global)

Gerencie o estado visual da sua plataforma de forma centralizada.

```tsx
import { useTheme } from '@leonardofirme/package-npm';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Modo Atual: {theme}</button>;
}

```

## ⚙️ Configuração de Publicação Automatizada

Utilizamos **GitHub Actions** para garantir que cada release seja validada via `type-check` antes do deploy.

**Caminho:** `.github/workflows/publish.yml`

```yaml
name: Publish Package

on:
  push:
    branches:
      - main

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          registry-url: 'https://npm.pkg.github.com'
          scope: '@LeonardoFirme'

      - name: Install & Build
        run: |
          npm install
          npm run build
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Publish
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}

```

---

Desenvolvido por [Leonardo Firme](https://github.com/LeonardoFirme) | **v0 Digital**

---