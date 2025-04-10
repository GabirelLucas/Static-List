# Lista de Tarefas

Projeto simples de lista de tarefas estáticas usando React com Vite.

## 🧱 Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint & Prettier
- Phosphor Icons

## 🎯 Funcionalidades

- Renderização de 5 tarefas estáticas
- Alternar status (concluída ou não) com botão
- Interface escura com design responsivo para desktop
- Código organizado com boas práticas de estrutura e estilo

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Acesse a pasta do projeto:

```bash
cd nome-do-repositorio
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## 🖼️ Estrutura de Pastas

- `src/interfaces.ts`: Arquivo com todas as interfaces utilizadas
- `src/mock.ts`: Dados estáticos das tarefas
- `src/components`: Componentes reutilizáveis da aplicação
- `tailwind.config.js`: Definição personalizada de cores e configurações de estilo

## 🧹 Padronização de Código

- **Interfaces** no `interfaces.ts`
- **Dados mockados** no `mock.ts`
- **Componentes** usando a sintaxe `const Nome: React.FC = () => {}`
- **Sem valores fixos** como `gap-[1rem]`; use espaçamentos do Tailwind
- **Cores personalizadas** no `tailwind.config.js` (sem `text-[#...]`)
- **Importações organizadas** em ordem:
  1. Pacotes externos
  2. Pacotes internos (`@/`)
  3. Importações locais (`./` ou `../`)

## 🔧 Scripts

- `npm run dev`: inicia o servidor local
- `npm run build`: gera a versão de produção
- `npm run lint`: verifica problemas no código com o ESLint
- `npm run format`: formata o código com Prettier

---

Feito com 💜 por Gabriel Nunes
