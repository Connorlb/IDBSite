from flask import Flask, render_template

app = Flask(__name__)

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

@app.route("/restaurants/maggianos")
def maggianos() :
    return render_template('maggianos.html')  

if __name__ == "__main__" :
    app.run(host='0.0.0.0', debug=True, port=80)
