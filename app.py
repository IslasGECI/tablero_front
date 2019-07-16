from flask import Flask, jsonify, render_template
from .tablero import get_dashboard
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html", tablero=get_dashboard())

if __name__ == "__main__":
    app.run(debug=True)