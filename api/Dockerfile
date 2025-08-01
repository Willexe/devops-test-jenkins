# Usa imagem oficial do Node.js
FROM node:18

# Cria e usa diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package.json yarn.lock ./

# Instala as dependências do projeto
RUN yarn install

# Garante que o nodemon seja instalado de forma global e executável
RUN yarn global add nodemon && \
    chmod +x $(yarn global bin)/nodemon

# Adiciona o caminho do yarn global ao PATH (por precaução)
ENV PATH="${PATH}:$(yarn global bin)"

# Copia o restante da aplicação
COPY . .

# Expõe a porta
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["nodemon", "index.js"]

