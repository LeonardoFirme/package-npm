# Guia de Contribuição

Este guia define os padrões técnicos e de workflow para o desenvolvimento da biblioteca `@LeonardoFirme/package-npm`. Como uma biblioteca base para ERPs profissionais, a precisão e a consistência são inegociáveis.

---

## 🛠️ Stack Técnica

* **React 19** (Hooks modernos e Server Components)
* **Tailwindcss v4** (Utilização de classes oficiais, sem uso de `[]`)
* **TypeScript** (Tipagem estática obrigatória)
* **tsup** (Bundler de alta performance)

---

## 📏 Padrões de Código (Strict Rules)

### 1. Estrutura de Componentes

Todos os componentes devem ser funcionais e seguir o layout minimalista padrão:

* **Modo Light:** Fundo `bg-white`, título `text-gray-800`, subtítulo `text-gray-500`, texto `text-gray-400`, bordas `border-gray-200`.
* **Modo Dark:** Fundo `bg-gray-950`, título `text-gray-50`, subtítulo `text-gray-100`, texto `text-gray-200`, bordas `border-gray-800`.
* **Botões:** `bg-gray-800` (hover: `bg-gray-950`) em light e `bg-gray-50` (hover: `bg-gray-200`) em dark.

### 2. Regras de CSS (Tailwindcss v4)

* **Dark Mode:** Sempre embutido via prefixo `dark:`.
* **Proibição:** Nunca utilize classes customizadas com colchetes (ex: `w-[10px]`). Utilize apenas tokens oficiais do Tailwind.
* **Gradientes:** Utilize `bg-linear-to-br`. Nunca utilize `bg-gradient-to`.

### 3. Inputs e Dados Sensíveis

* Nunca utilize `uppercase` em campos de inputs para evitar distorção de dados sensíveis (names, emails, passwords).

---

## 🚀 Workflow de Desenvolvimento

### 1. Clonar e Instalar

```bash
git clone https://github.com/LeonardoFirme/package-npm.git
cd package-npm
npm install

```

### 2. Criar uma Nova Feature

Sempre crie uma branch descritiva antes de iniciar:

```bash
git checkout -b feat/nome-do-componente

```

### 3. Build e Validação

Antes de commitar, você **deve** garantir que o build está passando:

```bash
npm run build

```

---

## 📦 Processo de Publicação

A publicação é automatizada via GitHub Actions. Para disparar uma nova versão:

1. Atualize a versão no `package.json` seguindo o versionamento semântico (Ex: `1.0.1` -> `1.0.2`).
2. Adicione os arquivos: `git add .`
3. Commit seguindo padrões (Ex: `feat: add new toast component`).
4. Push para a branch `main`.

---

## ✉️ Contato

Em caso de dúvidas técnicas, entre em contato com a equipe de desenvolvimento da **v0 Digital** ou diretamente via [GitHub](https://github.com/LeonardoFirme).

---