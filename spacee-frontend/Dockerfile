FROM node:17-alpine

# main application directory
WORKDIR /frontend

COPY package.json ./

# install node packages
RUN npm install

# run on port 3000
EXPOSE 3000

# start the app
CMD [ "npm", "start" ]