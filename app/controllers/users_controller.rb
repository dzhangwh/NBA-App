class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def index 
        users = User.all
        render json: users, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created

    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :ok

    end

    def me
        user = User.find_by(id: session[:user_id])
        if user
            return render json: user, status: :ok
        end
    end

    private
    def user_params
        params.permit(:username, :password)
    end

end
