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
user4 = User.new(email: 'test4@example.com', password: 'hugahuga')
user4.save!

# todosテーブルのseedデータ
Todo.create!(todo: "Todo 1", c_date: Date.today, due_date: Date.today + 7, done: 0, memo: "Memo 1", org_filename: "file1.jpg", real_filename: "file1.jpg", url: "https://example.com", url_text: "Link 1", public: true, user_id: user1.id)
Todo.create!(todo: "Todo 2", c_date: Date.today, due_date: Date.today + 7, done: 0, memo: "Memo 2", org_filename: "file2.jpg", real_filename: "file2.jpg", url: "https://example.com", url_text: "Link 2", public: false, user_id: user1.id)
Todo.create!(todo: "Todo 3", c_date: Date.today, due_date: Date.today + 7, done: 1, memo: "Memo 3", org_filename: "file3.jpg", real_filename: "file3.jpg", url: "https://example.com", url_text: "Link 3", public: true, user_id: user2.id)
Todo.create!(todo: "Todo 4", c_date: Date.today, due_date: Date.today + 7, done: 0, memo: "Memo 4", org_filename: "file4.jpg", real_filename: "file4.jpg", url: "https://example.com", url_text: "Link 4", public: true, user_id: user2.id)
Todo.create!(todo: "Todo 5", c_date: Date.today, due_date: Date.today + 7, done: 0, memo: "Memo 5", org_filename: "file5.jpg", real_filename: "file5.jpg", url: "https://example.com", url_text: "Link 5", public: true, user_id: user3.id)
Todo.create!(todo: "Todo 6", c_date: Date.today, due_date: Date.today + 7, done: 0, memo: "Memo 6", org_filename: "file6.jpg", real_filename: "file6.jpg", url: "https://example.com", url_text: "Link 6", public: false, user_id: user3.id)
Todo.create!(todo: "Todo 7", c_date: Date.today, due_date: Date.today + 7, done: 0, memo: "Memo 7", org_filename: "file7.jpg", real_filename: "file7.jpg", url: "https://example.com", url_text: "Link 7", public: true, user_id: user4.id)
Todo.create!(todo: "Todo 8", c_date: Date.today, due_date: Date.today + 7, done: 0, memo: "Memo 8", org_filename: "file8.jpg", real_filename: "file8.jpg", url: "https://example.com", url_text: "Link 8", public: false, user_id: user4.id)
Todo.create!(todo: "Todo 9", c_date: Date.today, due_date: Date.today + 7, done: 0, memo: "Memo 9", org_filename: "file9.jpg", real_filename: "file9.jpg", url: "https://example.com", url_text: "Link 9", public: true, user_id: user4.id)
Todo.create!(todo: "Todo 10", c_date: Date.today, due_date: Date.today + 7, done: 0, memo: "Memo 10", org_filename: "file10.jpg", real_filename: "file10.jpg", url: "https://example.com", url_text: "Link 10", public: false, user_id: user4.id)
