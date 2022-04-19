class TeamsController < ApplicationController
    
    def index 
        teams = Team.all
        render json: teams, status: :ok
    end

    def show 
        teams = Team.find(params[:id])
        render json: teams, status: :ok
    end

end


