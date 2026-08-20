# 🚀 Como Executar o Projeto em Localhost

Este projeto é construído com **Next.js 14**, **React**, **TypeScript** e **Tailwind CSS**.

---

## ⚡ Método 1: Duplo Clique (Mais Fácil no Mac)

1. No **Finder**, navegue até a pasta deste projeto.
2. Dê um **duplo clique** no arquivo [`iniciar.command`](./iniciar.command).
3. Uma janela do Terminal será aberta, as dependências serão verificadas e o site abrirá automaticamente no seu navegador!

---

## 💻 Método 2: Pelo Terminal

Abra o Terminal nesta pasta e execute qualquer uma das opções abaixo:

### Opção A (Recomendado - Automático):
```bash
./iniciar.sh
```

### Opção B (Padrão NPM):
```bash
npm run dev
```
Depois abra no navegador: **`http://localhost:3000`** (ou `http://localhost:3001` caso a 3000 esteja em uso).

### Opção C (Usando Make):
```bash
make dev
```

---

## 🛑 Como parar a execução

Pressione as teclas **`Ctrl + C`** na janela do Terminal onde o servidor está rodando.

---

## 📦 Comandos Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `./iniciar.sh` | Instala dependências (se necessário), inicia o servidor e abre o navegador |
| `npm run dev` | Inicia o servidor de desenvolvimento local |
| `npm run build` | Cria a versão otimizada de produção |
| `npm run start` | Executa a versão compilada de produção |
| `npm run lint` | Executa a verificação estática de código |
