Rails.application.routes.draw do
  post 'sessions' => 'sessions#create'

  post 'users' => 'users#create'

  resources :question_tags
  resources :tags
  resources :answers
  resources :questions
end
