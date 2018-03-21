import urllib.request
import html
import json
import psycopg2
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String

# Database Connection
conn = psycopg2.connect("dbname=pocketchef user=postgres")
conn.autocommit = True
cur = conn.cursor()

# SQL Query
sql = """SELECT name FROM restaurants"""

# Request
try:
    cur.execute(sql)
    rows = cur.fetchall()
    print("Entry Count: " + cur.rowcount)
    for row in rows :
        print(row)
    cur.close()
except (Exception, psycopg2.DatabaseError) as error:
    print(error)
finally:
    if conn is not None :
        conn.close()
