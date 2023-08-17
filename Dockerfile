FROM node:12.8.1

# Create app directory
WORKDIR /usr/src/app

COPY ./src /usr/src/app/

CMD [ "node", "server.js"]