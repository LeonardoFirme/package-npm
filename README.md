# @LeonardoFirme/package-npm

Biblioteca de componentes UI de alto padrão e utilitários de infraestrutura para ERP/SaaS. Desenvolvida exclusivamente para o ecossistema **React 19**, **NextJS 16+** e **Tailwindcss v4**.

## 🚀 Instalação Quickstart

Antes de instalar, certifique-se de ter o arquivo `.npmrc` configurado na raiz do seu projeto para autenticação no GitHub Packages.

```bash
npm install @LeonardoFirme/package-npm

```

## 📦 Dependências Integradas

Caso você precise instalar as dependências separadamente ou queira saber o que compõe este pacote, aqui estão os comandos de instalação:

### UI & UX (Client Side)

```bash
npm install sonner framer-motion @react-icons/all-files

```

### Auth & Security (Server Side)

```bash
npm install next-auth bcrypt jsonwebtoken

```

---

## 🛠️ Guia de Uso

### Componente: Button (Minimalist ERP)

Botão responsivo com suporte nativo a **Dark Mode** e transições suaves.

```tsx
import { Button } from '@LeonardoFirme/package-npm';

export default function Dashboard() {
  return (
    <Button
      label="Salvar Alterações"
      className="w-full sm:w-auto"
      onClick={() => alert('Operação realizada com sucesso!')}
    />
  );
}

```

## ⚙️ Configuração de Publicação Automatizada

Para garantir a integridade do pacote, utilizamos **GitHub Actions**. O arquivo abaixo automatiza o Build e o Publish sempre que houver um push na branch `main`.

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