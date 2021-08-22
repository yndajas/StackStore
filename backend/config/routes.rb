Rails.application.routes.draw do
  resources :question_tags
  resources :tags
  resources :answers
  resources :questions
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
