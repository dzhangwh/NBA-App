class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create, :destroy]

    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
      end

end