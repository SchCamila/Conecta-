# Conecta+

Protótipo navegável (front-end apenas) de uma plataforma que conecta jovens de
áreas urbanas periféricas a cursos profissionalizantes, oportunidades de
emprego/estágio/Jovem Aprendiz e informações de mobilidade urbana, em um só
lugar.

> ⚠️ **Aviso — protótipo acadêmico.**
> Este projeto foi desenvolvido como trabalho acadêmico do curso de
> Engenharia de Software (2º período), com foco na proposta relacionada ao
> **ODS 8 — Trabalho Decente e Crescimento Econômico** (metas 8.5 e 8.6).
> Todas as vagas, empresas, cursos, instituições e rotas de transporte
> exibidas são **fictícios**, criados apenas para demonstrar o fluxo de
> navegação. **Não há backend, banco de dados, autenticação real ou
> integrações externas** — todos os dados são mockados em memória
> (`src/data/mockData.js`) e **não há persistência real**: ao recarregar a
> página, o cadastro e o progresso feitos na sessão são perdidos.

## Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) para a navegação entre telas
- [Tailwind CSS](https://tailwindcss.com/) para o layout mobile-first

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev
```

O terminal vai mostrar o endereço local (normalmente
`http://localhost:5173`) — abra no navegador. Para testar o layout mobile,
use as ferramentas de desenvolvedor do navegador (modo responsivo).

Outros comandos úteis:

```bash
npm run build    # gera a versão de produção na pasta dist/
npm run preview  # serve a versão de produção gerada pelo build
```

## Fluxo de navegação

O protótipo segue a sequência:

**Tela inicial → Cadastro → Página inicial (personalizada) → Oportunidades →
Detalhes da vaga → Curso recomendado → Como chegar → Desenvolvimento/Perfil**

Além dessa sequência principal, a tela **"Sobre o app"** pode ser acessada a
qualquer momento pelo rodapé, em qualquer página do protótipo.

### Telas

1. **Tela inicial** — apresentação do Conecta+ e botão "Criar meu cadastro".
2. **Cadastro** — nome, idade, região/bairro, escolaridade, interesses
   (multi-seleção) e objetivo profissional.
3. **Página inicial (pós-cadastro)** — oportunidades e cursos recomendados
   com base nas respostas do cadastro.
4. **Oportunidades** — busca com filtros por tipo (emprego, estágio, Jovem
   Aprendiz, curso) e por região.
5. **Detalhes da vaga** — empresa, cargo, localização, horário, requisitos,
   benefícios, nível de experiência e compatibilidade (%) com o perfil do
   usuário. Se faltar alguma habilidade, exibe um aviso com link para o
   curso recomendado.
6. **Curso recomendado** — curso fictício para desenvolver a habilidade que
   falta (instituição, duração e modalidade). É possível marcar o curso como
   concluído, o que atualiza as habilidades do perfil e a compatibilidade
   das vagas.
7. **Como chegar** — rota fictícia de transporte público + trecho a pé até o
   local da vaga ou do curso.
8. **Desenvolvimento/Perfil** — painel com cursos concluídos, habilidades
   desenvolvidas, candidaturas feitas e edição dos dados do perfil.
9. **Sobre o app** *(fora do fluxo principal)* — o que é o Conecta+, o
   problema que motivou o projeto, a relação com o ODS 8, como a ideia foi
   concebida (Design Thinking) e informações sobre o projeto acadêmico.

## Dados mockados

Todos os dados fictícios (vagas, cursos e rotas de mobilidade) estão em
[`src/data/mockData.js`](src/data/mockData.js), incluindo a lógica simples de
cálculo de compatibilidade (%) entre o perfil do usuário e os requisitos de
cada vaga.

## Estrutura do projeto

```
src/
├── components/   # componentes reutilizáveis (layout, cards, chips, etc.)
├── context/      # estado do usuário em memória (perfil, habilidades, candidaturas)
├── data/         # dados mockados (vagas, cursos, rotas)
├── pages/        # telas do fluxo principal e a tela "Sobre o app"
├── App.jsx       # definição das rotas
└── main.jsx      # ponto de entrada da aplicação
```
