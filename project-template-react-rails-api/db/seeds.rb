User.destroy_all
Organization.destroy_all
Item.destroy_all 

puts "seeding..."
# User.create(name:"Greg", telephone:"111-111-1111", email:"treasure@gmail.com")
# User.create(name:"Lindsey", telephone:"111-111-1111", email:"treasure@gmail.com")
# User.create(name:"Emily", telephone:"111-111-1111", email:"treasure@gmail.com")
# User.create(name:"Nicole", telephone:"111-111-1111", email:"treasure@gmail.com")

Organization.create(name:"New Utrecht Reformed Church", telephone:"917-123-2334", address:"1827 84th Street" , longitude: -74.000430 , latitude: 40.608010 )
Organization.create(name:"New Utrecht Reformed Church2", telephone:"917-123-2334", address:"1827 84th Street" , longitude: -74.000430 , latitude: 40.608010 )
Organization.create(name:"New Utrecht Reformed Church3", telephone:"917-123-2334", address:"1827 84th Street" , longitude: -74.000430 , latitude: 40.608010 )
Organization.create(name:"New Utrecht Reformed Church4", telephone:"917-123-2334", address:"1827 84th Street" , longitude: -74.000430 , latitude: 40.608010 )

Item.create(name: "Dresser", description: "Wooden dresser", image:"https://www.used.forsale/sh-img/137579703_10159798804663475_1364652713289027237_o_solid%2Bwood%2Bdresser.jpg", category: "furniture", organization_id: Organization.first.id)
Item.create(name: "Desk", description: "Wooden dresser", image:"https://www.used.forsale/sh-img/137579703_10159798804663475_1364652713289027237_o_solid%2Bwood%2Bdresser.jpg" , category: "furniture" , organization_id: Organization.first.id)
Item.create(name: "frying pan", description: "Wooden dresser", image:"https://www.used.forsale/sh-img/137579703_10159798804663475_1364652713289027237_o_solid%2Bwood%2Bdresser.jpg" , category: "furniture" , organization_id: Organization.first.id)

puts "finished seeding!"
#Organization.first.id