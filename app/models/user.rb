class User < ApplicationRecord
    
    has_many :brackets, dependent: :destroy

    has_many :bracketteams, through: :brackets, dependent: :destroy
    

    has_secure_password

    validates :username, uniqueness: true

    validates :password, length: {maximum: 15}
end
