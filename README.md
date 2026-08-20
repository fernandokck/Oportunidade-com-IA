# Treinadores de IA — guia independente

Guia comparativo e informativo sobre plataformas de gravação de tarefas
domésticas para treinar IA (Claru.ai, Crowtado, Invent Money, Hub.xyz):
o que cada uma paga, como funciona o saque e o que é preciso pra começar.

Stack: **Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS**.

## O que é diferente do site original

- **Sem links de indicação** — todos os links vão direto para a página
  oficial de cada plataforma, sem `?ref=`.
- **Sem calculadora de bônus multinível** — a página não incentiva
  recrutar outras pessoas pra ganhar comissão sobre elas.
- **Sem a dica de usar e-mails diferentes por plataforma** — o FAQ só
  recomenda checar os termos de uso de cada uma sobre contas duplicadas.
- Valores e prazos são apresentados como "informados pela plataforma",
  não como garantia de ganho.

## Rodando localmente

```bash
npm install
npm run dev
```

## Estrutura

```
app/
  layout.tsx      # fontes (Fraunces + Inter), metadata
  page.tsx        # monta as seções
  globals.css
components/
  Nav.tsx
  Hero.tsx
  Platforms.tsx    # cards das 4 plataformas
  Comparison.tsx   # tabela comparativa
  Requirements.tsx
  Faq.tsx          # único client component (accordion)
  Footer.tsx
tailwind.config.ts # paleta "dossiê editorial": paper/ink/accent azul
```

## Antigravity IDE

Abra a pasta descompactada, rode `npm install` no terminal integrado e
use `npm run dev` para o preview. Peça ao agente para rodar
`npm run build` antes de publicar.

## Deploy na Vercel

```bash
npm i -g vercel
vercel
```

Ou importe o repositório em vercel.com/new — sem variáveis de ambiente
obrigatórias.

## Atualizando os dados das plataformas

Os valores de pagamento, saque e status ficam nos arrays no topo de
`Platforms.tsx` e `Comparison.tsx` — confirme sempre no site oficial de
cada plataforma antes de publicar, já que taxas e status de saque mudam
com frequência.
