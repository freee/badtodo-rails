Rails.application.routes.draw do
  resources :todos
  #  URLから/vi/を消去 例http://localhost:3001/auth
  # todo: vi導入
  mount_devise_token_auth_for 'User', at: 'auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
