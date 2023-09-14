bundle install
bin/rails db:create
bin/rails db:migrate
# dbをseedから生成
# bin/rails g devise:install
# rails g devise_token_auth:install User auth
# rails g controller v1/auth/registrations
bin/rails server -b 0.0.0.0