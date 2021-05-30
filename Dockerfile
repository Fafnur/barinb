### STAGE 1: Build ###
FROM node:14.17-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install
COPY . .
ENV GOOGLE_MAPS_KEY ''
RUN yarn run ng build --configuration production

### STAGE 2: Run ###
FROM nginx:1.21-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/barinb /usr/share/nginx/html
