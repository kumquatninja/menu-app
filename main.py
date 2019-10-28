from flask import Flask, render_template
from bs4 import BeautifulSoup
import urllib3
import datetime

##### BeautifulSoup4 #####
def make_soup(url):
    http = urllib3.PoolManager()
    response = http.request("GET", url)
    return BeautifulSoup(response.data, 'html.parser')

#check if time is in a range
def time_in_range(start, end, x):
    """Return true if x is in the range [start, end]"""
    if start <= end:
        return start <= x <= end
    else:
        return start <= x or x <= end

def update_menu():
    #date = "2019-10-05"
    today = datetime.date.today()
    date = today.strftime("%Y-%m-%d") # get date from system
    menu_list = []

    dining_hall_dict = {}
    dining_hall_dict["AKERS"] = f"https://eatatstate.msu.edu/menu/The%20Edge%20at%20Akers/all/{date}"
    dining_hall_dict["BRODY"] = f"https://eatatstate.msu.edu/menu/Brody%20Square/all/{date}"
    dining_hall_dict["CASE"] = f"https://eatatstate.msu.edu/menu/South%20Pointe%20at%20Case/all/{date}"
    dining_hall_dict["HOLDEN"] = f"https://eatatstate.msu.edu/menu/Holden%20Dining%20Hall/all/all/{date}"
    dining_hall_dict["HOLMES"] = f"https://eatatstate.msu.edu/menu/Holmes%20Dining%20Hall/all/{date}"
    dining_hall_dict["LANDON"] = f"https://eatatstate.msu.edu/menu/Heritage%20Commons%20at%20Landon/all/{date}"
    dining_hall_dict["OWEN"] = f"https://eatatstate.msu.edu/menu/Thrive%20at%20Owen/all/{date}"
    dining_hall_dict["SHAW"] = f"https://eatatstate.msu.edu/menu/The%20Vista%20at%20Shaw/all/{date}"
    dining_hall_dict["SNYDER_PHILLIPS"] = f"https://eatatstate.msu.edu/menu/The%20Gallery%20at%20Snyder%20Phillips/all/{date}"
    dining_hall_dict["WILSON"] = f"https://eatatstate.msu.edu/menu/Wilson%20Dining%20Hall/all/{date}"

    #get the proper meal maybe have a seperate web page with buttons for each meal
    time = datetime.datetime.now().time()
    meal = ''
    if time_in_range(datetime.time(0, 0, 0), datetime.time(9, 59, 59), time):
        meal = "breakfast"
    elif time_in_range(datetime.time(10, 0, 0), datetime.time(13, 59, 59), time):
        meal = "lunch"
    elif time_in_range(datetime.time(14, 0, 0), datetime.time(23, 59, 59), time):
        meal = "dinner"

    print(f"[{date}{time}]")

    #get the meal for each
    for hall in dining_hall_dict:
        #print(f"{hall} {meal.upper()}\n-----------")
        menu = ''

        soup = make_soup(dining_hall_dict[hall])
        results = soup.find_all("div", class_=f"meal-title {meal}")
        for item in results:
            #print(item.string)
            menu += f"{item.string} \n"
        menu_list.append(menu)

    print('Upload Successful')
    return menu_list

menus = update_menu()
Brody = menus[1]
Case = menus[2]
Holden = menus[3]
Holmes = menus[4]
Landon = menus[5]
Owen = menus[6]
Shaw = menus[7]
Snyder_Phillips = menus[8]
Wilson = menus[9]


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html", Brody=Brody.split('\n'), Case=Case, Holden=Holden, Holmes=Holmes, Landon=Landon, Owen=Owen,
                           Shaw=Shaw, Snyder_Phillips=Snyder_Phillips, Wilson=Wilson)

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0')

