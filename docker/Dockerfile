FROM node:17

WORKDIR /server

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=$PORT

EXPOSE $PORT

CMD ["npm", "start"]