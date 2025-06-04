# Etapa 1: build
FROM node:18 AS builder

WORKDIR /app

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
