class QuestionTag < ApplicationRecord
  belongs_to :question
  belongs_to :tag

  validates :question_id, uniqueness: { scope: :tag_id }, length: { minimum: 1 }, presence: true
  validates :tag_id, length: { minimum: 1 }, presence: true
end
