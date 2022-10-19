FROM node:17-alpine

WORKDIR /spacee-backend

COPY package.json ./
COPY package-lock.json ./

RUN npm install

EXPOSE 8080

CMD [ "node", "index.js" ]