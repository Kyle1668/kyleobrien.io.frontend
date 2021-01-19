# Create a production optimized static build
FROM node:14.15.4-alpine3.10 AS builder
WORKDIR /app
COPY ./ ./
RUN yarn install --production
RUN yarn build

# Serve the static app via an Nginx server
FROM nginx:1.19.6-alpine AS server
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build ./
ENTRYPOINT ["nginx", "-g", "daemon off;"]