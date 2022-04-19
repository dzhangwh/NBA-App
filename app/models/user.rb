class User < ApplicationRecord
    has_many :teams, dependent: :destroy
    

    has_secure_password

    validates :username, uniqueness: true

end
