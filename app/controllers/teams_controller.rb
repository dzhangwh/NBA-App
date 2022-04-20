class TeamsController < ApplicationController
    
    def index 
        teams = Team.all
        render json: teams, status: :ok
    end

    def show 
        teams = Team.find(params[:id])
        render json: teams, status: :ok
    end

    def create
        teams = Team.create!(team_params)
        render json: teams, status: :created
    end

    private

    def team_params
        params.permit(:name, :confName, :user_id, :team_id )
    end

end


