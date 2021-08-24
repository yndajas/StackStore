class Question < ApplicationRecord
  belongs_to :user
  has_many :answers
  has_many :question_tags
  has_many :tags, through: :question_tags

  validates :user_id, uniqueness: { scope: :stack_id }

  # validate for presence/length of attributes

  def add_or_update_attributes_from_params(params)
    %w[score title body stack_created stack_updated notes].each do |attribute|
      send("#{attribute}=", params[:"#{attribute}"])
    end
    save

    # add/update answers
    params[:answers].each { |answer_hash| Answer.create_or_update_from_hash_and_question(answer_hash, self) }

    # remove answers no longer present in source
    answers_stack_ids = params[:answers].collect(&:stack_id)
    answers.each { |answer| answer.destroy unless answers_stack_ids.include?(answer.stack_id) }
  end
end
