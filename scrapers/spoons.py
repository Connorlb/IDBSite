import urllib.request
import html
import json
import unidecode
from string import punctuation
# Helper Functions
def strip_punctuation(s) :
    return ''.join(c for c in s if c not in punctuation)

cuisines = ['Pizza', 'Cheese', 'Cafes', 'Ethiopian', 'Vietnamese', 'Cuban', 'Bars', 'Tapas/Small Plates', 'Asian Fusion', 'Seafood', 'American', 'Barbeque', 'Brazilian', 'European', 'Caribbean', 'Ramen', 'Spanish', 'Bagels', 'Diners', 'Mexican', 'Coffee & Tea', 'Tex-Mex', 'Desserts', 'Chicken Wings', 'Lounges', 'Delis', 'Cajun/Creole', 'Tapas Bars', 'Wine Bars', 'Burgers', 'Thai', 'Latin American', 'Donuts', 'Vegan', 'Southern', 'Middle Eastern', 'Sandwiches', 'Italian', 'Gastropubs', 'Food Trucks', 'Poke', 'Sushi Bars', 'Cocktail Bars', 'Chinese', 'Indian', 'Beer Bar', 'Bakeries', 'Greek', 'French', 'Hot Dogs', 'Beer Gardens', 'Breakfast & Brunch', 'Pubs', 'Mediterranean', 'Dim Sum', 'Gluten-Free', 'Vegetarian', 'Japanese', 'Food Stands', 'Korean', 'German', 'Juice Bars & Smoothies', 'Steakhouses']

# Request Headers
api_key = "eSpzDnsnCKmshP9N9IbybaCNXlQsp1P3BQSjsn0xgRvKJA2hrE"
accept = "application/json"

# Parameters
get_req = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?"

# List of cuisines to iterate over

# Request
for cuis in cuisines :
     url = get_req + "cuisine=" + strip_punctuation(unidecode.unidecode(cuis)).replace(' ', '%20')
     req = urllib.request.Request(url, headers={"X-Mashape-Key":api_key, "Accept":accept})
     data = urllib.request.urlopen(req)
     j_data = json.loads(data.read().decode("utf-8"))
     temp = str(cuis) + ":"
     i = 0
     for res in j_data["results"]:
         temp = temp + " " + str(res["id"])
         i+=1
         if i > 7:
             break
     print(temp)
		
 #       print(json.dumps(j_data,indent=4,sort_keys=True))
  #       if j_data["results_shown"] > 0 :
 #            print(str(j_data["restaurants"][0]["restaurant"]["R"]["res_id"]) + " " + j_data["restaurants"][0]["restaurant"]["name"])
