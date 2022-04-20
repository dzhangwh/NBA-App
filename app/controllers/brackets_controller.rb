

class BracketsController < ApplicationController
    skip_before_action :authorized, only: :index

    def index
        brack = Bracket.all
        render json: brack, status: :ok
    end

    def show
        bracket = Bracket.find_by(id: params[:id])
        render json: bracket, status: :ok
    end

    def create
        teams = params[:teams] 
       
        teams_instances = teams.map {|o|  
       
        if !!Team.find_by(name: o["fullName"])
             Team.find_by(name: o["fullName"])
        else 
             Team.create(name: o["fullName"], confName: o["confName"])
        end 
        }
       
        bracket = Bracket.create(name: params[:name], user_id: params[:user_id])
        
        teams_instances.each{|o| Bracketteam.create(bracket_id: bracket.id, team_id: o.id)}
        
        render json: bracket, status: :created
    end

    private

    def bracket_params
        params.permit(:name, :user_id, :teams )
    end
end
