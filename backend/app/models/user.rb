class User < ApplicationRecord
  has_many :answers
  has_many :questions
  has_many :question_tags, through: :questions
  has_secure_password

  validates :email, uniqueness: true
  validates :email, length: { minimum: 1 }, presence: true
  validates :password_digest, length: { minimum: 1 }, presence: true

  def questions
    Question.where(user_id: id)
  end

  def tags
    question_tags.collect(&:tag).uniq
  end

  def questions_by_tag(tag)
    questions.collect do |question|
      question if question.tags.include?(tag)
    end.compact
  end
end
