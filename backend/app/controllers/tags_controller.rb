class TagsController < ApplicationController
  before_action :check_and_set_user

  def index
    tags = @user.tags

    render json: TagSerializer.new(tags)
  end

  def show
    tag = Tag.find_by_slug(params[:tag_slug])
    render_error_if_record_not_found(tag)
    questions = @user.questions_by_tag(tag)

    serialized_question_hash = serialized_question_json(questions).serializable_hash
    serialized_question_hash['tag'] = tag.text

    render json: serialized_question_hash.to_json
  end
end
