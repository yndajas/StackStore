class User < ApplicationRecord
  has_many :answers
  has_many :questions
  has_many :question_tags, through: :questions
  has_secure_password
end
