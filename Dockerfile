
FROM node:10-alpine
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

COPY . ./
RUN npm run build

EXPOSE 3000
CMD ["npm", "dev"]