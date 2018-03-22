from flask import Flask, render_template

# the all-important app variable:
app = Flask(__name__, static_folder="../static", template_folder="../public")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html');

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, use_reloader=False, port=80)
    #app.run()
