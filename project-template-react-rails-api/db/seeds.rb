User.destroy_all
Organization.destroy_all
Item.destroy_all 

puts "seeding..."
user1 = User.create(name:"Greg", telephone:"111-111-1111", email:"treasure@gmail.com")

organization1 = Organization.create(name:"New Utrecht Reformed Church", telephone:"917-123-2334", address:"1827 84th Street" , longitude: -74.000430 , latitude: 40.608010 )

item1 = Item.create(name: "Dresser", description: "Wooden dresser", image:"https://www.used.forsale/sh-img/137579703_10159798804663475_1364652713289027237_o_solid%2Bwood%2Bdresser.jpg" , category: "furniture" , organization_id: organization1.id, user_id: user1.id)

puts "finished seeding!"