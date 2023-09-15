class AddColumnsToUsers < ActiveRecord::Migration[7.0]
  def change
      add_column :users, :is_admin, :boolean, default: false
      add_reference :todos, :user, foreign_key: true
  end
end
