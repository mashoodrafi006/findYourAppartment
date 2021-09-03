FROM node:alpine
#FROM mongo:4.4.4
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 3000
CMD [ "npm","start" ]