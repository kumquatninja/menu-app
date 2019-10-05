from flask import Flask, render_template
from bs4 import BeautifulSoup
from datetime import date, datetime
import urllib3

##### BeautifulSoup4 #####
def make_soup(url):
    http = urllib3.PoolManager()
    response = http.request("GET", url)
    return BeautifulSoup(response.data, 'html.parser')

#date = "2019-10-05"
today = date.today()
date = today.strftime("%Y-%m-%d") # get date from system

dining_hall_dict = {}
dining_hall_dict["CASE"] = f"https://eatatstate.msu.edu/menu/South%20Pointe%20at%20Case/all/{date}"
dining_hall_dict["BRODY"] = f"https://eatatstate.msu.edu/menu/Brody%20Square/all/{date}"
dining_hall_dict["SHAW"] = f"https://eatatstate.msu.edu/menu/The%20Vista%20at%20Shaw/all/{date}"

now = datetime.now()

meal = "breakfast"

print(f"[{date}]")
for hall in dining_hall_dict:
    print(f"{hall} BREAKFAST\n-----------")
    soup = make_soup(dining_hall_dict[hall])
    results = soup.find_all("div", class_=f"meal-title {meal}")
    for item in results:
        print(item.string)
    print()

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(debug=True)