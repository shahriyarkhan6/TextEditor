from flask import Flask, render_template, url_for 
import requests

app = Flask(__name__)


app = Flask(__name__, static_folder='static')


@app.route('/')
def UI():
    return render_template('UI.html')


if __name__ == "__main__":

    app.run(debug=True)

    


