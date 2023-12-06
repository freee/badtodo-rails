#!/bin/sh
docker compose exec api rails db:create
docker compose exec api rails db:migrate
docker compose exec api rails db:seed