FROM node:19

WORKDIR /usr/src/app
COPY . .
RUN yarn install --ignore-engines

EXPOSE 3000
CMD ["node", "yarn start"]