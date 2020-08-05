FROM node:12.14.1-alpine

WORKDIR /app

RUN deluser --remove-home node
ARG USER_ID=0
RUN addgroup -S appuser && adduser -S -u ${USER_ID} appuser  -G appuser
USER appuser

CMD npm install && npm run build && npm run start
