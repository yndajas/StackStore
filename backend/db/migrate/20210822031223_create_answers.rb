class CreateAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :answers do |t|
      t.references :user, null: false, foreign_key: true
      t.references :question, null: false, foreign_key: true
      t.integer :stack_id
      t.integer :stack_question_id
      t.boolean :accepted
      t.integer :score
      t.text :body
      t.datetime :stack_created
      t.datetime :stack_updated
      t.text :notes

      t.timestamps
    end
  end
end
