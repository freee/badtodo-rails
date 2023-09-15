# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# usersテーブルのseedデータ
user1 = User.new(email: 'test1@example.com', password: 'hugahuga')
user1.save!
user2 = User.new(email: 'test2@example.com', password: 'hugahuga')
user2.save!
user3 = User.new(email: 'test3@example.com', password: 'hugahuga')
user3.save!

# todosテーブルのseedデータ
Todo.create!(todo: "Todo 1", c_date: Date.today, due_date: Date.today + 7, done: 0, memo: "Memo 1", org_filename: "file1.jpg", real_filename: "file1.jpg", url: "https://example.com", url_text: "Link 1", public: true, user_id: 1)
Todo.create!(todo: "Todo 2", c_date: Date.today, due_date: Date.today + 7, done: 0, memo: "Memo 2", org_filename: "file2.jpg", real_filename: "file2.jpg", url: "https://example.com", url_text: "Link 2", public: false, user_id: 1)
Todo.create!(todo: "Todo 3", c_date: Date.today, due_date: Date.today + 7, done: 1, memo: "Memo 3", org_filename: "file3.jpg", real_filename: "file3.jpg", url: "https://example.com", url_text: "Link 3", public: true, user_id: 2)

