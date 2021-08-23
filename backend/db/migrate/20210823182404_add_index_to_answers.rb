class AddIndexToAnswers < ActiveRecord::Migration[6.1]
  def change
    add_index :answers, %i[user_id stack_id], unique: true
  end
end
