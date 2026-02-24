# @LeonardoFirme/package-npm

Biblioteca de componentes UI de alto padrão e utilitários de infraestrutura para ERP/SaaS. Desenvolvida exclusivamente para o ecossistema **React 19**, **NextJS 16+** e **Tailwindcss v4**.

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
@source "../../node_modules/@LeonardoFirme/package-npm/dist";

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
import { Button } from '@LeonardoFirme/package-npm';

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
import { useTheme } from '@LeonardoFirme/package-npm';

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