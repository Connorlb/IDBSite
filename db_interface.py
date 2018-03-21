import urllib.request
import html
import json
import psycopg2
from string import punctuation
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String

# Helper Functions
def strip_punctuation(s) :
    return ''.join(c for c in s if c not in punctuation)

# Database Connection
conn = psycopg2.connect("dbname=pocketchef user=postgres")
conn.autocommit = True
cur = conn.cursor()

# Request Headers
api_key = "64c8da69ae64740f902b194fea4cae01"
accept = "application/json"

# Parameters
get_req = "https://developers.zomato.com/api/v2.1/search?"
q = "q="
lat = "&lat="
lon = "&lon="

# SQL Query
sql = """SELECT name, latitude, longitude FROM restaurants"""

# Request
try:
    cur.execute(sql)
    rows = cur.fetchall()
    for row in rows :
        url = get_req + q + strip_punctuation(row[0].replace(' ', '%20')) + lat + str(row[1]) + lon + str(row[2])
        req = urllib.request.Request(url, headers={"user-key":api_key, "Accept":accept})
        data = urllib.request.urlopen(req)
        j_data = json.loads(data.read().decode("utf-8"))
        if j_data["results_shown"] > 0 :
            print(j_data["restaurants"][0]["id"] + " " + j_data["restaurants"][0]["name"])
    cur.close()
except (Exception, psycopg2.DatabaseError) as error:
    print(error)
finally:
    if conn is not None :
        conn.close()
