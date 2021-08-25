class Tag < ApplicationRecord
  has_many :question_tags
  has_many :questions, through: :question_tags

  validates :text, uniqueness: true, length: { minimum: 1 }, presence: true

  def slug
    text.downcase.gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/-+/, '-')
  end

  def self.find_by_slug(slug)
    all.find { |tag| tag.slug == slug }
  end
end
