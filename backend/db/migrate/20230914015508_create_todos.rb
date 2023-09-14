class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.integer :owner
      t.text :todo
      t.date :c_date
      t.date :due_date
      t.integer :done
      t.text :memo
      t.string :org_filename
      t.string :real_filename
      t.string :url
      t.string :url_text
      t.boolean :public

      t.timestamps
    end
  end
end
