FROM node:18

WORKDIR /ws-client

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
