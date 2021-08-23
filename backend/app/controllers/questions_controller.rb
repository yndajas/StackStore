class QuestionsController < ApplicationController
  before_action :render_error_if_user_mismatch

  def index
    user = User.find(params[:user_id])
    questions = user.questions
    render json: QuestionSerializer.new(questions)
  end

  def show
    question = Question.find_by(user_id: params[:user_id], id: params[:question_id])
    if question
      render json: QuestionSerializer.new(question)
    else
      render json: { error: "Question with ID #{params[:question_id]} not found for current user" }, status: 404
    end
  end

  def create
    question = Question.find_or_initialize_by(user_id: params[:user_id], stack_id: params[:stack_id])
    new_question = question.new_record?
    question.update_from_params(params) if new_question

    serialized_question_hash = QuestionSerializer.new(question).serializable_hash
    serialized_question_hash['new'] = new_question
    render json: serialized_question_hash.to_json
  end

  def update
    question = Question.find(params[:question_id])
    question.update_from_params(params)

    render json: QuestionSerializer.new(question)
  end

  # add delete?
end
