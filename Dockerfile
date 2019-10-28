
FROM node:10-alpine
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

COPY . ./
RUN npm run build

EXPOSE 9045
CMD ["npm", "dev"]