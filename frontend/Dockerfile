FROM node:lts-slim

WORKDIR /front

# COPY . /front
# COPY package.json /front
# ENV PATH /front/node_modules/.bin:$PATH
# RUN npm install
# RUN npm install react-scripts

COPY ./app /front

ENV CI=true

COPY startup.sh /startup.sh
RUN chmod 744 /startup.sh
CMD ["/startup.sh"]