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

# SQL Query
sql = """SELECT ingredients FROM recipes"""

# Request
try:
    cur.execute(sql)
    rows = cur.fetchall()
    for row in rows :
        print(formatter.ingredient_formatter(row[0]))
    cur.close()
except (Exception, psycopg2.DatabaseError) as error:
    print(error)
finally:
    if conn is not None :
        conn.close()
