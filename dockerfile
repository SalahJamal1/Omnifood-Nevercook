# ======================
# 1️⃣ Build stage
# ======================
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ======================
# 2️⃣ Production stage
# ======================
FROM node:20-alpine AS production

WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm install --omit=dev

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host"]
