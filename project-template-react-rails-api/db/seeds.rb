# User.destroy_all
# Organization.destroy_all
# Item.destroy_all 

puts "seeding..."
User.create(name:"Greg", telephone:"111-111-1111", email:"treasure@gmail.com", password: "123")
User.create(name:"Lindsey", telephone:"111-111-1111", email:"treasure@gmail.com", password: "123")
User.create(name:"Emily", telephone:"111-111-1111", email:"treasure@gmail.com", password: "123")
User.create(name:"Nicole", telephone:"111-111-1111", email:"treasure@gmail.com", password: "123")

Organization.create(name:"New Utrecht Reformed Church", telephone:"917-123-2334", address:"1827 84th Street" , longitude: -74.000430 , latitude: 40.608010 )
Organization.create(name:"New Utrecht Reformed Church2", telephone:"917-123-2334", address:"1827 84th Street" , longitude: -74.011731 , latitude: 40.613120)
Organization.create(name:"New Utrecht Reformed Church3", telephone:"917-123-2334", address:"1827 84th Street" , longitude: -73.997818 , latitude: 40.618398 )
Organization.create(name:"New Utrecht Reformed Church4", telephone:"917-123-2334", address:"1827 84th Street" , longitude: -73.986488, latitude: 40.613434)

Item.create(name: "Dresser", description: "Wooden dresser", image:"https://www.used.forsale/sh-img/137579703_10159798804663475_1364652713289027237_o_solid%2Bwood%2Bdresser.jpg", category: "furniture", user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name: "Desk", description: "Wooden desk with drawers", image:"https://www.nationaloffice.com/products/UM5028ODSK_4541.jpg" , category: "furniture", user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name: "Frying Pan Set", description: "Rachel Ray frying pan set", image:"https://i.ebayimg.com/images/g/VxYAAOSwqtlhUAeM/s-l300.jpg", user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name:"Bookshelf", description: "Solid wood 3 shelf bookcase", image: "https://ofwllc.com/wp-content/uploads/2016/05/used-solid-wood-bookshelf-for-sale-05.png", category: "furniture" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id) 
Item.create(name:"Red accent chair", description: "1960s Vintage Red Accent Chair", image: "https://chairish-prod.freetls.fastly.net/image/product/sized/19e8bf2b-202d-484f-8833-23ff3eb5f6f9/1960s-vintage-red-accent-chair-4320?aspect=fit&width=640&height=640", category: "furniture" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name: "End tables", description: "Set of two matching white end tables", image: "https://img.ksl.com/mx/mplace-classifieds.ksl.com/4102158-1648500707-964942.jpg?filter=marketplace/400x300_cropped", category: "furniture" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name:"Nancy Drew Hardback Collection", description: "Complete collection of Nancy Drew books", image: "https://images-na.ssl-images-amazon.com/images/I/91rrSqpvQkL.jpg", category: "books" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name: "Green Puffer Coat", description: "Used men’s winter coat; size medium", image: "https://image.made-in-china.com/2f0j00LkvhZWQlfjuw/Second-Hand-Used-Winter-Clothes-Thick-Coat-for-Men-Women-Children.jpg", category: "clothing" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name:"Snow boots", description: "Men’s snow boots size 9", image: "https://playitagainsports.imgix.net/images/11343-S000094830-1?auto=compress,format&fit=clip&w=800&orient=6", category: "clothing" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)


puts "finished seeding!"
#Organization.first.id