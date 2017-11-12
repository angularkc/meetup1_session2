FROM node:6-alpine

WORKDIR /usr/share/app

COPY package.json yarn.lock index.js tsconfig.json /usr/share/app/
COPY ./src /usr/share/app/src
RUN yarn

EXPOSE 3000

CMD node index.js