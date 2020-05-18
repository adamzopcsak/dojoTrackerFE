FROM node:10

WORKDIR '/app'

RUN npm install

CMD ["npm", "start"]