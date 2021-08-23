class QuestionSerializer
  include JSONAPI::Serializer
  attributes :user_id, :stack_id, :score, :title, :body, :stack_created, :stack_updated, :notes
end
