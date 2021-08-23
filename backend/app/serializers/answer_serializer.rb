class AnswerSerializer
  include JSONAPI::Serializer
  attributes :user_id, :stack_id, :stack_question_id, :accepted, :score, :body, :stack_created, :stack_updated, :notes
end
