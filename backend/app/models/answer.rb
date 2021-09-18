class Answer < ApplicationRecord
  belongs_to :user
  belongs_to :question

  validates :user_id, uniqueness: { scope: :stack_id }, length: { minimum: 1 }, presence: true
  validates :question_id, length: { minimum: 1 }, presence: true
  validates :stack_id, length: { minimum: 1 }, presence: true
  validates :body, length: { minimum: 1 }, presence: true

  def self.create_or_update_from_hash_and_question(hash, question)
    answer = find_or_initialize_by(user_id: question.user_id, stack_id: hash[:id])
    answer.question = question
    %w[stack_question_id accepted score body].each do |attribute|
      answer.send("#{attribute}=", hash[:"#{attribute}"])
    end
    %w[stack_created stack_updated].each do |attribute|
      answer.send("#{attribute}=", Time.at(hash[:"#{attribute}"])) if hash[:"#{attribute}"]
    end
    answer.save
  end
end
