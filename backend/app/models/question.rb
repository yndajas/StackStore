class Question < ApplicationRecord
  belongs_to :user
  has_many :answers
  has_many :question_tags
  has_many :tags, through: :question_tags

  validates :user_id, uniqueness: { scope: :stack_id }, length: { minimum: 1 }, presence: true
  validates :stack_id, length: { minimum: 1 }, presence: true
  validates :title, length: { minimum: 1 }, presence: true
  validates :body, length: { minimum: 1 }, presence: true

  def add_or_update_attributes_from_params(params)
    %w[score title body].each do |attribute|
      send("#{attribute}=", params[:"#{attribute}"])
    end
    %w[stack_created stack_updated].each do |attribute|
      send("#{attribute}=", Time.at(params[:"#{attribute}"]))
    end
    save

    # add/update answers
    if params[:answers]
      params[:answers].each do |answer_hash|
        Answer.create_or_update_from_hash_and_question(answer_hash, self)
      end
    end

    # remove answers no longer present in source
    if params[:answers]
      answers_stack_ids = params[:answers].collect { |answer| answer[:id] }
      answers.each { |answer| answer.destroy unless answers_stack_ids.include?(answer.stack_id) }
    end
  end
end
