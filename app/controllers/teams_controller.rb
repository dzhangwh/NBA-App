class TeamsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index 
        teams = Team.all
        render json: teams, status: :ok
    end

    def show 
        teams = Team.find(params[:id])
        render json: teams, status: :ok
    end

end


