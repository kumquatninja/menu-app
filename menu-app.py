from flask import Flask, render_template
from bs4 import BeautifulSoup
import urllib3

##### BeautifulSoup4 #####
def make_soup(url):
    http = urllib3.PoolManager()
    response = http.request("GET", url)
    soup = BeautifulSoup(response.data, 'html.parser')
    return soup

date = "2019-10-05"
CASE_URL = f"https://eatatstate.msu.edu/menu/South%20Pointe%20at%20Case/all/{date}"
soup = make_soup(CASE_URL)
meal = "breakfast"
results = soup.find_all("div", class_=f"meal-title {meal}")
for item in results:
    print(item.string)

'''
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(debug=True)
'''