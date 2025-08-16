# Projeto Next.js — Dominando Next JS completo do zero 🔥

Este é um projeto **Next.js** iniciado com `create-next-app`, com as seguintes configurações:

* **Nome do projeto**: `nextjs`
* **TypeScript**: Sim
* **ESLint**: Sim
* **Tailwind CSS**: Sim
* **Código dentro de `src/`**: Sim
* **App Router**: Sim
* **Turbopack**: Não
* **Alias de importação**: `@/*`

---

## 🚀 Começando

Para rodar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

A edição principal acontece em `src/app/page.tsx`.

---

## 📑 Roteiro da Guia Next JS completo

* [x] Criação do projeto com `create-next-app`
* [x] Estrutura de pastas do Next.js
* [x] Roteamento e navegação entre páginas

  * [x] Not Found
* [x] Metadata e SEO
* [x] Server Components x Client Components
* [x] Actions (Server Actions)
* [x] Rotas Dinâmicas
* [x] Loading UI e Streaming
* [x] Revalidate, Cache e ISR
* [x] Cache Fetch
* [x] Middleware
* [x] Route Handlers

---

## 📚 Conteúdo do vídeo “Dominando Next JS completo do zero”

Este guia foi baseado no vídeo do canal **Sujeito Programador**:
👉 [Dominando Next JS completo do zero 🔥](https://www.youtube.com/watch?v=e6FigV2fLC8)

### Principais ensinamentos:

1. **Configuração inicial**

   * Criação do projeto com `create-next-app`
   * Definições de TypeScript, ESLint e Tailwind CSS
   * Estrutura de código dentro de `src/`
   * Uso de App Router

2. **Estrutura e Roteamento**

   * Páginas (`page.tsx`)
   * Layouts (`layout.tsx`)
   * Rotas dinâmicas
   * Rotas de erro (Not Found)
   * Navegação entre páginas com `Link`

3. **Server Components e Client Components**

   * Diferenças e quando usar cada um
   * Uso do `"use client"`

4. **Data Fetching e Renderização**

   * SSR (Server Side Rendering)
   * SSG (Static Site Generation)
   * ISR (Incremental Static Regeneration)
   * `fetch()` com cache e revalidação

5. **SEO e Metadata**

   * Definição de títulos e descrições
   * `generateMetadata` para páginas
   * Configurações de Open Graph e redes sociais

6. **UI Dinâmica e Loading**

   * `loading.tsx`
   * Suspense e Streaming
   * Interatividade com hooks no lado cliente

7. **Middleware e Route Handlers**

   * Manipulação de rotas no servidor
   * Autenticação e permissões via Middleware
   * Criação de APIs com Route Handlers

8. **Otimização e Performance**

   * Uso de `next/image`
   * Cache e prefetch automático
   * Componentes otimizados

9. **Deploy**

   * Deploy simples com Vercel
   * Alternativa com `next build` e `next start`

---

## 📦 Resumo das Respostas do `create-next-app`

* **Nome do projeto?** → `nextjs`
* **TypeScript?** → ✅ Sim
* **ESLint?** → ✅ Sim
* **Tailwind CSS?** → ✅ Sim
* **Código dentro de `src/`?** → ✅ Sim
* **App Router (recomendado)?** → ✅ Sim
* **Turbopack para `next dev`?** → ❌ Não
* **Customização do import alias (`@/*` por padrão)?** → ✅ Sim
* **Alias escolhido** → `@/*`

---

## 📌 Próximos Passos

* Criar novas rotas dinâmicas e layouts aninhados.
* Implementar `Server Actions` para formulários.
* Usar Middleware para autenticação.
* Configurar metadados dinâmicos para SEO.
* Realizar o deploy no Vercel.

---
