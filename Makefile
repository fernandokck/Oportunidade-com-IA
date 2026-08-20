.PHONY: dev build start install clean

# Inicia o servidor de desenvolvimento e abre a página
dev:
	@bash ./iniciar.sh

# Apenas inicia o servidor Next.js na porta 3000
run:
	npm run dev

# Instala as dependências
install:
	npm install

# Constrói o projeto para produção
build:
	npm run build

# Roda a versão de produção
start:
	npm run start

# Limpa o cache do Next.js
clean:
	rm -rf .next
