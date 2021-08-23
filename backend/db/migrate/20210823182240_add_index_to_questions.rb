class AddIndexToQuestions < ActiveRecord::Migration[6.1]
  def change
    add_index :questions, %i[user_id stack_id], unique: true
  end
end
