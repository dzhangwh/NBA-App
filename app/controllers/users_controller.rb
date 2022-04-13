class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

def create

    user = User.create!(user_params)
    session[:user_id] = user.id
        render json: user, only: :username, status: :created
    end

    private
    def user_params
        params.permit(:username, :password, :first_name, :last_name,)
    end

end
