FROM node:12.13-alpine as production
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
ENV TZ=Asia/Shanghai
FROM node:12.13-alpine
WORKDIR /app
COPY --from=production /app ./
ENV TZ=Asia/Shanghai
EXPOSE 7001
CMD ["npm", "run", "start:prod"]