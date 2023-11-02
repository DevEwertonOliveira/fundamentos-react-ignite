FROM node:18-slim

WORKDIR /home/node/app/

COPY package*.json .

RUN npm install

COPY public ./public
COPY src ./src


CMD ["npm","run", "dev"]
