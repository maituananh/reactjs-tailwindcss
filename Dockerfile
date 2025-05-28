FROM node:19-alpine

WORKDIR /usr/src/app
COPY . .

RUN yarn install --ignore-engines

CMD ["yarn", "start"]
EXPOSE 3000