class ApplicationController < ActionController::API
  def render_error_if_user_mismatch
    if params[:id]
      user = User.find(params[:id])
      render json: { error: 'access denied' } if !user || !request.headers['token'].try('==', user.token)
    end
  end
end
