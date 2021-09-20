Rails.application.routes.draw do
  post 'sessions' => 'sessions#create'

  post 'users' => 'users#create'

  scope 'users/:user_id' do
    resources :questions, except: %i[new edit], param: :question_id
    resources :tags, only: %i[index show], param: :tag_slug
  end
end
