class UsersController < ApplicationController
	# GET /todos
	def index
		@users = User.all
		
		render json: @users
	end

end
