class TodosController < ApplicationController
  before_action :set_todo, only: %i[ show update destroy ]

  # GET /todos
  def index

    if !params[:todo]
      @todos = Todo.all
    elsif params[:isLike] == "true"
      @todos = Todo.where("user_id=1 AND todo LIKE '%#{params[:todo]}%'")
    else
      @todos = Todo.where("user_id=1 AND todo = '#{params[:todo]}'") 
    end

    render json: @todos
  end

  # GET /todos/1
  def show
    render json: @todo
  end

  # POST /todos
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo, status: :created, location: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1
  def update
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  def destroy
    @todo.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def todo_params
      params.require(:todo).permit(:user_id, :todo, :c_date, :due_date, :done, :memo, :org_filename, :real_filename, :url, :url_text, :public)
    end
end
