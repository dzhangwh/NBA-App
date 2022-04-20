class Team < ApplicationRecord


  has_many :bracketteams, dependent: :destroy
  has_many :brackets, through: :bracketteams, dependent: :destroy

end
