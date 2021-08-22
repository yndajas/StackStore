class Tag < ApplicationRecord
    has_many :question_tags
end
