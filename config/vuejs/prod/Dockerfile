FROM node:12.14.1-alpine

WORKDIR /app
ADD ./app /app

ENV NODE_ENV=production \
    HOST='0.0.0.0'

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]