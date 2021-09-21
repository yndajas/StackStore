class ApplicationController < ActionController::API
  def check_and_set_user
    @user = User.find(params[:user_id])
    render json: { error: 'access denied' } if !@user || !request.headers['token'].try('==', @user.token)
  end

  def render_error_if_record_not_found(record)
    render json: { error: 'Record not found' }, status: 404 unless record
  end

  def serialized_question_json(questions)
    QuestionSerializer.new(questions, include: %i[answers question_tags])
  end
end
