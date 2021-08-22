Rails.application.routes.draw do
  post 'sessions' => 'sessions#create'

  post 'users' => 'users#create'

  get 'users/:user_id/questions' => 'questions#index'
  get 'users/:user_id/questions/:question_id' => 'questions#show'
  post 'users/:user_id/questions' => 'questions#create'
  patch 'users/:user_id/questions/:question_id' => 'questions#update'

  get 'users/:user_id/tags' => 'tags#index'
  get 'users/:user_id/tags/:tag_slug' => 'tags#show'
end
