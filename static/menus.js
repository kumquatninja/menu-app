console.log('Hello World!');
//tutorial for fetching json data
//https://www.youtube.com/watch?v=1tVCwv_BX2M
fetch("http://127.0.0.1:5000/menus")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //document.getElementById("day_0").innerHTML = data.day_0;

        let day_0_let = JSON.parse(data.day_0);

        for (let hall in day_0_let) {
            if (day_0_let.hasOwnProperty(hall)) {
                // included date for now
                if (hall == "date"){}
                else{
                    let id_name = "day_0".concat("_", hall)

                    let menu_let = JSON.parse(day_0_let[hall]);

                    console.log(menu_let)
                    let id_name_breakfast = id_name.concat("_", "breakfast")
                    console.log(id_name_breakfast)
                    document.getElementById(id_name_breakfast).innerHTML = menu_let["breakfast"];
      
                    let id_name_lunch = id_name.concat("_", "lunch")
                    console.log(id_name_lunch)
                    document.getElementById(id_name_lunch).innerHTML = menu_let["lunch"];
                    
                    let id_name_dinner = id_name.concat("_", "dinner")
                    console.log(id_name_dinner)
                    document.getElementById(id_name_dinner).innerHTML = menu_let["dinner"];
                    
                }
            }//if
        }//for

        //console.log(day_0_var)
        //document.getElementById("day_1").innerHTML = data.day_1;
        //document.getElementById("day_2").innerHTML = data.day_2;
        //document.getElementById("day_3").innerHTML = data.day_3;
        //document.getElementById("day_4").innerHTML = data.day_4;
        //document.getElementById("day_5").innerHTML = data.day_5;
        //document.getElementById("day_0").innerHTML = data.day_6;
    })