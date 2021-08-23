class Tag < ApplicationRecord
  has_many :question_tags

  validates :text, uniqueness: true

  # module Slugifiable
  #     module InstanceMethods
  #         def slug
  #             Slugifiable::slugify(self.try(:name) || self.try(:title))
  #         end
  #     end

  #     module ClassMethods
  #         def find_by_slug(slug)
  #             self.all.find { |instance| instance.slug == slug.downcase }
  #         end
  #     end

  #     def self.slugify(string)
  #         string.downcase.gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/\-+/, '-')
  #     end
  # end
end
