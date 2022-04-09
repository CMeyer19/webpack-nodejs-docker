FROM node:alpine as base

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

EXPOSE 8001

CMD ["npm", "start"]
