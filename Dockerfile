FROM node:12.15 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#FROM nginx
#ENV FLASK_APP=flask_app
#RUN rm /etc/nginx/conf.d/default.conf
#COPY default.conf /etc/nginx/conf.d/default.template
#EXPOSE 80
#CMD ["/bin/bash","-c","envsubst < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]