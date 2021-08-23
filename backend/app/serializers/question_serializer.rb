class QuestionSerializer
  include JSONAPI::Serializer
  has_many :answers
  has_many :question_tags
  attributes :user_id, :stack_id, :score, :title, :body, :stack_created, :stack_updated, :notes
end
