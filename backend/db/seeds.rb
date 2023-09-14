# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Todo.create(owner: 1, todo: 'Task 1', c_date: Date.today, due_date: Date.tomorrow, done: 0, memo: 'Memo 1')
Todo.create(owner: 1, todo: 'Task 2', c_date: Date.today, due_date: Date.tomorrow, done: 0, memo: 'Memo 2')
Todo.create(owner: 1, todo: 'Task 3', c_date: Date.today, due_date: Date.tomorrow, done: 0, memo: 'Memo 3')