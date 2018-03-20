from flask import Flask, render_template

# the all-important app variable:
app = Flask(__name__)

@app.route("/")
def hello():
    return "Oh, Hello World"
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=80)