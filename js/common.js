
    function setBanner(){
        var idxMonth = new Date().getMonth()+1;
        var banner_class = "";

        switch (idxMonth) {
            case 12:
            case 1:
            case 2:
                banner_class = "banner_summer";
                break; 
            case 3:
            case 4:
            case 5:
                banner_class = "banner_autumn";
                break; 
            case 6:
            case 7:
            case 8:
                banner_class = "banner_winter";
                break;
            case 9:
            case 10:
            case 11:
                banner_class = "banner_spring";
                break;
        }
        document.getElementById("banner").className = banner_class;
        document.getElementById("header").className = banner_class;
        
    }
    

    function getDateAndTime(){

        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var now = new Date();
        var day = days[ now.getDay() ];
        var nbrDay = now.getDate();
        var month = months[ now.getMonth() ];
        var year = now.getFullYear();
        
        document.getElementById("DateAndTime").innerHTML = "Today is: " + day + " the " + nbrDay + " of " + month + " " + year;
        
    }

    setBanner();
    getDateAndTime();
