class QuestionsController < ApplicationController
  before_action :check_and_set_user
  before_action :set_question, except: %i[index create]

  def index
    questions = @user.questions

    render json: serialized_question_json(questions)
  end

  def show
    render json: serialized_question_json(@question)
  end

  def create
    question = @user.questions.find_or_initialize_by(stack_id: params[:stack_id])
    new_question = question.new_record?
    question.add_or_update_attributes_from_params(params) if new_question

    # add new flag to JSON
    serialized_question_hash = serialized_question_json(question).serializable_hash
    serialized_question_hash['new'] = new_question

    render json: serialized_question_hash.to_json
  end

  def update
    @question.add_or_update_attributes_from_params(params)

    # the instance variable @question doesn't update to reflect changes in answers
    # so this is needed in order to get fully updated data
    updated_question = Question.find(@question.id)

    render json: serialized_question_json(updated_question)
  end

  def destroy
    @question.destroy_including_associated_data

    render json: { result: 'Question successfully deleted' }, status: 200
  end

  private

  def set_question
    @question = @user.questions.find(params[:question_id])
    render_error_if_record_not_found(@question)
  end

  def serialized_question_json(questions)
    QuestionSerializer.new(questions, include: %i[answers question_tags])
  end
end
