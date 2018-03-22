import urllib.request
import html
import json
import psycopg2
import unidecode
import formatter
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
get_req = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/"
info = "/information?amount=1&unit=gram"

#SQL INSERT: [name, picture, calories, protein, fat, carbs, cuisine, recipes]
sql = """INSERT INTO ingredients VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)"""
existence = """SELECT EXISTS(SELECT 1 FROM ingredients WHERE id=%s)"""
#Image URL - append what comes from api result
img = "https://spoonacular.com/cdn/ingredients_100x100/"
# Request
try:
    cur.execute("""SELECT ingredients FROM recipes""")
    rows = cur.fetchall()
    result = []
    for row in rows:
        result += [formatter.ingredient_formatter(row[0])]
    for recipe in result:
        for tup in recipe:
             url = get_req + tup[1] + info
             cur.execute(existence,(tup[1],))
             exists = cur.fetchone()[0]
             if not exists:
                 req = urllib.request.Request(url, headers={"X-Mashape-Key":api_key, "Accept":accept})
                 data = urllib.request.urlopen(req)
                 j_data = json.loads(data.read().decode("utf-8"))
                 name = j_data["name"]
                 picture = img + j_data["image"]
                 calories = None
                 for nut in j_data["nutrition"]["nutrients"]:
                     if nut["title"] == "Calories":
                         calories = nut["amount"]
                         break
                 #Protein, fat, and carbs are all percentages of total calories
                 protein = j_data["nutrition"]["caloricBreakdown"]["percentProtein"]
                 fat = j_data["nutrition"]["caloricBreakdown"]["percentFat"]
                 carbs = j_data["nutrition"]["caloricBreakdown"]["percentCarbs"]
                 cuisine = None
                 recipes = None
                 try:
                     cur.execute(sql,(name,picture,calories,protein,fat,carbs,cuisine,recipes,tup[1]))
                 except psycopg2.IntegrityError:
                     print("INTEGRITY ERROR")
                     pass
                 print("Name: " +name +" added")
             else:
                 print("Already exists")
    cur.close()
except (Exception, psycopg2.DatabaseError) as error:
    print(error)
finally:
    if conn is not None :
        conn.close()
