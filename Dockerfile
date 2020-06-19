FROM node:10

WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm test -- --watchAll=false
CMD ["npm", "start"]