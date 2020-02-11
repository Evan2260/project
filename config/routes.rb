Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/", to: 'homes#index'
  get "/home", to: 'homes#index'


  resources :main, only: [:index] do

  end
end
