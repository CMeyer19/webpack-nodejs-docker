FROM node:alpine as base

ENV NODE_ENV=development

WORKDIR /build

COPY . .

RUN npm ci
RUN npm run build

FROM node:alpine

ENV NODE_ENV=production

WORKDIR /app

COPY --from=base ./build/package*.json ./
COPY --from=base ./build/build/index.js ./build/

RUN npm ci --quiet

EXPOSE $PORT

CMD ["npm", "start", "${PORT}"]
