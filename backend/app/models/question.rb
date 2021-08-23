class Question < ApplicationRecord
  belongs_to :user
  has_many :answers
  has_many :question_tags

  validates :user_id, uniqueness: { scope: :stack_id }

  # validate for presence/length of attributes

  def update_from_params(params)
    %w[score title body stack_created stack_updated notes].each do |attribute|
      send("#{attribute}=", params[:"#{attribute}"])
    end
    save
  end
end
