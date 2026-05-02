FROM node:18-alpine
WORKDIR /app
COPY app/package.json .
RUN apt get update && apt npm install
COPY app/ .
EXPOSE 3000
CMD ["node" , "index.js"]
