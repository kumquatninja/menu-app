function mealElement(meal, menuObject)
{
    if (menuObject[meal].length == 0)
    {
        return false;
    }
    let mealElement = document.createElement("div");
    mealElement.setAttribute("class", meal);

    // set the title of meal h tag
    let mealTitle = document.createElement("h3");
    let mealTitleText = document.createTextNode(meal);
    mealTitle.appendChild(mealTitleText);
    mealElement.appendChild(mealTitle);

    let mealList = document.createElement("ul");
    mealList.setAttribute("class", "list");

    //iterate through meal in menu object and add to div
    menuObject[meal].forEach(mealArrayFunction);
    function mealArrayFunction(menuItem, index)
    {
        let mealMenuItem = document.createElement("li");
        let mealMenuItemText = document.createTextNode(menuItem);
        mealMenuItem.appendChild(mealMenuItemText);
        mealList.appendChild(mealMenuItem);
    }

    mealElement.appendChild(mealList);

    return mealElement;


}// meal element function

//tutorial for fetching json data
//https://www.youtube.com/watch?v=1tVCwv_BX2M
fetch("/menus")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){

        for (let day in data) {
            dayJson = JSON.parse(data[day]);
            let weekElement = document.createElement("div");
            weekElement.setAttribute("class", "week");
            weekElement.setAttribute("id", dayJson.date);

            let weekTitle = document.createElement("h1");
            let weekTitleText = document.createTextNode(dayJson.date);
            weekTitle.appendChild(weekTitleText);
            weekElement.appendChild(weekTitle);

            for (let hall in dayJson) {
                if (dayJson.hasOwnProperty(hall)) {
                    // included date for now
                    if (hall == "date"){}
                    else{

                        let hallElement = document.createElement("div");
                        hallElement.setAttribute("class", "hall");
                        hallElement.setAttribute("id", hall);

                        let hallTitle = document.createElement("h2");
                        let hallTitleText = document.createTextNode(hall);
                        hallTitle.appendChild(hallTitleText);
                        hallElement.appendChild(hallTitle);

                        let menuLet = JSON.parse(dayJson[hall]);

                        let menuElement = document.createElement("div");
                        menuElement.setAttribute("class", "menu");

                        for (meal in menuLet)
                        {
                            switch(meal)
                            {
                                case "breakfast":
                                    let breakfastElement = mealElement(meal, menuLet);
                                    if(breakfastElement == false)
                                    {break;}
                                    else{
                                    menuElement.appendChild(breakfastElement);
                                    }
                                    break;
                                case "lunch":
                                    let lunchElement = mealElement(meal, menuLet);
                                    if(lunchElement == false)
                                    {break;}
                                    else{
                                    menuElement.appendChild(lunchElement);
                                    }
                                    break;
                                case "dinner":
                                    let dinnerElement = mealElement(meal, menuLet);
                                    if(dinnerElement == false)
                                    {break;}
                                    else{
                                    menuElement.appendChild(dinnerElement);
                                    }
                                    break;
                                case "late night":
                                    let lateNightElement = mealElement(meal, menuLet);
                                    if(lateNightElement == false)
                                    {break;}
                                    else{
                                    menuElement.appendChild(lateNightElement);
                                    }
                            }//switch
                        }//for meal in menu

                        //append to menu
                        hallElement.appendChild(menuElement);
                        weekElement.appendChild(hallElement);

                    }//date
                }//if
            }//for halls
            document.body.appendChild(weekElement);
        }//for day in week
    })