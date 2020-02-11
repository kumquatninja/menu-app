from bs4 import BeautifulSoup
import urllib3
import json
import datetime
# Used this https://stackabuse.com/reading-and-writing-json-to-a-file-in-python/
class Halls:
    def __init__(self):
        self.hall_menu = {} # used to store breakfast lunch and dinner for each hall
        self.daily_menu = {}
        self.daily_menu_json = ""
        self.weekly_menu = {}
        self.weekly_menu_json = ""

        # used for storing dining halls and their urls
        self.dining_hall_dict = {}
    
    def set_meal(self, meal):
        self.results = self.soup.find_all("div", class_=f"meal-title {meal}")
        self.meal_menu = []

        for item in self.results:
            self.meal_menu.append(item.string)
        
        return self.meal_menu

    def set_menus(self):

        for i in range(7):
            self.date = datetime.date.today()
            self.date += datetime.timedelta(days=i)
            self.date_str = self.date.strftime("%Y-%m-%d") #create date as str to store as dict key

            print(f"Scraping {self.date_str} menus")

            self.dining_hall_dict["AKERS"] = f"https://eatatstate.msu.edu/menu/The%20Edge%20at%20Akers/all/{self.date}"
            self.dining_hall_dict["BRODY"] = f"https://eatatstate.msu.edu/menu/Brody%20Square/all/{self.date}"
            self.dining_hall_dict["CASE"] = f"https://eatatstate.msu.edu/menu/South%20Pointe%20at%20Case/all/{self.date}"
            self.dining_hall_dict["HOLDEN"] = f"https://eatatstate.msu.edu/menu/Holden%20Dining%20Hall/all/all/{self.date}"
            self.dining_hall_dict["HOLMES"] = f"https://eatatstate.msu.edu/menu/Holmes%20Dining%20Hall/all/{self.date}"
            self.dining_hall_dict["LANDON"] = f"https://eatatstate.msu.edu/menu/Heritage%20Commons%20at%20Landon/all/{self.date}"
            self.dining_hall_dict["OWEN"] = f"https://eatatstate.msu.edu/menu/Thrive%20at%20Owen/all/{self.date}"
            self.dining_hall_dict["SHAW"] = f"https://eatatstate.msu.edu/menu/The%20Vista%20at%20Shaw/all/{self.date}"
            self.dining_hall_dict["SNYDER-PHILLIPS"] = f"https://eatatstate.msu.edu/menu/The%20Gallery%20at%20Snyder%20Phillips/all/{self.date}"
            self.dining_hall_dict["WILSON"] = f"https://eatatstate.msu.edu/menu/Wilson%20Dining%20Hall/all/{self.date}"

            for hall in self.dining_hall_dict:

                self.soup = make_soup(self.dining_hall_dict[hall])

                self.hall_menu["name"] = hall
                #self.hall_menu["date"] = self.date
                self.hall_menu["breakfast"] = self.set_meal("breakfast")
                self.hall_menu["lunch"] = self.set_meal("lunch")
                self.hall_menu["dinner"] = self.set_meal("dinner")
                self.hall_menu["late night"] = self.set_meal("late night")

                self.hall_menu_json = json.dumps(self.hall_menu)

                self.daily_menu[hall] = self.hall_menu_json
            self.daily_menu["date"] = self.date_str
            self.daily_menu_json = json.dumps(self.daily_menu)
            self.weekly_menu[f"day_{i}"] = self.daily_menu_json
        self.weekly_menu_json = json.dumps(self.weekly_menu)

    def write_menus(self):
        open('../menus.json', 'w').close()
        print("Writing to json file")
        with open('menus.json', 'w') as outfile:
            json.dump(self.weekly_menu_json, outfile, ensure_ascii=False, indent=4, separators=(',', ': '))

def make_soup(url):
    http = urllib3.PoolManager()
    response = http.request("GET", url)
    return BeautifulSoup(response.data, 'html.parser')

def update_menu():
    today = datetime.date.today()
    date = today.strftime("%Y-%m-%d") # get date from system
    time = datetime.datetime.now().time()

    print(f"Scraping menus")

    halls = Halls()
    halls.set_menus()
    halls.write_menus()

    print('Menus scraped successfully')

#update_menu()