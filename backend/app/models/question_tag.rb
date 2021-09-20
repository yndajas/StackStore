class QuestionTag < ApplicationRecord
  belongs_to :question
  belongs_to :tag

  validates :question_id, uniqueness: { scope: :tag_id }, length: { minimum: 1 }, presence: true
  validates :tag_id, length: { minimum: 1 }, presence: true

  def text
    tag.text
  end

  def self.create_or_update_from_texts_and_question(texts, question)
    texts.each do |text|
      unless question.tags.find_by(text: text)
        tag = Tag.find_or_create_by(text: text)
        create(question: question, tag: tag)
      end
    end
  end
end
