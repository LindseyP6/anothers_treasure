class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :telephone, :address, :longitude, :latitude

  has_many :items
end
