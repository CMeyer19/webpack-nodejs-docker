# pull official base image
FROM node:alpine AS BUILD_IMAGE
ENV NODE_ENV=production

# set working directory
WORKDIR /app

# add app
COPY ./build/index.js .

EXPOSE 8001

# start app
CMD ["npm", "start"]
