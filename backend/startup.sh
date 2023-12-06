bundle install
bin/rails db:create
bin/rails db:migrate
bin/rails server -b 0.0.0.0