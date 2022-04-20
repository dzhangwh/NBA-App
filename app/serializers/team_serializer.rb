class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :confName
  def name
    object.name
  end
end
