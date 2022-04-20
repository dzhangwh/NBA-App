class BracketSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :teams
end
