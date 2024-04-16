FROM node:18.13.0 AS node-build

WORKDIR /app

COPY package*.json ./
RUN npm install -g @angular/cli@17.2.2
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable
COPY default.conf /etc/nginx/conf.d
COPY --from=node-build /app/dist/sportapp/browser/ usr/share/nginx/html
EXPOSE 80
