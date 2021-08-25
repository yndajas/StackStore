class QuestionTagsController < ApplicationController
  def create
    tag = Tag.find_or_create_by(text: params[:text].lower)
    question_tag = Tag.find_or_initialize_by(question_id: params[:question_id], tag_id: tag.id)
    new_question_tag = question_tag.new_record?

    # add new flag to JSON
    serialized_question_tag_hash = QuestionTagSerializer.new(question_tag).serializable_hash
    serialized_question_tag_hash['new'] = new_question_tag

    render json: serialized_question_tag_hash.to_json
  end

  def destroy
    question_tag = QuestionTag.find(params[:question_tag_id])
    render_error_if_record_not_found(question_tag)
    tag = question_tag.tag
    question_tag.destroy
    tag.destroy if tag.question_tags.length == 0

    render json: { error: 'Tag successfully removed' }, status: 200
  end
end
