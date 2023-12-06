class RemoveOwnerFromTodos < ActiveRecord::Migration[7.0]
  def change
    remove_column :todos, :owner
  end
end
