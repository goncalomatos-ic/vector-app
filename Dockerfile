FROM node:12.15 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
ARG API_ENDPOINT_ARG
ENV API_ENDPOINT=$API_ENDPOINT_ARG
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
ENV API_ENDPOINT="http://vector-api:8000"
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


#FROM nginx:1.12-alpine
#ENV API_ENDPOINT=http://vector-api:8000
#COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


#WORKDIR /usr/share/nginx/html
#RUN apk add --no-cache gettext
#COPY nginx-entrypoint.sh /
#COPY --from=builder /app/dist ./
#ENTRYPOINT [ "sh", "/nginx-entrypoint.sh" ]