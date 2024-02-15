FROM ruby:3.2.2

ARG RUBYGEMS_VERSION=3.4.19

RUN mkdir /api

WORKDIR /api

COPY Gemfile /api/Gemfile

COPY Gemfile.lock /api/Gemfile.lock

RUN gem update --system ${RUBYGEMS_VERSION} \
  && bundle install

COPY . /api

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

COPY startup.sh /startup.sh
RUN chmod 777 /startup.sh

RUN groupadd -g 1002 app \
  && useradd -m -u 1001 -g 1002 app \
  && chown -R app:app /api
USER app

CMD ["/startup.sh"]

