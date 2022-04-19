Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :update, :destroy]

  resources :teams, only: [:index, :show, :create, :update, :destroy]


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/login', to: 'sessions#create'

  get "/me", to: "users#show"
end
