class QuestionTagSerializer
  include JSONAPI::Serializer
  belongs_to :question
  belongs_to :tag
  attributes :question_id, :tag_id, :text
end
