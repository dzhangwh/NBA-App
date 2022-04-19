class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :show]

def create

    user = User.create!(user_params)
    session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: params[:id])
        if user.id != session[:user_id]
            render json: {error: "Not Authorized"}, status: :unauthorized
        else
            render json: user, status: :ok
        end
    end

    private
    def user_params
        params.permit(:username, :password, :firstname, :lastname,)
    end

end
