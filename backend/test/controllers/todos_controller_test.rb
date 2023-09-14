require "test_helper"

class TodosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @todo = todos(:one)
  end

  test "should get index" do
    get todos_url, as: :json
    assert_response :success
  end

  test "should create todo" do
    assert_difference("Todo.count") do
      post todos_url, params: { todo: { c_date: @todo.c_date, done: @todo.done, due_date: @todo.due_date, memo: @todo.memo, org_filename: @todo.org_filename, owner: @todo.owner, public: @todo.public, real_filename: @todo.real_filename, todo: @todo.todo, url: @todo.url, url_text: @todo.url_text } }, as: :json
    end

    assert_response :created
  end

  test "should show todo" do
    get todo_url(@todo), as: :json
    assert_response :success
  end

  test "should update todo" do
    patch todo_url(@todo), params: { todo: { c_date: @todo.c_date, done: @todo.done, due_date: @todo.due_date, memo: @todo.memo, org_filename: @todo.org_filename, owner: @todo.owner, public: @todo.public, real_filename: @todo.real_filename, todo: @todo.todo, url: @todo.url, url_text: @todo.url_text } }, as: :json
    assert_response :success
  end

  test "should destroy todo" do
    assert_difference("Todo.count", -1) do
      delete todo_url(@todo), as: :json
    end

    assert_response :no_content
  end
end
