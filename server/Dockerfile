FROM node:18

WORKDIR /ws-server

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]
