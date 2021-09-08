# pull
FROM node:14-alpine

# set the working direction
WORKDIR /app


# install app dependencies
COPY package.json ./

COPY package-lock.json ./

COPY tsconfig.json ./

RUN npm install

# add app
COPY . ./

EXPOSE 8080

# start app
CMD ["npm", "run", "dev"]
