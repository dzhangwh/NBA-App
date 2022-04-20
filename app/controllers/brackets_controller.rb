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

end
