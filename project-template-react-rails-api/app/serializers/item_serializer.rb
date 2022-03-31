class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :category, :org_name, :user_name, :organization_id
end
