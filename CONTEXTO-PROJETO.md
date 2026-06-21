# Contexto do Projeto — Império das Bombas

## O que é
Site institucional da empresa **Império das Bombas** — desentupidora, dedetizadora e manutenção hidráulica em Praia Grande/SP.
Construído em **React + Vite + TypeScript**, sem frameworks de UI externos. Todos os ícones são SVG inline.

## Stack
- React 18 + TypeScript
- Vite 4
- CSS puro (sem Tailwind, sem styled-components)
- Arquivos principais: `src/App.tsx` e `src/index.css`

## Estrutura de pastas
```
public/
  images/
    logo.png              → logo completo (texto + coroa)
    Design sem nome (1).jpg → apenas a coroa dourada (usada no header/footer)
    hero-tecnico-real.png → foto do técnico no hero
    desentupimento.png    → card serviço
    dedetizacao.png       → card serviço
    bombas.png            → card serviço
    caixa_agua.png        → card serviço
    fossa.png             → card serviço
    preventivo.png        → card serviço
src/
  App.tsx   → todo o JSX/lógica
  index.css → todo o CSS
  main.tsx  → entrada React
index.html  → SEO, Open Graph, Schema.org
```

## Identidade Visual
- **Cor primária atual:** laranja `#F97316` (versão teste) / dourado `#C9952A` (versão original)
- **Header/fundo escuro:** `#0F172A` (azul marinho) ou `#0a0a0a` (preto puro)
- **Fonte:** Inter + Plus Jakarta Sans
- **Logo no header:** coroa dourada (círculo 44px) + texto "Império das Bombas"

> ⚠️ O site tem duas versões de cor testadas:
> - **Dourado + preto** (identidade do logo)
> - **Laranja + azul marinho** (baseado em JSON de design tokens)
> Escolher qual manter antes de finalizar.

## Informações da Empresa
```
Nome: Império das Bombas
Telefone fixo: (13) 3481-2824
WhatsApp 1: (13) 98836-4002
WhatsApp 2: (13) 97401-6491
E-mail: imperio.bombas2016@gmail.com
Endereço: Av. do Trabalhador, 3378 - Vila Sonia, Praia Grande - SP
Horário: 24h todos os dias
Instagram: @imperio.bombas
Facebook: /Imperiodasbombas
```

## Seções do Site (em ordem)
1. **Header** — fixo, preto, logo coroa + nav com scroll-spy
2. **Hero** — fundo escuro, título, botões WhatsApp + telefone, stats (18+, 5.000+, 98%)
3. **Trust Bar** — barra escura: emergência, 24h, orçamento grátis
4. **Transição** — degradê escuro→branco (div `.section-transition`)
5. **Sobre Nós** (`#sobre`) — texto + números + foto (`sobre-equipe.jpg` FALTANDO)
6. **Serviços** (`#servicos`) — grid 3 colunas, 6 cards com foto
7. **Diferenciais** (`#diferenciais`) — grid 3 colunas, 6 cards ícone
8. **Áreas Atendidas** (`#areas`) — tags, Praia Grande com badge "Sede"
9. **Depoimentos** (`#depoimentos`) — 3 cards com estrelas
10. **Contato** (`#contato`) — formulário + info compacta + mapa Google
11. **Footer** — logo + links + contatos

## O que está FALTANDO
- [ ] Foto `sobre-equipe.jpg` — seção Sobre Nós (espaço em branco agora)
- [ ] Decidir cor final: dourado ou laranja
- [ ] Imagens dos cards de serviço melhoradas (as atuais têm texto embutido)
- [ ] `og-image.jpg` (1200x630px) para redes sociais
- [ ] Foto melhor no hero (técnico corpo inteiro, uniforme azul com logo)

## Funcionalidades Implementadas
- ✅ Scroll-spy (menu destaca seção ativa)
- ✅ Botão voltar ao topo (aparece após 600px de scroll)
- ✅ ScrollReveal (animação ao entrar na tela)
- ✅ Formulário de contato envia via WhatsApp
- ✅ Header transparente → sólido ao rolar
- ✅ SEO completo (meta, Open Graph, Twitter Card, Schema.org LocalBusiness)
- ✅ Menu mobile responsivo
- ✅ Degradê de transição entre seções escura e branca

## Prompts para gerar imagens
Ver arquivo `prompts-imagens.md` na raiz do projeto.

## Como rodar
```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # gera pasta dist/
```
