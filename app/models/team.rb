class Team < ApplicationRecord

  has_many :brackets, dependent: :destroy
  has_many :users, through: :brackets
end
