class AddIndexToQuestionTags < ActiveRecord::Migration[6.1]
  def change
    add_index :question_tags, %i[question_id tag_id], unique: true
  end
end
