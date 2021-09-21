class TagSerializer
  include JSONAPI::Serializer
  has_many :question_tags
  attributes :text, :slug
end
