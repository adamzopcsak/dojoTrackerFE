FROM node:10


RUN git clone -b dev https://ce34ce45124a13b353ad81bc0841e71144e25719:x-oauth-basic@github.com/gaKoltai/dojoTrackerFE.git /app

WORKDIR '/app'
# COPY package*.json ./
RUN npm install

# COPY . .
CMD ["npm", "start"]