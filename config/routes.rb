Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/", to: 'homes#index'
  get "/restrooms", to: 'homes#index'
  get "/restrooms/:id", to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :restrooms, only: [:index, :show] do
        resources :reviews, only: [:create, :show] do
        end
      end
    end
  end
end
