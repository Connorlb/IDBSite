from flask import Flask, render_template
import requests
import json

app = Flask(__name__)

# Main HTML pages
@app.route("/")
def home() :
    return render_template('home.html')

@app.route("/restaurants")
def restaurants() :
    return render_template('restaurants.html')

@app.route("/ingredients")
def ingredients() :
    return render_template('ingredients.html')

@app.route("/recipes")
def recipes() :
    return render_template('recipes.html')

@app.route("/about")
def about() :
    user = [
  {
    "login": "Connorlb",
    "id": 9309007,
    "avatar_url": "https://avatars2.githubusercontent.com/u/9309007?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Connorlb",
    "html_url": "https://github.com/Connorlb",
    "followers_url": "https://api.github.com/users/Connorlb/followers",
    "following_url": "https://api.github.com/users/Connorlb/following{/other_user}",
    "gists_url": "https://api.github.com/users/Connorlb/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Connorlb/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Connorlb/subscriptions",
    "organizations_url": "https://api.github.com/users/Connorlb/orgs",
    "repos_url": "https://api.github.com/users/Connorlb/repos",
    "events_url": "https://api.github.com/users/Connorlb/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Connorlb/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 57
  },
  {
    "email": "mmcurtis@cs.utexas.edu",
    "name": "Matthew Curtis",
    "type": "Anonymous",
    "contributions": 28
  },
  {
    "email": "aprasad@cs.utexas.edu",
    "name": "Aditya Prasad",
    "type": "Anonymous",
    "contributions": 16
  },
  {
    "login": "pdalisay",
    "id": 23086871,
    "avatar_url": "https://avatars2.githubusercontent.com/u/23086871?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/pdalisay",
    "html_url": "https://github.com/pdalisay",
    "followers_url": "https://api.github.com/users/pdalisay/followers",
    "following_url": "https://api.github.com/users/pdalisay/following{/other_user}",
    "gists_url": "https://api.github.com/users/pdalisay/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/pdalisay/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/pdalisay/subscriptions",
    "organizations_url": "https://api.github.com/users/pdalisay/orgs",
    "repos_url": "https://api.github.com/users/pdalisay/repos",
    "events_url": "https://api.github.com/users/pdalisay/events{/privacy}",
    "received_events_url": "https://api.github.com/users/pdalisay/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 16
  },
  {
    "login": "mmcurtis55",
    "id": 10254859,
    "avatar_url": "https://avatars2.githubusercontent.com/u/10254859?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mmcurtis55",
    "html_url": "https://github.com/mmcurtis55",
    "followers_url": "https://api.github.com/users/mmcurtis55/followers",
    "following_url": "https://api.github.com/users/mmcurtis55/following{/other_user}",
    "gists_url": "https://api.github.com/users/mmcurtis55/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mmcurtis55/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mmcurtis55/subscriptions",
    "organizations_url": "https://api.github.com/users/mmcurtis55/orgs",
    "repos_url": "https://api.github.com/users/mmcurtis55/repos",
    "events_url": "https://api.github.com/users/mmcurtis55/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mmcurtis55/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 8
  },
  {
    "login": "AdityaPrasad1",
    "id": 14363433,
    "avatar_url": "https://avatars2.githubusercontent.com/u/14363433?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AdityaPrasad1",
    "html_url": "https://github.com/AdityaPrasad1",
    "followers_url": "https://api.github.com/users/AdityaPrasad1/followers",
    "following_url": "https://api.github.com/users/AdityaPrasad1/following{/other_user}",
    "gists_url": "https://api.github.com/users/AdityaPrasad1/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AdityaPrasad1/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AdityaPrasad1/subscriptions",
    "organizations_url": "https://api.github.com/users/AdityaPrasad1/orgs",
    "repos_url": "https://api.github.com/users/AdityaPrasad1/repos",
    "events_url": "https://api.github.com/users/AdityaPrasad1/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AdityaPrasad1/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 8
  },
  {
    "login": "Jesus-Romero",
    "id": 17364365,
    "avatar_url": "https://avatars3.githubusercontent.com/u/17364365?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Jesus-Romero",
    "html_url": "https://github.com/Jesus-Romero",
    "followers_url": "https://api.github.com/users/Jesus-Romero/followers",
    "following_url": "https://api.github.com/users/Jesus-Romero/following{/other_user}",
    "gists_url": "https://api.github.com/users/Jesus-Romero/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Jesus-Romero/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Jesus-Romero/subscriptions",
    "organizations_url": "https://api.github.com/users/Jesus-Romero/orgs",
    "repos_url": "https://api.github.com/users/Jesus-Romero/repos",
    "events_url": "https://api.github.com/users/Jesus-Romero/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Jesus-Romero/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 3
  },
  {
    "email": "connor.burkman@gmail.com",
    "name": "Connorlb",
    "type": "Anonymous",
    "contributions": 1
  },
  {
    "email": "ubuntu@ip-172-31-45-109.us-east-2.compute.internal",
    "name": "Ubuntu",
    "type": "Anonymous",
    "contributions": 1
  }
]
    return render_template('about.html', user=json.dumps(user))


# Restaurant Pages
@app.route("/restaurants/maggianos")
def maggianos() :
    return render_template('maggianos.html')

@app.route("/restaurants/cabobobs")
def cabobobs() :
    return render_template('cabobobs.html')

@app.route("/restaurants/cheesecakefactory")
def cheesecakefactory() :
    return render_template('cheesecakefactory.html')


# Recipe Pages
@app.route("/recipes/smores")
def smores() :
    return render_template('smores.html')

@app.route("/recipes/steakburrito")
def steakburrito() :
    return render_template('steakburrito.html')

@app.route("/recipes/tomatosoup")
def tomatosoup() :
    return render_template('tomatosoup.html')


# Ingredient Pages
@app.route("/ingredients/grahamcrackers")
def grahamcrackers() :
    return render_template('grahamcrackers.html')

@app.route("/ingredients/tomatoes")
def tomatoes() :
    return render_template('tomatoes.html')

@app.route("/ingredients/tortillas")
def tortillas() :
    return render_template('tortillas.html')

if __name__ == "__main__" :
    app.run(host='0.0.0.0', debug=True, port=80)
