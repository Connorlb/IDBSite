from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home() :
    return render_template('home.html')

@app.route("/model1")
def model1() :
    return render_template('model1.html')

@app.route("/model2")
def model2() :
    return render_template('model2.html')

@app.route("/model3")
def model3() :
    return render_template('model3.html')

@app.route("/about")
def about() :
    return render_template('about.html')

if __name__ == "__main__" :
    app.run(host='0.0.0.0', debug=True, port=80)
