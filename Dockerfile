FROM node As development

EXPOSE 5000

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

#RUN npm run build

