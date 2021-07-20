From node:14-buster-slim

WORKDIR /home/node

COPY . .

RUN npm install

CMD ["node", "server.js"]
