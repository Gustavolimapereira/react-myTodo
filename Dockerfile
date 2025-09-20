# Etapa 1: Build
FROM node:20 AS builder

# Define diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json/pnpm-lock.yaml/yarn.lock se houver
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o código
COPY . .

# Faz o build de produção
RUN npm run build

# Etapa 2: Servir com Nginx
FROM nginx:stable-alpine

# Remove configuração padrão do nginx e copia a nossa
RUN rm -rf /usr/share/nginx/html/*

# Copia arquivos buildados do Vite para a pasta pública do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuração customizada (opcional, se precisar de SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 3030
EXPOSE 3030

# Comando de inicialização
CMD ["nginx", "-g", "daemon off;"]
