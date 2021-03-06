import urllib.request
import html
import json
import psycopg2
import unidecode
import formatter
from string import punctuation
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String

# Database Connection
conn = psycopg2.connect("dbname=pocketchef user=postgres")
conn.autocommit = True
cur = conn.cursor()

# Request Headers
api_key = "21b7ae1762dcd719479c76abbd77c7ad"
accept = "application/json"

# Parameters
get_req = "https://developers.zomato.com/api/v2.1/search?"
q = "q="
lat = "&lat="
lon = "&lon="

# SQL Query
sql = """SELECT cuisine FROM restaurants"""

# Request
try:
    cur.execute(sql)
    rows = cur.fetchall()
    for row in rows :
        cuisine_list.add(row[0])
 #        url = get_req + q + formatter.strip_punctuation(unidecode.unidecode(row[0])).replace(' ', '%20') + lat + str(row[1]) + lon + str(row[2])
 #        req = urllib.request.Request(url, headers={"user-key":api_key, "Accept":accept})
 #        data = urllib.request.urlopen(req)
 #        j_data = json.loads(data.read().decode("utf-8"))
 # #       print(json.dumps(j_data,indent=4,sort_keys=True))
 #        if j_data["results_shown"] > 0 :
 #            print(str(j_data["restaurants"][0]["restaurant"]["R"]["res_id"]) + " " + j_data["restaurants"][0]["restaurant"]["name"])
    cur.close()
    print(cuisine_list)
    print(len(cuisine_list))
except (Exception, psycopg2.DatabaseError) as error:
    print(error)
finally:
    if conn is not None :
        conn.close()
