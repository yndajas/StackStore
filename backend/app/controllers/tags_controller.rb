class TagsController < ApplicationController
  def index
    user = User.find(params[:user_id])
    tags = user.tags

    render json: TagSerializer.new(tags)
  end

  def show
    user = User.find(params[:user_id])
    tag = Tag.find_by_slug(params[:tag_slug])
    render_error_if_record_not_found(tag)
    questions = user.questions_by_tag(tag)

    render json: QuestionSerializer.new(questions)
  end
end
