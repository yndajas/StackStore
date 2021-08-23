class AddIndexToTags < ActiveRecord::Migration[6.1]
  def change
    add_index :tags, :text, unique: true
  end
end
