import urllib.request
import json

# Request Headers
api_key = ""
accept = "application/json"

# Parameters
title = "title=tomato+soup"

# GET Request
html = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/guessNutrition?" + title
req = urllib.request.Request(html, headers={"X-Mashape-Key":api_key, "Accept":accept})
data = urllib.request.urlopen(req)
data_str = str(data.read())
data_str = data_str[2 : len(data_str)-1]

j_data = json.loads(data_str)

print(str(j_data['calories']['value']) + " calories")
