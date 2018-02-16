from flask import Flask, render_template

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
    return render_template('about.html')


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
