# My Trips 🗺️

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](./)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.10-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-F03E2F?logo=sanity&logoColor=white)](https://www.sanity.io/)
[![License](https://img.shields.io/badge/license-MIT-green)](#licença-e-autoria)

> Aplicação para registrar, visualizar e explorar lugares especiais visitados ao longo do tempo, usando mapa interativo, páginas dinâmicas e conteúdo gerenciado via Headless CMS.

## 📸 Preview do Projeto

> Adicione aqui uma captura da Home ou da página de detalhes de um lugar.

```md
![Preview do My Trips](./public/img/preview.png)
```

## 🛠 Tecnologias Utilizadas

| Tecnologia          | Uso no projeto                                                                       |
| ------------------- | ------------------------------------------------------------------------------------ |
| Next.js 16          | Framework React com App Router, rotas dinâmicas, metadata e renderização no servidor |
| React 19            | Construção da interface com componentes                                              |
| TypeScript          | Tipagem estática da aplicação                                                        |
| Sanity              | Headless CMS para gerenciamento de páginas e lugares                                 |
| next-sanity         | Integração entre Next.js e Sanity                                                    |
| GROQ                | Consultas para buscar dados no Sanity                                                |
| Sanity TypeGen      | Geração de tipos a partir das queries e schemas do Sanity                            |
| Leaflet             | Biblioteca base para renderização do mapa                                            |
| React Leaflet       | Integração do Leaflet com React                                                      |
| styled-components   | Estilização com CSS-in-JS                                                            |
| next/image          | Otimização das imagens da galeria                                                    |
| next/font           | Carregamento otimizado da fonte Poppins                                              |
| lucide-react        | Ícones da interface                                                                  |
| nextjs-toploader    | Barra de progresso em navegações                                                     |
| Jest                | Testes automatizados                                                                 |
| Testing Library     | Testes orientados ao comportamento do usuário                                        |
| ESLint              | Análise estática do código                                                           |
| Prettier            | Padronização de formatação                                                           |
| Husky + lint-staged | Validação automática antes dos commits                                               |

### Badges

![Next.js](https://img.shields.io/badge/Next.js-16.2.10-black?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity-CMS-F03E2F?logo=sanity&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900?logo=leaflet&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-6.4.3-DB7093?logo=styledcomponents&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-30.4.2-C21325?logo=jest&logoColor=white)

## ✨ Funcionalidades

- Mapa interativo exibindo lugares cadastrados no CMS.
- Markers customizados e animados no mapa.
- Navegação ao clicar em um marker, direcionando para a página do lugar.
- Página individual para cada lugar em `/place/[slug]`.
- Galeria de imagens em formato de carrossel.
- Conteúdo rico renderizado com Portable Text do Sanity.
- Página institucional `/sobre`.
- Páginas dinâmicas baseadas em slug, como termos de uso e outras páginas cadastradas no CMS.
- SEO com metadata dinâmica para páginas e lugares.
- Integração com Sanity via GROQ.
- Tipagem gerada a partir do Sanity.
- Barra de progresso em navegações.
- Ícones e botões de navegação com `lucide-react`.
- Testes automatizados para componentes e templates principais.
- Estilização global com paleta de cores customizada.
- Deploy preparado para Vercel.

## 🚀 Melhorias e Diferenciais

Durante o desenvolvimento, o projeto tomou caminhos diferentes do fluxo original das aulas, adaptando a arquitetura e as tecnologias para a realidade atual do projeto.

Entre os principais diferenciais aplicados estão:

- Uso do **Next.js App Router**, em vez da estrutura antiga baseada em `pages`.
- Integração com **Sanity via GROQ e next-sanity**, em vez de seguir apenas a abordagem com GraphQL.
- Uso de **Sanity TypeGen** para melhorar a segurança de tipos entre CMS e frontend.
- Separação entre templates, componentes, queries e tipos.
- Criação de templates específicos para Home, páginas institucionais e páginas de lugares.
- Refatoração do mapa para funcionar corretamente com componentes client-side.
- Uso de client components para evitar problemas de SSR com Leaflet.
- Marker customizado com `divIcon`, animação e cores da identidade visual da aplicação.
- Galeria de imagens substituída por carrossel, melhorando a experiência visual.
- Uso de `next/image` para renderização otimizada das imagens.
- Metadata dinâmica para melhorar SEO e compartilhamento das páginas.
- Testes orientados ao comportamento com Jest e Testing Library.
- Padronização de commits e validações com Husky, lint-staged, ESLint, Prettier e TypeScript.
- Deploy pensado para Vercel com variáveis de ambiente separadas por ambiente.

Essas decisões tornam o projeto mais moderno, escalável e alinhado com boas práticas atuais de desenvolvimento frontend com Next.js.

## 🧭 Rotas da Aplicação

| Rota            | Tipo     | Descrição                                                          |
| --------------- | -------- | ------------------------------------------------------------------ |
| `/`             | Pública  | Home com mapa interativo e markers dos lugares cadastrados.        |
| `/sobre`        | Pública  | Página institucional sobre o projeto.                              |
| `/place/[slug]` | Dinâmica | Página individual de um lugar, com descrição e galeria de imagens. |
| `/[slug]`       | Dinâmica | Página genérica baseada em conteúdo cadastrado no Sanity.          |

### Exemplos de rotas dinâmicas

| Rota                | Descrição                                             |
| ------------------- | ----------------------------------------------------- |
| `/place/sao-luis`   | Página de detalhes do lugar São Luís.                 |
| `/terms-of-service` | Página dinâmica de termos de uso, caso exista no CMS. |

## 🧱 Estrutura Geral

```txt
src/
├── app/                 # Rotas, layout global e páginas do App Router
├── components/          # Componentes reutilizáveis
├── lib/                 # Funções utilitárias e configuração de SEO
├── sanity/              # Cliente, queries e tipos do Sanity
├── styles/              # Estilos globais
└── templates/           # Templates de páginas
```

## 🚀 Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

- Node.js 20.9+
- npm
- Uma conta/projeto no Sanity
- Dataset configurado no Sanity

## ▶️ Como Rodar a Aplicação

### 1. Clone o repositório

```bash
git clone git@github.com:ManoelReisDev/my-trips.git
cd my-trips
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-15
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

### 5. Acesse no navegador

Abra:

```txt
http://localhost:3000
```

### 6. Gere a versão de produção

```bash
npm run build
```

### 7. Rode a versão de produção localmente

```bash
npm run start
```

## 🌍 Variáveis de Ambiente

| Variável                         | Descrição                                                |
| -------------------------------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | ID do projeto no Sanity.                                 |
| `NEXT_PUBLIC_SANITY_DATASET`     | Dataset utilizado pelo projeto, geralmente `production`. |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Versão da API do Sanity usada nas consultas.             |
| `NEXT_PUBLIC_SITE_URL`           | URL pública da aplicação, usada para metadata e SEO.     |

Exemplo local:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=8hv8qzy9
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-15
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Em produção, `NEXT_PUBLIC_SITE_URL` deve apontar para a URL final do deploy, por exemplo:

```env
NEXT_PUBLIC_SITE_URL=https://my-trips.vercel.app
```

## 🧪 Testes e Qualidade

### Rodar os testes

```bash
npm test
```

### Rodar os testes em modo watch

```bash
npm run test:watch
```

### Gerar relatório de cobertura

```bash
npm run test:coverage
```

### Rodar o lint

```bash
npm run lint
```

### Verificar tipos

```bash
npm run typecheck
```

### Verificar formatação

```bash
npm run format:check
```

### Formatar o projeto

```bash
npm run format
```

## 🐶 Antes de commitar

O projeto usa Husky e lint-staged para manter a qualidade do código antes dos commits.

O hook de pre-commit executa validações nos arquivos alterados, incluindo:

- Prettier;
- ESLint;
- testes relacionados;
- verificação de tipos com TypeScript.

Se alguma etapa falhar, o commit é interrompido até que o problema seja corrigido.

## 🧭 Próximos Passos

Possíveis evoluções para o projeto:

- [ ] Melhorar a responsividade fina do mapa em diferentes dispositivos.
- [ ] Adicionar skeletons ou estados de carregamento nas páginas dinâmicas.
- [ ] Criar uma página 404 customizada.
- [ ] Adicionar testes end-to-end com Playwright.
- [ ] Melhorar acessibilidade do carrossel de imagens.
- [ ] Adicionar compartilhamento social para páginas de lugares.
- [ ] Criar filtros ou categorias para os lugares.
- [ ] Adicionar preview mode/draft mode com Sanity.
- [ ] Documentar o projeto do Sanity Studio.
- [ ] Automatizar geração de tipos do Sanity no fluxo de desenvolvimento.

## 📄 Licença e Autoria

Este projeto está sob a licença MIT.

Agradecimento especial ao curso **"Aprenda NextJS, GraphQL e Leaflet na prática!"**, do [Willian Justen](https://willianjusten.com.br/). O curso serviu como uma excelente base de orientação técnica para a construção deste projeto.

Apesar dessa base de aprendizado, o projeto seguiu caminhos próprios em sua versão final, utilizando outras abordagens e decisões técnicas, como Next.js App Router, Sanity com GROQ, TypeGen, templates separados, testes automatizados e uma estrutura adaptada ao fluxo atual da aplicação.

Autor: ManoelReisDev

GitHub: [ManoelReisDev](https://github.com/ManoelReisDev)

Repositório: [my-trips](https://github.com/ManoelReisDev/my-trips)

Feito com foco em aprendizado, boas práticas e uma experiência visual simples para registrar lugares especiais. 🧭
