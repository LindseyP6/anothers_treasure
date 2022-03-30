class Organization < ApplicationRecord
    has_many :items
    has_many :users, through: :items

    # //aggre - all items Organization.first.items
end
