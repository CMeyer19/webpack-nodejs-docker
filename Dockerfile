FROM node:alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY ./build/index.js ./build/

EXPOSE 8001

CMD ["npm", "start"]
