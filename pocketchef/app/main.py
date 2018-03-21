from flask import Flask, render_template

# the all-important app variable:
app = Flask(__name__, static_folder="../static", template_folder="../public")

@app.route("/")
def index():
    return render_template('../app/index.html');

@app.route("/home")
def index1():
    return render_template('home.html');

@app.route("/index")
def index2():
    return render_template('index.html');

@app.route("/hello")
def hello():
    return "Hello World"

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=80)
