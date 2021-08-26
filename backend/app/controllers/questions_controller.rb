class QuestionsController < ApplicationController
  before_action :check_and_set_user

  def index
    questions = @user.questions

    render json: QuestionSerializer.new(questions)
  end

  def show
    set_question(params[:question_id])
    render_error_if_record_not_found(@question)

    render json: QuestionSerializer.new(@question)
  end

  def create
    question = @user.questions.find_or_initialize_by(stack_id: params[:stack_id])
    new_question = question.new_record?
    question.add_or_update_attributes_from_params(params) if new_question

    # add new flag to JSON
    serialized_question_hash = QuestionSerializer.new(question).serializable_hash
    serialized_question_hash['new'] = new_question

    render json: serialized_question_hash.to_json
  end

  def update
    set_question(params[:question_id])
    render_error_if_record_not_found(@question)
    @question.add_or_update_attributes_from_params(params)

    render json: QuestionSerializer.new(@question)
  end

  def destroy
    set_question(params[:question_id])
    render_error_if_record_not_found(@question)
    @question.answers.destroy_all
    @question.question_tags.destroy_all
    @question.destroy

    render json: { error: 'Question successfully deleted' }, status: 200
  end

  private

  def set_question(question_id)
    @question = @user.questions.find(question_id)
  end
end
