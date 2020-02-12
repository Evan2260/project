# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

restroom1 = Restroom.create!(business_name: "Papa Ginos", location: "Bridgewater, MA", restroom_image: "https://www.johnston.biz/wp-content/uploads/2017/06/Bathroom.jpg", sanitation: "Clean as a whistle!", payment: false, paying_customer: false, employee_only: false)

restroom2 = Restroom.create!(business_name: "JJ Foley's Bar & Grille", location: "77 Summer Street, Boston MA", restroom_image: "https://lovelace-media.imgix.net/getty/168314319.jpg", sanitation: "Disgusting", payment: false, paying_customer: false, employee_only: false)

restroom3 = Restroom.create!(business_name: "Tony's Tavern", location: "100 High Street, Dorchester MA", restroom_image: "https://i.ytimg.com/vi/BzlvZfw8Ugw/maxresdefault.jpg", sanitation: "Absolutely Raunchy", payment: false, paying_customer: false, employee_only: false)

restroom4 = Restroom.create!(business_name: "Tim's Fine Dining", location: "1200 Boylston Street, Boston MA", restroom_image: "https://hips.hearstapps.com/ghk.h-cdn.co/assets/cm/15/11/480x386/54ffafd21ed93-toilet-seat-germs-orig-master-1.jpg?resize=480:*", sanitation: "So clean, you could eat off the floor.", payment: false, paying_customer: true, employee_only: false)

restroom5 = Restroom.create!(business_name: "Joe's Gas Station", location: "1550 Campbello Ave, Brockton MA", restroom_image: "https://vignette.wikia.nocookie.net/creepypasta/images/5/56/Public_toilet.jpg/revision/latest?cb=20150404202333", sanitation: "There was blood all over the wall. I wouldn't go to this bathroom even if it was the last bathroom on earth.", payment: false, paying_customer: false, employee_only: false)
