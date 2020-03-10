// length conversion
function footToMeter() {
    var foot = document.getElementById("foot").value
    document.getElementById("meter").value = 0.3048 * foot
}

var convertLength = document.getElementById("length_convert")
convertLength.addEventListener("click", footToMeter, false)

// temperature conversion
function fToC() {
    var fahrenheit = document.getElementById("fahrenheit").value
    document.getElementById("celsius").value = (5/9) * (fahrenheit - 32)
}

var convertTemp = document.getElementById("temp_convert")
convertTemp.addEventListener("click", fToC, false)

// volume conversion
function gallonToLiter() {
    var gallon = document.getElementById("gallon").value
    document.getElementById("liter").value = gallon * 3.78541
}

var convertVolume = document.getElementById("vol_convert")
convertVolume.addEventListener("click", gallonToLiter, false)

// mass conversion
function poundToKg() {
    var pound = document.getElementById("pound").value
    document.getElementById("kilogram").value = pound * 0.453592
}

var convertMass = document.getElementById("mass_convert")
convertMass.addEventListener("click", poundToKg, false)
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
