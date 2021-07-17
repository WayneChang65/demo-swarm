From node:14.17.1-alpine3.13

WORKDIR /home/node

COPY . .

RUN npm install

CMD ["node", "server.js"]
