from flask import Flask, render_template
from bs4 import BeautifulSoup
import urllib3
import datetime
import json


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/menus")
def menus():
    with open('menus.json') as json_file:
        data = json.load(json_file)
    return data

if __name__ == "__main__":
    app.run(host='0.0.0.0')

