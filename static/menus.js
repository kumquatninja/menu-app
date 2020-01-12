//tutorial for fetching json data
//https://www.youtube.com/watch?v=1tVCwv_BX2M
fetch("http://127.0.0.1:5000/menus")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //document.getElementById("day_0").innerHTML = data.day_0;

        for (let day in data) {
            dayJson = JSON.parse(data[day]);
            let weekElement = document.createElement("div");
            weekElement.setAttribute("class", "week");
            weekElement.setAttribute("id", dayJson.date);

            console.log(dayJson.date);

            let weekTitle = document.createElement("h1");
            let weekTitleText = document.createTextNode(dayJson.date);
            weekTitle.appendChild(weekTitleText);
            weekElement.appendChild(weekTitle);

            for (let hall in dayJson) {
                if (dayJson.hasOwnProperty(hall)) {
                    // included date for now
                    if (hall == "date"){}
                    else{

                        let hall_element = document.createElement("div");
                        hall_element.setAttribute("class", "hall");
                        hall_element.setAttribute("id", hall);

                        let hallTitle = document.createElement("h2");
                        let hallTitleText = document.createTextNode(hall);
                        hallTitle.appendChild(hallTitleText);
                        hall_element.appendChild(hallTitle);

                        let menu_let = JSON.parse(dayJson[hall]);

                        let menu_element = document.createElement("div");
                        menu_element.setAttribute("class", "menu");

                        let breakfast_element = document.createElement("div");
                        breakfast_element.setAttribute("class", "breakfast");

                        let breakfastTitle = document.createElement("h3");
                        let breakfastTitleText = document.createTextNode("breakfast");
                        breakfastTitle.appendChild(breakfastTitleText);
                        breakfast_element.appendChild(breakfastTitle);

                        let breakfastList = document.createElement("ul");
                        breakfastList.setAttribute("class", "list");

                        menu_let["breakfast"].forEach(breakfastArrayFunction); 
                        function breakfastArrayFunction(menu_item, index) 
                        {
                            let breakfastMenuItem = document.createElement("li");
                            let breakfastMenuItemText = document.createTextNode(menu_item);
                            breakfastMenuItem.appendChild(breakfastMenuItemText);
                            breakfastList.appendChild(breakfastMenuItem);
                        }
                        breakfast_element.appendChild(breakfastList);
        
                        let lunch_element = document.createElement("div");
                        lunch_element.setAttribute("class", "lunch");

                        let lunchTitle = document.createElement("h3");
                        let lunchTitleText = document.createTextNode("lunch");
                        lunchTitle.appendChild(lunchTitleText);
                        lunch_element.appendChild(lunchTitle);

                        let lunchList = document.createElement("ul");
                        lunchList.setAttribute("class", "list");

                        menu_let["lunch"].forEach(lunchArrayFunction); 
                        function lunchArrayFunction(menu_item, index) 
                        {
                            let lunchMenuItem = document.createElement("li");
                            let lunchMenuItemText = document.createTextNode(menu_item);
                            lunchMenuItem.appendChild(lunchMenuItemText);
                            lunchList.appendChild(lunchMenuItem);
                        }
                        lunch_element.appendChild(lunchList);
                        
                        let dinner_element = document.createElement("div");
                        dinner_element.setAttribute("class", "dinner");

                        let dinnerTitle = document.createElement("h3");
                        let dinnerTitleText = document.createTextNode("dinner");
                        dinnerTitle.appendChild(dinnerTitleText);
                        dinner_element.appendChild(dinnerTitle);

                        let dinnerList = document.createElement("ul");
                        dinnerList.setAttribute("class", "list");

                        menu_let["dinner"].forEach(dinnerArrayFunction); 
                        function dinnerArrayFunction(menu_item, index) 
                        {
                            let dinnerMenuItem = document.createElement("li");
                            let dinnerMenuItemText = document.createTextNode(menu_item);
                            dinnerMenuItem.appendChild(dinnerMenuItemText);
                            dinnerList.appendChild(dinnerMenuItem);
                        }
                        dinner_element.appendChild(dinnerList);

                        menu_element.appendChild(breakfast_element);
                        menu_element.appendChild(lunch_element);
                        menu_element.appendChild(dinner_element);
                        hall_element.appendChild(menu_element);
                        weekElement.appendChild(hall_element);
                    }
                }//if
            }//for
            document.body.appendChild(weekElement);
        }//for day in week
    })