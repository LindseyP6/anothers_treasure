class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :telephone, :email, :password_digest
end
