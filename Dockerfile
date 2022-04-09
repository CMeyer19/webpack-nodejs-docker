FROM node:alpine as base

WORKDIR /build

COPY . .

RUN npm ci
RUN npm run build

FROM node:alpine

ARG PORT=8003

ENV NODE_ENV=production
ENV PORT=${PORT}

WORKDIR /app

COPY --from=base ./build/package*.json ./
COPY --from=base ./build/build/index.js ./build/

RUN npm ci --quiet

EXPOSE ${PORT}

CMD ["npm", "start"]
