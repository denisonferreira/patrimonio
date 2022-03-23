FROM node:14

WORKDIR /patrim-app
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT npm start