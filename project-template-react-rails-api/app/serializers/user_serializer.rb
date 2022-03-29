class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :telephone, :email, :created_at

end
