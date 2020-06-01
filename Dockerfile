FROM node:12.16.2-alpine

WORKDIR /usr/app
COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn sequelize db:migrate

EXPOSE 3333
CMD ["yarn", "start"]