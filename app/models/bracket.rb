class Bracket < ApplicationRecord

    has_many :bracketteams, dependent: :destroy
    has_many :teams, through: :bracketteams,  dependent: :destroy
   

    belongs_to :user
  
end
