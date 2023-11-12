FROM node:18-slim

WORKDIR /app/

COPY package*.json .

RUN chown -R node:node /app
USER node

RUN npm install

COPY . .  

CMD ["npm","run", "dev"]
