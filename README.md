<h1 align="center">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="https://cdn.simpleicons.org/nextdotjs/white"
    />
    <img
      src="https://cdn.simpleicons.org/nextdotjs/black"
      alt="Next.js"
      width="32"
      height="32"
    />
  </picture>
  Next.js Boilerplate
</h1>

Um ponto de partida para projetos com Next.js, TypeScript, styled-components e testes com Jest e Testing Library.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Instalação

```bash
npm install
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Estrutura

```text
src/
├── app/          # rotas, layouts e estilos globais
└── components/   # componentes reutilizáveis e seus testes
```

Os testes ficam ao lado do arquivo testado usando o sufixo `.test.tsx`.

## Comandos

```bash
npm run dev           # desenvolvimento
npm run build         # build de produção
npm run lint          # análise estática
npm run typecheck     # verificação do TypeScript
npm run format        # formata os arquivos
npm run format:check  # verifica a formatação sem alterar arquivos
npm test              # testes
npm run test:watch    # testes em modo watch
npm run test:coverage # relatório de cobertura
```

## Antes de commitar

### 🐶 Husky

O hook em `.husky/pre-commit` é executado automaticamente pelo Git. Ele chama o lint-staged e, em seguida, roda a verificação de tipos do projeto com `npm run typecheck`.

### 🚫💩 lint-staged

O lint-staged trabalha somente nos arquivos adicionados ao commit:

- JavaScript e TypeScript passam por Prettier, ESLint e pelos testes relacionados;
- CSS, JSON e Markdown são formatados pelo Prettier.

Se alguma dessas etapas falhar, o commit é interrompido para que o problema seja corrigido antes de entrar no histórico.
