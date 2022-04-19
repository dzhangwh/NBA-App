class User < ApplicationRecord
    
    has_many :brackets
    
    has_many :teams, through: :brackets, dependent: :destroy
    

    has_secure_password

    validates :username, uniqueness: true

    validates :password, length: {maximum: 15}
end
