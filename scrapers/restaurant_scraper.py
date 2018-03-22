import urllib.request
import html
import json
import psycopg2
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String

# Database Connection
conn = psycopg2.connect("dbname=pocketchef user=postgres")
conn.autocommit = True
cur = conn.cursor()

# SQL query
sql = """INSERT INTO restaurants VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""

# Request Headers
api_key = "Bearer cKPmJvt1fspaPHYGP39B24XV_08Tq6DD93cKq0XQvSDFy5as_vPmgu7LVAor8dWqH1dL3sNZCWUiMhp_QtG_j-wV6jXJFvfTkikzzOKd4HvhzUekrQuzyFKWK6WhWnYx"

# Parameters
get_req = "https://api.yelp.com/v3/businesses/search?"
lat = "latitude="
lon = "&longitude="
rad = "&radius="
lim = "&limit="

# Queries - result limit, radius (meters), and coordinates (latitude, longitude)
limit = 30
radius = 16000
coordinates = [
    (40.7589, -73.9851),
    (37.7749, -122.4194),
    (34.0522, -118.2437),
    (33.5779, -101.8552),
    (29.7604, -95.3698),
    (38.9072, -77.0369),
    (39.9526, -75.1652),
    (41.8781, -87.6298),
    (33.7490, -84.3880),
    (47.6062, -122.3321)]

# GET Request
for city in coordinates :
    url = get_req + lat + str(city[0]) + lon + str(city[1]) + rad + str(radius) + lim + str(limit)
    req = urllib.request.Request(url, headers={"Authorization":api_key})
    data = urllib.request.urlopen(req)
    j_data = json.loads(data.read().decode("utf-8"))
    for venue in j_data["businesses"] :
        # (name, address, phone, rating, cuisine, latitude, longitude, yelp_link, img_link)
        name = venue["name"]
        addr = ' '.join(venue["location"]["display_address"])
        phone = venue["display_phone"]
        cuisine = venue["categories"][0]["title"]
        rating = venue["rating"]
        latitude, longitude = venue["coordinates"]["latitude"], venue["coordinates"]["longitude"]
        yelp_link = venue["url"]
        img_link = venue["image_url"]
        try:
            cur.execute(sql, (name, addr, phone, rating, cuisine, latitude, longitude, None, None, yelp_link, img_link))
        except psycopg2.IntegrityError:
            pass
cur.close()
conn.close()
