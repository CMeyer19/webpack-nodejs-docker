FROM node:alpine as base

ENV NODE_ENV=production

WORKDIR /build

COPY * ./

RUN npm ci --only=production --quiet
CMD ["npm", "run", "build"]

FROM node:alpine

WORKDIR /app

COPY --from=base ./build/node_modules ./node_modules
COPY --from=base ./build/package*.json ./
COPY --from=base ./build/index.js ./build/

EXPOSE 8001

CMD ["npm", "start"]
