# Etapa 1: build
FROM node:18 AS builder

WORKDIR /app
# Etapa 1: build
FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: servir com 'serve'
FROM node:18-slim
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist /app/dist
EXPOSE 8080
CMD ["sh", "-c", "serve -s dist -l ${PORT:-8080}"]
COPY package*.json ./# Etapa 1: build
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# Etapa 2: produção
FROM node:18

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./
COPY --from=builder /app/package*.json ./

RUN npm install --only=production

EXPOSE 8080

CMD ["node", "server.js"]

RUN npm install
COPY . .

RUN npm run build

# Etapa 2: produção
FROM node:18

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./
COPY --from=builder /app/package*.json ./

RUN npm install --only=production

EXPOSE 8080

CMD ["node", "server.js"]
