const RestaurantAPI = {
  restaurants: [ {
      name: 'The Halal Guys',
      address: 'W 53rd St 6th Ave New York, NY 10019',
      phone: '',
      rating: 4.5,
      cuisine: 'Food Stands',
      latitude: 40.7618,
      longitude: -73.9792,
      yelp_link: 'https://www.yelp.com/biz/the-halal-guys-new-york-2?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
      img_link: 'https://s3-media2.fl.yelpcdn.com/bphoto/i6QRVRliZ42stZUp7795jQ/o.jpg' },
     {
      name: 'Bibble & Sip',
      address: '253 W 51st St New York, NY 10019',
      phone: '(646) 649-5116',
      rating: 4.5,
      cuisine: 'Coffee & Tea',
      latitude: 40.7628,
      longitude: -73.9852,
      yelp_link: 'https://www.yelp.com/biz/bibble-and-sip-new-york-2?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
      img_link: 'https://s3-media3.fl.yelpcdn.com/bphoto/zCUvBD2KTMNEps7TAuuecQ/o.jpg' },
     {
      name: 'Le Bernardin',
      address: '155 W 51st St The Equitable Bldg New York, NY 10019',
      phone: '(212) 554-1515',
      rating: 4.5,
      cuisine: 'French',
      latitude: 40.7616,
      longitude: -73.9818,
      yelp_link: 'https://www.yelp.com/biz/le-bernardin-new-york?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
      img_link: 'https://s3-media2.fl.yelpcdn.com/bphoto/O2auTfVN7mp7qSMoKQ81hQ/o.jpg' },
     {
      name: 'Totto Ramen',
      address: '366 W 52nd St New York, NY 10019',
      phone: '(212) 582-0052',
      rating: 4,
      cuisine: 'Ramen',
      latitude: 40.7643,
      longitude: -73.9877,
      yelp_link: 'https://www.yelp.com/biz/totto-ramen-new-york?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
      img_link: 'https://s3-media2.fl.yelpcdn.com/bphoto/tJh6-nAiwlPsRLNNnOYXGg/o.jpg' },
     {
      name: 'Del Frisco\'s Double Eagle Steak House',
      address: '1221 Ave Of The Americas New York, NY 10020',
      phone: '(212) 575-5129',
      rating: 4.5,
      cuisine: 'Steakhouses',
      latitude: 40.7593,
      longitude: -73.982,
      yelp_link: 'https://www.yelp.com/biz/del-friscos-double-eagle-steak-house-new-york-2?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
      img_link: 'https://s3-media3.fl.yelpcdn.com/bphoto/FyQ0V-QtndWStk5B8qwjXw/o.jpg' },
     {
      name: 'Ippudo Westside',
      address: '321 W 51st St New York, NY 10019',
      phone: '',
      rating: 4,
      cuisine: 'Ramen',
      latitude: 40.7635,
      longitude: -73.9865,
      yelp_link: 'https://www.yelp.com/biz/ippudo-westside-new-york?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
      img_link: 'https://s3-media1.fl.yelpcdn.com/bphoto/z22LxkBylfgBW5Q-rRfFmA/o.jpg' },
     {
      name: 'Best Bagel & Coffee',
      address: '225 W 35th St New York, NY 10001',
      phone: '(212) 564-4409',
      rating: 4.5,
      cuisine: 'Bagels',
      latitude: 40.7523,
      longitude: -73.9911,
      yelp_link: 'https://www.yelp.com/biz/best-bagel-and-coffee-new-york?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
      img_link: 'https://s3-media2.fl.yelpcdn.com/bphoto/fZzpV8mvVVTd7uV19cZ7sg/o.jpg' },
     {
      name: 'Bryant Park',
      address: '41 W 40th St New York, NY 10018',
      phone: '(212) 768-4242',
      rating: 4.5,
      cuisine: 'Parks',
      latitude: 40.7539,
      longitude: -73.9837,
      yelp_link: 'https://www.yelp.com/biz/bryant-park-new-york-2?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
      img_link: 'https://s3-media2.fl.yelpcdn.com/bphoto/e3C0L_4bryzvPU6PbmZ_dA/o.jpg' },
     {
      name: 'Carmine\'s Italian Restaurant - Times Square',
      address: '200 W 44th St New York, NY 10036',
      phone: '(212) 221-3800',
      rating: 4,
      cuisine: 'Italian',
      latitude: 40.7575,
      longitude: -73.9868,
      yelp_link: 'https://www.yelp.com/biz/carmines-italian-restaurant-times-square-new-york-3?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
      img_link: 'https://s3-media1.fl.yelpcdn.com/bphoto/0UszeEYPWI-RIk0Ak6HtVQ/o.jpg' },
     {
      name: 'Ippudo East Village',
      address: '65 4th Ave New York, NY 10003',
      phone: '',
      rating: 4,
      cuisine: 'Ramen',
      latitude: 40.7309,
      longitude: -73.9902,
      yelp_link: 'https://www.yelp.com/biz/ippudo-east-village-new-york?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
      img_link: 'https://s3-media3.fl.yelpcdn.com/bphoto/vD-5ypZnkzaqiF3mlurg2Q/o.jpg' },
      {
          name: 'The Halal Guys',
          address: 'W 53rd St 6th Ave New York, NY 10019',
          phone: '',
          rating: 4.5,
          cuisine: 'Food Stands',
          latitude: 40.7618,
          longitude: -73.9792,
          yelp_link: 'https://www.yelp.com/biz/the-halal-guys-new-york-2?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
          img_link: 'https://s3-media2.fl.yelpcdn.com/bphoto/i6QRVRliZ42stZUp7795jQ/o.jpg' },
         {
          name: 'Bibble & Sip',
          address: '253 W 51st St New York, NY 10019',
          phone: '(646) 649-5116',
          rating: 4.5,
          cuisine: 'Coffee & Tea',
          latitude: 40.7628,
          longitude: -73.9852,
          yelp_link: 'https://www.yelp.com/biz/bibble-and-sip-new-york-2?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
          img_link: 'https://s3-media3.fl.yelpcdn.com/bphoto/zCUvBD2KTMNEps7TAuuecQ/o.jpg' },
         {
          name: 'Le Bernardin',
          address: '155 W 51st St The Equitable Bldg New York, NY 10019',
          phone: '(212) 554-1515',
          rating: 4.5,
          cuisine: 'French',
          latitude: 40.7616,
          longitude: -73.9818,
          yelp_link: 'https://www.yelp.com/biz/le-bernardin-new-york?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
          img_link: 'https://s3-media2.fl.yelpcdn.com/bphoto/O2auTfVN7mp7qSMoKQ81hQ/o.jpg' },
         {
          name: 'Totto Ramen',
          address: '366 W 52nd St New York, NY 10019',
          phone: '(212) 582-0052',
          rating: 4,
          cuisine: 'Ramen',
          latitude: 40.7643,
          longitude: -73.9877,
          yelp_link: 'https://www.yelp.com/biz/totto-ramen-new-york?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
          img_link: 'https://s3-media2.fl.yelpcdn.com/bphoto/tJh6-nAiwlPsRLNNnOYXGg/o.jpg' },
         {
          name: 'Del Frisco\'s Double Eagle Steak House',
          address: '1221 Ave Of The Americas New York, NY 10020',
          phone: '(212) 575-5129',
          rating: 4.5,
          cuisine: 'Steakhouses',
          latitude: 40.7593,
          longitude: -73.982,
          yelp_link: 'https://www.yelp.com/biz/del-friscos-double-eagle-steak-house-new-york-2?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
          img_link: 'https://s3-media3.fl.yelpcdn.com/bphoto/FyQ0V-QtndWStk5B8qwjXw/o.jpg' },
         {
          name: 'Ippudo Westside',
          address: '321 W 51st St New York, NY 10019',
          phone: '',
          rating: 4,
          cuisine: 'Ramen',
          latitude: 40.7635,
          longitude: -73.9865,
          yelp_link: 'https://www.yelp.com/biz/ippudo-westside-new-york?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
          img_link: 'https://s3-media1.fl.yelpcdn.com/bphoto/z22LxkBylfgBW5Q-rRfFmA/o.jpg' },
         {
          name: 'Best Bagel & Coffee',
          address: '225 W 35th St New York, NY 10001',
          phone: '(212) 564-4409',
          rating: 4.5,
          cuisine: 'Bagels',
          latitude: 40.7523,
          longitude: -73.9911,
          yelp_link: 'https://www.yelp.com/biz/best-bagel-and-coffee-new-york?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
          img_link: 'https://s3-media2.fl.yelpcdn.com/bphoto/fZzpV8mvVVTd7uV19cZ7sg/o.jpg' },
         {
          name: 'Bryant Park',
          address: '41 W 40th St New York, NY 10018',
          phone: '(212) 768-4242',
          rating: 4.5,
          cuisine: 'Parks',
          latitude: 40.7539,
          longitude: -73.9837,
          yelp_link: 'https://www.yelp.com/biz/bryant-park-new-york-2?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
          img_link: 'https://s3-media2.fl.yelpcdn.com/bphoto/e3C0L_4bryzvPU6PbmZ_dA/o.jpg' },
         {
          name: 'Carmine\'s Italian Restaurant - Times Square',
          address: '200 W 44th St New York, NY 10036',
          phone: '(212) 221-3800',
          rating: 4,
          cuisine: 'Italian',
          latitude: 40.7575,
          longitude: -73.9868,
          yelp_link: 'https://www.yelp.com/biz/carmines-italian-restaurant-times-square-new-york-3?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
          img_link: 'https://s3-media1.fl.yelpcdn.com/bphoto/0UszeEYPWI-RIk0Ak6HtVQ/o.jpg' },
         {
          name: 'Ippudo East Village',
          address: '65 4th Ave New York, NY 10003',
          phone: '',
          rating: 4,
          cuisine: 'Ramen',
          latitude: 40.7309,
          longitude: -73.9902,
          yelp_link: 'https://www.yelp.com/biz/ippudo-east-village-new-york?adjust_creative=OlJ9vcVFB1iEKcZO-MS3cQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OlJ9vcVFB1iEKcZO-MS3cQ',
          img_link: 'https://s3-media3.fl.yelpcdn.com/bphoto/vD-5ypZnkzaqiF3mlurg2Q/o.jpg' } ],

  ingredients: [  {
      name: 'almond flour',
      picture: 'https://spoonacular.com/cdn/ingredients_100x100/almond-meal-or-almond-flour.jpg',
      calories: 6,
      protein: 13.79,
      fat: 72.43,
      carbs: 13.78,
      id: '93740' },
     {
      name: 'dried basil leaves',
      picture: 'https://spoonacular.com/cdn/ingredients_100x100/basil.jpg',
      calories: 2,
      protein: 28.77,
      fat: 11.46,
      carbs: 59.77,
      id: '2003' },
     {
      name: 'extra large egg',
      picture: 'https://spoonacular.com/cdn/ingredients_100x100/egg.jpg',
      calories: 1,
      protein: 36.22,
      fat: 61.7,
      carbs: 2.08,
      id: '1123' },
     {
      name: 'garlic powder',
      picture: 'https://spoonacular.com/cdn/ingredients_100x100/garlic-powder.jpg',
      calories: 3,
      protein: 18.2,
      fat: 1.81,
      carbs: 79.99,
      id: '1022020' },
     {
      name: 'coarse kosher salt',
      picture: 'https://spoonacular.com/cdn/ingredients_100x100/salt.jpg',
      calories: 0,
      protein: 0,
      fat: 0,
      carbs: 100,
      id: '1082047' },
     {
      name: 'whole milk mozzarella',
      picture: 'https://spoonacular.com/cdn/ingredients_100x100/mozzarella-fresh.jpg',
      calories: 3,
      protein: 29.7,
      fat: 67.37,
      carbs: 2.93,
      id: '1026' },
     {
      name: 'oregano leaves',
      picture: 'https://spoonacular.com/cdn/ingredients_100x100/oregano.jpg',
      calories: 3,
      protein: 10.28,
      fat: 11,
      carbs: 78.72,
      id: '2027' },
     {
      name: 'parmesan cheese',
      picture: 'https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg',
      calories: 4,
      protein: 36.82,
      fat: 59.86,
      carbs: 3.32,
      id: '1033' },
     {
      name: 'reese\'s cups',
      picture: 'https://spoonacular.com/cdn/ingredients_100x100/peanut-butter-cup.jpg',
      calories: 5,
      protein: 7.63,
      fat: 51.15,
      carbs: 41.22,
      id: '19150' },
     {
      name: 'pepper',
      picture: 'https://spoonacular.com/cdn/ingredients_100x100/pepper.jpg',
      calories: 3,
      protein: 12.72,
      fat: 8.98,
      carbs: 78.3,
      id: '1002030' } ],
  recipes: [  {
      name: 'The Lucky Penny Blog: The BEST Cauliflower Crust Pizza',
      servings: '2',
      prep_time: null,
      src_url: 'http://www.theluckypennyblog.com/2013/02/the-best-cauliflower-crust-pizza.html',
      ingredients: 'optional 1 tablespoon almond meal::93740@@1/2 teaspoon dried basil (crush it even more between your fingers)::2003@@1 egg::1123@@1/2 teaspoon garlic powder::1022020@@1/4 teaspoon kosher salt::1082047@@1/4 cup mozzarella cheese::1026@@1/2 teaspoon dried oregano (crust it even more between you fingers)::2027@@1/4 cup shredded parmesan cheese::1033@@1 small to medium sized head of cauliflower - should yield 2 to 3 cups once processed::19150@@optional 3 shakes of crushed red pepper::1002030',
      cuisine: 'Pizza',
      instructions: '<p>(PRINTABLE)</p><p>1 small to medium sized head of cauliflower - should yield 2 to 3 cups once processed</p><p>1/4 teaspoon kosher salt</p><p>1/2 teaspoon dried basil (crush it even more between your fingers)</p><p>1/2 teaspoon dried oregano (crust it even more between you fingers)</p><p>1/2 teaspoon garlic powder</p><p>optional a few shakes of crushed red pepper</p><p>1/4 cup shredded parmesan cheese</p><p>1/4 cup mozzarella cheese</p><p>1 egg</p><p>optional 1 tablespoon almond meal</p><p>Desired amount of sauce, cheese for topping, and other toppings. Make your own 30 minute pizza sauce using my recipe!</p><p>Place a pizza stone in the oven, or baking sheet if you don\'t have a pizza stone. Preheat oven to 450 degrees. On a cutting board, place a large piece of parchment paper and spray it with nonstick cooking oil.</p><p>Wash and throughly dry a small head of cauliflower. Don\'t get one the size of your head unless you are planning on making 2 pizzas. Cut off the florets, you don\'t need much stem. Just stick with the florets. Pulse in your food processor for about 30 seconds, until you get powdery snow like cauliflower. See above photo. You should end up with 2 to 3 cups cauliflower "snow". Place the cauliflower in a microwave safe bowl and cover. Microwave for 4 minutes. Dump cooked cauliflower onto a clean tea towel and allow to cool for a bit before attempting the next step.</p><p>Once cauliflower is cool enough to handle, wrap it up in the dish towel and wring the heck out of it. You want to squeeze out as much water as possible. This will ensure you get a chewy pizza like crust instead of a crumbly mess.</p><p>Dumped cauliflower into a bowl. Now add 1/4 cup parmesan cheese, 1/4 cup mozzarella cheese, 1/4 teaspoon kosher salt, 1/2 teaspoon dried basil (crush up the leaves even more between your fingers before adding), 1/2 teaspoon dried oregano (crush up the leaves even more between your fingers before adding), 1/2 teaspoon garlic powder (not garlic salt), and a dash of red pepper if you want. I also added 1 tablespoon almond meal because my cauliflower yielded closer to 2 cups of cauli snow, this is optional and I would not add the almond meal if you have closer to 3 cups of cauli snow. Now add your egg and mix away. Hands tend to work best.</p><p>Once mixed together, use your hands to form the dough into a crust on your oiled parchment paper. Pat it downthoroughly, you want it nice and tightly formed together. Don\'t make it too thick or thin either.</p><p>Using a cutting board slide the parchment paper onto your hot pizza stone or baking sheet in the oven. Bake for 8 - 11 minutes, until it starts to turn golden brown. Remove from oven.</p><p>Add however much sauce, cheese, and toppings you want. I\'m not gonna give you measurements for this. You know how you like your pizza - so go for it! Slide parchment with topped pizza back in the hot oven and cook for another 5 to 7 minutes until the cheese is melted, bubbly, and slightly golden.</p><p>Test your patience and allow it to cool for a minute or two. Probably closer to two. Then using a pizza cutter and a spatula serve up your delicious grain-free cauliflower crust pizza!</p><p>*3/15 update - If you are using a larger sized cauliflower, up the eggs to 1 egg plus 1 egg white. You want your "dough" to be sticky. When I make a bigger sized pizza (using more cauliflower) I up the seasonings and the egg, but often leave the amount of cheese the same.Make sure you pat the dough tightly together when forming your crust. It really helps to place the crust (on an oiled sheet of parchment paper) on a HOT pizza stone or baking sheet. Make sure the crust is golden in color before topping it and baking it again. I truly believe cooking it the proper length before topping it helps keep the crust together.</p><p>Also I really like the addition of 1 to 2 tablespoons of almond meal to the crust mixture.</p><p>*Disclaimer - the slices will still be kinda floppy, but they shouldn\'t be crumbly.</p><p>***UPDATE - My new oven requires that I pre-cook the crust for closer to 15 to 20 minutes to get it a nice golden brown. Go off of looks rather than time! You want the edges to start to be crispy brown but not too much so that when you cook it again after adding toppings it will burn.</p><p>FAQs:</p><p>Instead of microwaving you can steam the cauliflower just enough to get it slightly tender.</p><p>Instead of a food processor you can use a cheese grater to grate the cauliflower.</p><p>If you are looking for a dairy free version - Here is the link to mycheese free cauliflower pizza crust!</p><p>I highly recommend parchment paper over tin foil. Don\'t use wax paper.</p><p>Yes, you can do without the pizza stone and use a baking sheet.</p><p>Yes, you can just wring out the cauliflower raw, but I recommend the cooking method and have had better success cooking the cauliflower before wringing it out.</p><p>People have had success with using a juicer on the cauliflower and extracting the pulp to use. I have not tried this.</p><p>The almond flower is optional. Coconut flour would be a good substitute, but both could be left out entirely with pretty much the same result.</p><p>Love, Luck, and Happiness!</p><p>DUE TO THE POPULARITY OF THIS RECIPE, I HAVE TO ASK PLEASE DO NOT POST THIS RECIPE IN FULL ON ANY OTHER BLOG OR WEBSITE WITHOUT PROPER ACCREDITATION, AS WITH ANY RECIPE ON THIS SITE. Thank you! :)</p><p>Breville 13" Pizza Stone For Smart Oven (Google Affiliate Ad)</p>' },
     {
      name: 'Pizza Logs',
      servings: '8',
      prep_time: null,
      src_url: 'http://www.emilybites.com/2013/06/pizza-logs.html',
      ingredients: '8 egg roll wrappers (larger than wonton wrappers)::18368@@1 teaspoon Italian seasoning::1022027@@4 light Mozzarella string cheese sticks, each cut in half horizontally to make two shorter sticks (I used Weight Watchers brand – recommended!)::98970@@8 teaspoons store-bought pizza sauce::11549@@24 turkey pepperoni slice (I used Hormel)::7278',
      cuisine: 'Pizza',
      instructions: 'Preheat the oven to 425. Lightly mist a large baking sheet with cooking spray and set aside.Pour some water into a small dish and set aside. On a flat surface, place an egg roll wrapper, corner facing toward you (like a diamond) and spread a teaspoon of pizza sauce horizontally across the center of the wrapper, leaving ½ inch or so of space on each side. Sprinkle a pinch of Italian seasoning across the sauce and add a row of 3 pepperoni slices over the sauce. Place half a cheese stick on top of the pepperoni. Fold the bottom corner closest to you up over the ingredients and give it a 90 degree roll. Fold the side corners in and tuck them as you give the filled section another 90 degree roll. Dip your finger in the dish or reserved water and lightly wet the edges of the remaining top corner of the wrapper. Finish rolling the filled pizza log over the wet corner so that it adheres. Place wrapped pizza log onto the prepared baking sheet. Repeat with remaining ingredients.When all of the pizza logs are wrapped and on the baking sheets, mist the tops with cooking spray. Bake for 10-14 minutes, flipping once halfway through, until the wrappers are golden brown.' },
     {
      name: 'Cauliflower Crust Hawaiian Pizza',
      servings: '2',
      prep_time: 25,
      src_url: 'http://www.recipegirl.com/2012/01/16/cauliflower-crust-hawaiian-pizza',
      ingredients: '3 slices Canadian bacon, cut into strips::10130@@1/2 LARGE head cauliflower (or 2+ cups shredded cauliflower)::11135@@1/2 teaspoon dried minced garlic (or fresh garlic)::2020@@1 large egg::1123@@1/2 teaspoon onion salt::1072047@@1 teaspoon dried oregano::2027@@1/2 cup pineapple tidbits::1039354@@1 cup finely shredded mozzarella cheese (or try another kind!)::1001026@@1/2 cup tomato-basil marinara sauce (or pizza sauce)::6233',
      cuisine: 'Pizza',
      instructions: '1.  Shred the cauliflower into small crumbles.  You can use the food processor if you\'d like, but you just want crumbles, not puree.  You\'ll need a total of about 2 cups or so of cauliflower crumbles (which is about half a large head of cauliflower.  Place the cauliflower crumbles in a large bowl and microwave them (dry) for 8 minutes (see Tips below if you do not have a microwave).  Give the cauliflower a chance to cool.2.  Prepare the crust:  Preheat the oven to 450 degrees F. Spray a cookie sheet or pizza pan with nonstick spray (or use a nonstick surface).  In a medium bowl, mix the cauliflower crumbles (about 1 1/2 cups since they shrink after cooking) with the remaining crust ingredients.  Pat the "crust" into a 9 to 12-inch round on the prepared pan.  Spray the crust lightly with nonstick spray and bake for 15 minutes (or until golden).  Remove the crust from the oven and turn the heat up to broil.3.  Prepare the pizza:  Spread the sauce on top of the baked crust, leaving a 1/2-inch border around the edge.  Sprinkle 1/4 cup cheese on top.  Add the bacon and pineapple, spreading it out around the pizza.  Sprinkle the remaining cheese on top. Broil the pizza 3 to 4 minutes, or until the toppings are hot and the cheese is melted and bubbly.  Cut into 6 slices and serve immediately.' },
     {
      name: 'Pizza Pinwheels',
      servings: '24',
      prep_time: 45,
      src_url: 'http://insidebrucrewlife.com/2013/09/pizza-pinwheels',
      ingredients: '1/4 cup diced black olives::1059195@@4 ounces cream cheese, softened::1017@@1/8 teaspoon garlic powder::1022020@@1/4 cup diced green pepper::11333@@2 teaspoons dried oregano::2027@@1/2 cup pepperoni::7057@@1/4 cup plain greek yogurt::1256@@3 tortilla shells::11020420@@1/4 cup shredded cheddar cheese::1001009@@1/4 cup shredded mozzarella cheese::1001026@@1/4 cup canned diced Italian style tomatoes, drained::11529',
      cuisine: 'Pizza',
      instructions: 'Combine the cream cheese, yogurt, oregano, and garlic powder. Stir until creamy. Stir in the shredded cheeses. Spread the cheese mixture evenly on the 3 tortilla shells.Evenly sprinkle the olives, green peppers, and tomatoes over the cheese mixture. Top each tortilla with a layer of pepperoni. Gently roll the tortillas up tightly, making sure everything stays inside. Wrap in plastic wrap and refrigerate for at least 30 minutes. Take off the plastic wrap and cut each tortilla into 8 pinwheels. Serve with toothpicks if desired. Makes 24 pinwheels.' },
     {
      name: 'Grilled Caprese Naan Pizza',
      servings: '2',
      prep_time: 5,
      src_url: 'http://ohmyveggies.com/recipe-grilled-caprese-naan-pizza',
      ingredients: '1/4 c. balsamic vinegar::2069@@1/4 c. fresh basil ribbons::2044@@a handful or two of cherry or grape tomatoes, halved::10111529@@a handful or two of small fresh mozzarella balls (ciliegine)::93790@@2 naan::93723@@salt + pepper to taste::2047',
      cuisine: 'Pizza',
      instructions: 'Heat balsamic vinegar in a small saucepan over medium heat. Simmer until syrupy and reduced to about a tablespoon, 8-10 minutes.Heat a grill pan over medium-high heat. Spray both sides of one naan with olive oil and place it in the pan, pressing down on the top of it with a spatula to sear. Cook on each side until just beginning to char, about 2-3 minutes. Repeat with second naan.Top each naan with tomatoes, cheese, and basil. Season with salt and pepper and drizzle with balsamic reduction. Cut into wedges and serve.' },
     {
      name: 'Sweet Potato Kale Pizza with Rosemary & Red Onion',
      servings: '1',
      prep_time: 0,
      src_url: 'http://www.twopeasandtheirpod.com/sweet-potato-kale-pizza-with-rosemary-red-onion',
      ingredients: '1 tablespoon balsamic vinegar::2069@@1 1/2 cups chopped kale::11233@@1 1/2 cups mozzarella cheese::1026@@1 1/2 tablespoon olive oil, divided::4053@@1/2 red onion, sliced::10011282@@1 teaspoon, freshly chopped rosemary::2036@@Salt and pepper, for seasoning potato slices and onion::1102047@@1 large sweet potato, thinly sliced, about 1/4 inch thick::11507',
      cuisine: 'Pizza',
      instructions: '1. Preheat the oven to 400 degrees F. Place the sweet potato slices and red onion slices in a bow and toss with 1/2 tablespoon of the olive oil. Season with salt and pepper. Place on a large baking sheet and bake for about 20 minutes, or until the sweet potatoes are soft and tender. Make sure you turn them once during the 20 minutes. Remove from oven and let cool while you prepare the pizza dough. 2. Turn the oven to 500 degrees F or as high as your oven will go. If you have a pizza stone, place the pizza stone in the oven to get hot. On a lightly floured surface, roll out the pizza dough, using a rolling pin. Roll it out to about 3/8 of an inch. Place the pizza dough on a pizza peel or pan that has been generously coated with corn meal. Lightly brush the dough with the remaining 1 tablespoon of olive oil. In a small bowl, toss the kale with balsamic vinegar. Top the pizza dough with mozzarella cheese, sweet potato slices, kale, red onion slices, and fresh rosemary. 3. Place the pizza in the oven-directly on the pizza stone, if using one, or on the oven rack. Bake for 10-15 minutes or until pizza crust is golden and cheese is melted. Remove from oven and let cool for a few minutes before slicing. Slice and serve warm.' },
     {
      name: 'BBQ Ham, Bacon and Pineapple Quesadillas (aka BBQ Hawaiian Pizza Quesadillas)',
      servings: '1',
      prep_time: 5,
      src_url: 'http://www.closetcooking.com/2013/06/bbq-ham-bacon-and-pineapple-quesadillas.html',
      ingredients: '2 slices bacon, cooked and crumbled::10123@@2 tablespoons BBQ sauce::6150@@cilantro to taste::11165@@1/4 cup ham, cooked and cut into small pieces::7214@@1/2 cup mozzarella or jack cheese, shredded::1001025@@2 tablespoons jalapeno (pickled or fresh), sliced::11979@@1/4 cup pineapple, sliced and optionally grilled::9266@@1 (10 inch) tortilla::18364',
      cuisine: 'Pizza',
      instructions: 'Heat a pan over medium heat, place the tortilla in the pan, sprinkle half of the cheese over half of the tortilla, followed by the ham, bacon, pineapple, BBQ sauce,  jalapeno, cilantro and the remaining cheese.Fold the tortilla in half coving the filling and cook until the quesadilla is golden brown on both sides and the cheese is melted, about 2-4 minutes per side.' },
     {
      name: 'Greek Pita Pizzas',
      servings: '4',
      prep_time: null,
      src_url: 'http://www.thecomfortofcooking.com/2014/02/greek-pita-pizzas.html',
      ingredients: '1 (15 oz.) can tomato sauce::11549@@1 cup grape or cherry tomatoes, halved::10311529@@1/4 teaspoon dried basil::2003@@1/4 teaspoon dried rosemary::2036@@1/4 cup crumbled reduced-fat feta cheese::1019@@2 Tbsp. chopped fresh parsley::11297@@2 cloves garlic, minced::11215@@6 oz. lean ground beef/turkey/chicken/lamb or Italian sausage::10023572@@12 pitted kalamata olives, halved (optional)::1009195@@1/4 cup finely chopped onion::11282@@1/4 teaspoon dried oregano::2027@@1 cup shredded part-skim mozzarella cheese::1028@@2 (6-inch) whole wheat or white pita bread rounds::18413@@Salt and pepper, to taste::1102047',
      cuisine: 'Pizza',
      instructions: 'Preheat oven to 400 degrees F.In a medium nonstick skillet over medium-high heat, cook ground meat, onion, and garlic until meat is browned; drain off fat. Stir in tomato sauce, rosemary, basil and oregano. Bring to a boil then reduce heat to low. Simmer uncovered for 5 minutes, until sauce has thickened.Carefully split pita bread rounds in half horizontally. Place pita halves, rough sides up, in a single layer on a large baking sheet. Bake for 6-7 minutes, or until lightly toasted.Top toasted pita rounds with meat sauce and sprinkle with mozzarella. Bake for 5 minutes, or until cheese is melted. Remove from oven. Top with tomatoes, feta, parsley and olives, if desired. Sprinkle with salt and pepper. Serve immediately.Enjoy!' },
     {
      name: 'Three-Cheese Pizza (For Cheese Lovers)',
      servings: '8',
      prep_time: null,
      src_url: 'http://www.myrecipes.com/m/recipe/three-cheese-pizza-for-cheese--50400000110662',
      ingredients: '2 tablespoons fresh thyme leaves::2049@@1 tablespoon truffle or extra-virgin olive oil::4053@@2 tablespoons finely grated Parmesan cheese::1033@@3/4 cup grated part-skim mozzarella cheese::1028@@1/2 cup part-skim ricotta cheese::1037@@prebaked pizza crust::93770',
      cuisine: 'Cheese',
      instructions: 'Place a prebaked pizza crust on a shallow baking pan. Dollop ricotta cheese evenly over crust. Sprinkle with mozzarella cheese, Parmesan cheese, and fresh thyme leaves. Bake 8 minutes or until top is golden brown and cheese is melted. Drizzle with truffle or extra-virgin olive oil. Cut into 8 slices; serve.' },
     {
      name: 'Grilled Cheese',
      servings: '4',
      prep_time: 55,
      src_url: 'http://www.foodnetwork.com/recipes/tyler-florence/grilled-cheese-recipe.html',
      ingredients: '12 slices bacon, cooked to desired doneness::10123@@12 ounces farmhouse Cheddar, sliced::1009@@Dijon mustard::1002046@@1 green apple, thinly sliced::1029003@@3 tablespoons unsalted butter::1145@@8 1/2-inch thick slices country-style white bread::18069',
      cuisine: 'Cheese',
      instructions: 'Heat a griddle or large skillet over medium-low heat. Alternatively, you can use a panini press if you have one.                          Generously spread the Dijon on 4 slices of bread. Top each slice with some of the Cheddar, 3 pieces of bacon, some apple and additional Cheddar. Place a slice of the remaining bread on top of each sandwich and spread with the butter. Place a sandwich on the skillet buttered-side down and butter the remaining side. Cook until the cheese is slightly melted and the bread is browned. Flip the sandwich and continue to cook until the cheese is thoroughly melted and the sandwich is golden brown. Repeat with the remaining sandwiches.' }
    ],

  all: function() { return this.restaurants},
  ing: function() { return this.ingredients},
  res: function() { return this.recipes},
  //recipes: function() { return this.recipes},
  get: function(id) {
    const isRestaurant = p => p.name === id
    return this.restaurants.find(isRestaurant)
  },
  getIng: function(id) {
    const isRestaurant = p => p.name === id
    return this.ingredients.find(isRestaurant)
  },
  getRecipes: function(id) {
    const isRestaurant = p => p.name === id
    return this.recipes.find(isRestaurant)
  }
}

export default RestaurantAPI