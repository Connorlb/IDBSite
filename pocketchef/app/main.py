from flask import Flask, render_template
import flask.ext.sqlalchemy
import flask.ext.restless

# the all-important app variable:
app = Flask(__name__, static_folder="../static", template_folder="../public")

app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres:pocketchef@localhost/ver2'
db = flask.ext.sqlalchemy.SQLAlchemy(app)

# Create your Flask-SQLALchemy models as usual but with the following two
# (reasonable) restrictions:
#   1. They must have a primary key column of type sqlalchemy.Integer or
#      type sqlalchemy.Unicode.
#   2. They must have an __init__ method which accepts keyword arguments for
#      all columns (the constructor in flask.ext.sqlalchemy.SQLAlchemy.Model
#      supplies such a method, so you don't need to declare a new on

class restaurants2(db.Model):
    name = db.Column(db.Unicode, primary_key=True)
    address = db.Column(db.Text)
    phone = db.Column(db.VARCHAR(length=16))
    rating = db.Column(db.REAL)
    cuisine = db.Column(db.Text)
    latitude = db.Column(db.REAL)
    longitude = db.Column(db.REAL)
    yelp_link = db.Column(db.Text)
    img_link = db.Column(db.Text)

class recipes2(db.Model):
    name = db.Column(db.Unicode, primary_key=True)
    servings = db.Column(db.Text)
    prep_time = db.Column(db.SMALLINT)
    src_url = db.Column(db.Text)
    ingredients = db.Column(db.Text)
    cuisine = db.Column(db.Text)
    instructions = db.Column(db.Text)

class ingredients2(db.Model):
    name = db.Column(db.Unicode, primary_key=True)
    picture = db.Column(db.Text)
    calories = db.Column(db.SMALLINT)
    protein = db.Column(db.REAL)
    fat = db.Column(db.REAL)
    carbs = db.Column(db.REAL)
    ids = db.Column(db.Text)


# Create the database tables.
db.create_all()

# Create the Flask-Restless API manager.
manager = flask.ext.restless.APIManager(app, flask_sqlalchemy_db=db)

# Create API endpoints, which will be available at /api/<tablename> by
# default. Allowed HTTP methods can be specified as well.
manager.create_api(restaurants2, methods=['GET'], results_per_page=400, max_results_per_page=9001)
manager.create_api(ingredients2, methods=['GET'])
manager.create_api(recipes2, methods=['GET'])


# start the flask loop
#app.run()





@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html');

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, use_reloader=False, port=80)
    #app.run()
