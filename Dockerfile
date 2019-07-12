From node:10.16.0-alpine

LABEL description="Twitter streaming"
LABEL maintainer="Shaofeng Liu"

WORKDIR /src/twitter-streaming

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 22992

CMD ["node", "./app/index.js"]