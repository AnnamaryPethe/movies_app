FROM node:20.9.0-alpine3.18

RUN apk --no-cache add make build-base

WORKDIR /app
COPY package*.json .
RUN npm install --production
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]
