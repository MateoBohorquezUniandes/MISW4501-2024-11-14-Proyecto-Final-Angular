FROM node:18.13.0

WORKDIR /usr/src/app

COPY . /usr/src/app

EXPOSE 4200/tcp

RUN npm install -g @angular/cli@17.2.2

RUN npm install

CMD ["ng", "serve", "--configuration", "production", "--host", "0.0.0.0"]

