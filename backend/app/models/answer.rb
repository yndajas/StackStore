class Answer < ApplicationRecord
  belongs_to :user
  belongs_to :question

  validates :user_id, uniqueness: { scope: :stack_id }

  # validate for presence/length of attributes

  def self.create_or_update_from_hash_and_question(hash, question)
    answer = find_or_initialize_by(user_id: question.user_id, stack_id: hash[:stack_id])
    answer.question = question
    %w[stack_question_id accepted score body stack_created stack_updated notes].each do |attribute|
      answer.send("#{attribute}=", hash[:"#{attribute}"])
    end
    save
  end
end
