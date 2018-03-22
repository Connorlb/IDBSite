// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const RestaurantAPI = {
  restaurants: [
    { number: 1, name: "Cabo_Bobs", position: "G", image: 'https://static.spacecrafted.com/ccdedd15ae894440b435b2c9aa58db28/i/d197fdb0b39649698267f53e07e227a5/1/PYTVJ3JH1dSSeU6uiK5kQhQriQ?dpr=2' },
    { number: 2, name: "Dave_Defender", position: "D", image: 'https://bloximages.chicago2.vip.townnews.com/fortworthbusiness.com/content/tncms/assets/v3/editorial/9/95/9955d95c-1c8f-11e7-8dc8-d344e9a7c007/58e936c0c6895.image.jpg' },
    { number: 3, name: "Sam_Sweeper", position: "D" , image: 'https://bloximages.chicago2.vip.townnews.com/fortworthbusiness.com/content/tncms/assets/v3/editorial/9/95/9955d95c-1c8f-11e7-8dc8-d344e9a7c007/58e936c0c6895.image.jpg' },
    { number: 4, name: "Matt_Midfielder", position: "M" , image: 'https://bloximages.chicago2.vip.townnews.com/fortworthbusiness.com/content/tncms/assets/v3/editorial/9/95/9955d95c-1c8f-11e7-8dc8-d344e9a7c007/58e936c0c6895.image.jpg' },
    { number: 5, name: "William_Winger", position: "M" , image: 'https://bloximages.chicago2.vip.townnews.com/fortworthbusiness.com/content/tncms/assets/v3/editorial/9/95/9955d95c-1c8f-11e7-8dc8-d344e9a7c007/58e936c0c6895.image.jpg' },
    { number: 6, name: "Fillipe_Forward", position: "F" , image: 'https://bloximages.chicago2.vip.townnews.com/fortworthbusiness.com/content/tncms/assets/v3/editorial/9/95/9955d95c-1c8f-11e7-8dc8-d344e9a7c007/58e936c0c6895.image.jpg' }
  ],
  all: function() { return this.restaurants},
  get: function(id) {
    const isRestaurant = p => p.number === id
    return this.restaurants.find(isRestaurant)
  }
}

export default RestaurantAPI
