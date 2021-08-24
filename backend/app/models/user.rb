class User < ApplicationRecord
  has_many :answers
  has_many :questions
  has_many :question_tags, through: :questions
  has_secure_password

  validates :email, uniqueness: true

  def questions
    Question.where(user_id: id)
  end

  def tags
    question_tags.collect(&:tag).uniq
  end

  def questions_by_tag(tag)
    questions.collect do |question|
      question if question.tags.include?(tag)
    end
  end
end
