//enter number for converstions
//square foot to square meter: * sq. foot by 0.092
//mile per gallon to kilometer per liter: * mile by 3.785
//watt hour to kilowatt hour: / watt hour by 1000
//teaspoon to millilitre: *  teaspoon by 4.929
    //click convert button 
    //converts number

function calcMeter() {
    x = document.getElementById("sqft").value;
    document.getElementById("sqm").value = (x * 0.092); 
}

function calcKilometer() {
    x = document.getElementById("mpg").value; 
    document.getElementById("kpl").value = (x * 3.785); 
}

function calcKilowattHour() {
    x = document.getElementById("watt_hour").value; 
    document.getElementById("kilowatt_hour").value = (x / 1000); 
}

function calcMillilitre(){
    x = document.getElementById("teaspoon").value; 
    document.getElementById("millilitre").value = (x * 4.929); 
}