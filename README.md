# @LeonardoFirme/package-npm

Biblioteca de componentes UI profissional para ERP/SaaS construída com **React 19** e **Tailwindcss v4**.

## Instalação

Configure seu `.npmrc` com o token do GitHub e execute:

```bash
npm install @LeonardoFirme/package-npm

```

## Uso

```tsx
import { Button } from '@LeonardoFirme/package-npm';

export default function App() {
  return <Button label="Salvar" />;
}

```

```

#### B. Automação (GitHub Actions)
Atualmente, você precisa fazer o `npm run build` e o `npm publish` manualmente. Podemos criar um script que faz isso sozinho toda vez que você fizer um `git push` com uma nova versão.

**Deseja que eu prepare o arquivo do GitHub Actions para automatizar suas publicações futuras?**

---