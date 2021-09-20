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
    %w[score title body notes].each do |attribute|
      send("#{attribute}=", params[:"#{attribute}"]) if params[:"#{attribute}"]
    end

    %w[stack_created stack_updated].each do |attribute|
      send("#{attribute}=", Time.at(params[:"#{attribute}"] / 1000)) if params[:"#{attribute}"]
    end

    save

    if params[:answers]
      # add/update answers
      params[:answers].each do |answer_hash|
        Answer.create_or_update_from_hash_and_question(answer_hash, self)
      end

      # remove answers no longer present in source
      answers_stack_ids = params[:answers].collect { |answer| answer[:stack_id] }
      answers.each { |answer| answer.destroy unless answers_stack_ids.include?(answer.stack_id) }
    end

    if params[:tags]
      # add/update tags
      texts = params[:tags].split(',').collect { |text| text.strip.downcase }
      QuestionTag.create_or_update_from_texts_and_question(texts, self)

      # delete tags no longer present in source
      question_tags.each { |question_tag| question_tag.destroy unless texts.include?(question_tag.text) }
    end
  end
end
