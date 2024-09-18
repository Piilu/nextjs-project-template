FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm ci

FROM node:20-alpine AS builder
# Build Stage
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY prisma ./prisma
COPY . .
ENV NEXT_TELEMETRY_DISABLE=1
RUN npx prisma generate                 
RUN npm run build


# Production Stage
FROM node:20-alpine AS runner
ARG APP_PORT=8000
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder  /app/next.config.js .
COPY --from=builder /app/package*.json .
COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --chown=nextjs:nodejs prisma ./prisma

# COPY --chown=nextjs:nodejs docker-bootstrap-app.sh ./
# RUN chmod +x docker-bootstrap-app.sh

ENV TZ=Europe/Helsinki
ENV PORT=${APP_PORT}
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm install -g prisma
EXPOSE ${APP_PORT}
CMD ["npm","run","start:migrate:prod"]
