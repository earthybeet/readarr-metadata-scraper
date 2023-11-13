FROM node:18-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json .
COPY package-lock.json .
COPY certs/ ./certs
RUN npm install
COPY src/ ./src
EXPOSE 80 443
CMD [ "npm", "start"]