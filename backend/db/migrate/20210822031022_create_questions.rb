class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :stack_id
      t.integer :score
      t.text :title
      t.text :body
      t.datetime :stack_created
      t.datetime :stack_updated
      t.text :notes

      t.timestamps
    end
  end
end
