    var numLow = 0;
    var numHigh = 1000;
    
    var adjustedHigh = (parseFloat(numHigh) - parseFloat(numLow)) + 1;
    
    var numRand = Math.floor(Math.random()*adjustedHigh) + parseFloat(numLow);
    
    document.getElementById('getit').innerHTML=numRand;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    
    var currentDate = new Date().toLocaleDateString("en-US",options);

    document.getElementById("dates").innerHTML = currentDate;

    function addDays(dateObj, numDays) {
        dateObj.setDate(dateObj.getDate() + numDays);
        return dateObj;
     }

     var now = new Date(); //Current date
     var nextWeek = addDays(now , 2);
     document.getElementById("later").innerHTML = nextWeek.toLocaleDateString("en-US",options);
