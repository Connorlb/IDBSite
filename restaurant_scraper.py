import urllib.request
import html
import json

# Request Headers
api_key = "Bearer cKPmJvt1fspaPHYGP39B24XV_08Tq6DD93cKq0XQvSDFy5as_vPmgu7LVAor8dWqH1dL3sNZCWUiMhp_QtG_j-wV6jXJFvfTkikzzOKd4HvhzUekrQuzyFKWK6WhWnYx"

# Parameters
get_req = "https://api.yelp.com/v3/businesses/search?"
lat = "latitude="
lon = "&longitude="
rad = "&radius="

# Queries - radius (meters) and coordinates (latitude, longitude)
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
    url = get_req + lat + str(city[0]) + lon + str(city[1]) + rad + str(radius)
    req = urllib.request.Request(url, headers={"Authorization":api_key})
    data = urllib.request.urlopen(req)
    j_data = json.loads(data.read().decode("utf-8"))
    for venue in j_data["businesses"] :
        # (name, address, phone, cuisine, rating)
        print("(" +
            venue["name"] + ", " +
            venue["location"]["address1"] + ", " +
            venue["display_phone"] + ", " +
            venue["categories"][0]["title"] + ", " +
            str(venue["rating"]) + ")")
