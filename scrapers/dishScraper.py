import urllib.request
import html
import json
import psycopg2
import unidecode
from string import punctuation
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String

# Helper Functions
def strip_punctuation(s) :
    return ''.join(c for c in s if c not in punctuation)
cuisine_list = set()

# Database Connection
conn = psycopg2.connect("dbname=pocketchef user=postgres")
conn.autocommit = True
cur = conn.cursor()

# Request Headers
api_key = "eSpzDnsnCKmshP9N9IbybaCNXlQsp1P3BQSjsn0xgRvKJA2hrE"
accept = "application/json"

# Parameters
get_req = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"
info = "/information"

#SQL INSERT: [name, servings, prep_time, source_url, ingredients, cuisine, instructions]
sql = """INSERT INTO recipes VALUES (%s,%s,%s,%s,%s,%s,%s)"""

# Request
try:
    #for (tuple in file) :
        #grab cuisine up here
        #for (item in tuple) :
            #account for the first item being the cuisine type
             url = get_req + item + info
             req = urllib.request.Request(url, headers={"X-Mashape-Key":api_key, "Accept":accept})
             data = urllib.request.urlopen(req)
             j_data = json.loads(data.read().decode("utf-8"))
             name = j_data["title"]
             servings = j_data["servings"]
             prep_time = j_data["preperationMinutes"] + j_data["cookingMinutes"]
             source_url = j_data["sourceUrl"]
             ingredients = ""
             for ing in j_data["extendedIngredients"]:
                 ingredients = ingredients + ", " +ing["originalString"]
             instructions = j_data["instructions"]
             cur.execute(sql,(name,str(servings),str(prep_time),source_url,ingredients,cuisine,instructions))
    cur.close()
except (Exception, psycopg2.DatabaseError) as error:
    print(error)
finally:
    if conn is not None :
        conn.close()
