FROM node:20.9.0-alpine3.18 as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25.3
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
