# Base image
FROM node:alpine AS builder

ARG GQL_ENV=dev
ENV GQL_ENV=${GQL_ENV}

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build:user

# Start the server using the production build
CMD [ "node", "dist/apps/user/main.js" ]
