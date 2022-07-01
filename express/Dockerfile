FROM node:16-alpine as deps
COPY package*.json /usr/app/
WORKDIR /usr/app
RUN npm ci --no-fund --no-audit

FROM deps as build
COPY . /usr/app
RUN npm run build --production

FROM deps as dev
COPY . /usr/app
RUN npm run start:dev

FROM node:16-alpine as deploy
COPY package*.json /usr/app/
COPY --from=build /usr/app/dist /usr/app/dist
WORKDIR /usr/app
RUN npm start

