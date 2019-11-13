from flask import Flask, render_template
from bs4 import BeautifulSoup
from datetime import date, datetime
import urllib3

class HallClass:
    def __init__(self, hallname):
        self.hallname = hallname

    def setBreakfast(self, breakfast):
        self.breakfast = breakfast
    def setLunch(self, lunch):
        self.lunch = lunch
    def setDinner(self, dinner):
        self.dinner = dinner
    def getHallName(self):
        return self.hallname
    def getBreakfast(self):
        return self.breakfast
    def getLunch(self):
        return self.lunch
    def getDinner(self):
        return self.dinner

##### BeautifulSoup4 #####
def make_soup(url):
    http = urllib3.PoolManager()
    response = http.request("GET", url)
    return BeautifulSoup(response.data, 'html.parser')

#date = "2019-10-05"
today = date.today()
date = today.strftime("%Y-%m-%d") # get date from system

dining_hall_dict = {}
dining_hall_dict["Akers"] = "https://eatatstate.msu.edu/menu/The%20Edge%20at%20Akers/all/"+date
dining_hall_dict["Brody"] = "https://eatatstate.msu.edu/menu/Brody%20Square/all/"+date
dining_hall_dict["Case"] = "https://eatatstate.msu.edu/menu/South%20Pointe%20at%20Case/all/"+date
dining_hall_dict["Holden"] = "https://eatatstate.msu.edu/menu/Holden%20Dining%20Hall/all/"+date
dining_hall_dict["Holmes"] = "https://eatatstate.msu.edu/menu/Holmes%20Dining%20Hall/all/"+date
dining_hall_dict["Landon"] = "https://eatatstate.msu.edu/menu/Heritage%20Commons%20at%20Landon/all/"+date
dining_hall_dict["Owen"] = "https://eatatstate.msu.edu/menu/Thrive%20at%20Owen/all/"+date
dining_hall_dict["Shaw"] = "https://eatatstate.msu.edu/menu/The%20Vista%20at%20Shaw/all/"+date
dining_hall_dict["Snyder Phillips"] = "https://eatatstate.msu.edu/menu/The%20Gallery%20at%20Snyder%20Phillips/all/"+date
dining_hall_dict["Wilson"] = "https://eatatstate.msu.edu/menu/Wilson%20Dining%20Hall/all/"+date

now = datetime.now()

meals = ["breakfast","lunch","dinner"]

print(date)
dining_hall_dict_res = {}
for hall in dining_hall_dict.keys():
    dining_hall_dict_res[hall] = HallClass(hall)
    for meal in meals:
        print(hall,meal,"\n-----")
        soup = make_soup(dining_hall_dict[hall])
        results = soup.find_all("div", class_="meal-title "+meal)
        for item in results:
            print(item.string)
        print()
        if(meal=="breakfast"):
            dining_hall_dict_res[hall].setBreakfast(results)
        elif(meal=="lunch"):
            dining_hall_dict_res[hall].setLunch(results)
        elif(meal=="dinner"):
            dining_hall_dict_res[hall].setDinner(results)

app = Flask(__name__)

@app.route("/")
def home(data=None):
    return render_template("home.html",data=dining_hall_dict_res)

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(debug=True)