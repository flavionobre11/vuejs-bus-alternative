FROM node:16-alpine

USER root

WORKDIR /usr/bus-alternative/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080