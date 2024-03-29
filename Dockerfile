FROM node:latest
ENV LANG C.UTF-8

RUN npm i -g yarn


ENV APP_HOME /myapp
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
ADD . $APP_HOME

RUN yarn install
