class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :category, :organization_id, :user_id
end
