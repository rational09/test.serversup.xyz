FROM node:slim
RUN apt-get update && apt-get install -y vim
WORKDIR /malhar/app
COPY . /malhar/app
RUN npm install
RUN npm install cors 
EXPOSE 3000
CMD node index.js

