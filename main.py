from flask import Flask, render_template
from bs4 import BeautifulSoup
# from apscheduler.schedulers.background import BackgroundScheduler
from tasks import scraper
import urllib3
import datetime
import json


app = Flask(__name__)

'''
sched = BackgroundScheduler(daemon=True)
sched.add_job(lambda : scraper.update_menu(),'cron',minute='*')
sched.start()
'''

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/update_menus")
def update_menus():
    scraper.update_menu()
    with open('menus.json') as json_file:
        data = json.load(json_file)
    return data

@app.route("/menus")
def menus():
    with open('menus.json') as json_file:
        data = json.load(json_file)
    return data

if __name__ == "__main__":
    app.run(host='0.0.0.0')

