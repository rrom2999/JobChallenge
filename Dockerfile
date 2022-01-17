FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm i pg

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]