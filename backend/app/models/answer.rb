class Answer < ApplicationRecord
  belongs_to :user
  belongs_to :question

  validates :user_id, uniqueness: { scope: :stack_id }

  # validate for presence/length of attributes
end
