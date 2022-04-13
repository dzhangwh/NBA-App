class User < ApplicationRecord
    has_many :teams, dependent: :destroy
    has_many :players, through: :teams, dependent: :destroy

    has_secure_password

    validates :username, uniqueness: true

end
