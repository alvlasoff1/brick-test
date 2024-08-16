FROM node:22-alpine3.20
LABEL description="Test task for Brick"

WORKDIR /app

COPY app.js .

RUN addgroup appgroup && adduser -Sg appgroup appuser && apk add curl==8.9.0-r0
USER appuser