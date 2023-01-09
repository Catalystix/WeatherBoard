// //GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that 
// city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon
// representation of weather conditions, the temperature, the humidity,
//  and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date,
// an icon representation of weather conditions, the temperature, 
// the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for 
// that city

//Storing cities in local storage

var cityList = [];

var apiKey = "884b48a666f77e7182db403200d6c4bc"

// function storeCities() {
//     var input = document.getElementById("#userInput");
// localStorage.setItem("cities", input.val());
//     localStorage.setItem("cities", JSON.stringify(cityList));
//     for (var i = 0; i < localStorage.length; i++){
//         // do something with localStorage.getItem(localStorage.key(i));
//     }
// }
// function createCityList() {
//     $("#userInput").empty();
//     cityList.forEach(function(city)
//      {$('#history').prepend($('#history'));})
// }

// var storedCities = JSON.parse(localStorage.getItem("cities"));

const storedCities = document.querySelector("#userInput");
const forget = document.querySelector("#forget");


userInput.addEventListener('#search', function(e) {
    e.preventDefault();
});

userInput.addEventListener('click', function() {
    localStorage.setItem('userInput', storedCities.value);
    displayCities();
});

function displayCities() {
    var storedCities = JSON.parse(localStorage.getItem(''));
    for (var i = 0; i < storedCities.length; i++)
    if (storedCities !== null) {
        var showCities = document.createElement('p');
        displayCities.append(showCities)
    }
}

var search = function () {
    var cityName = document.querySelector('#userInput').value
    console.log(cityName)
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + apiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);    // getting current day forcast
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + response[0].lat + "&lon=" + response[0].lon + "&units=imperial&appid=" + apiKey)
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    console.log(response)
                    var temp = document.querySelector('#temp')
                    temp.textContent = "Temperature " + response.main.temp + "\u00B0"
                    var humidity = document.querySelector('#humidity')
                    humidity.textContent = "Humidity " + response.main.humidity + " %"
                    var windspeed = document.querySelector("#wind")
                    windspeed.textContent = "Wind Speed " + response.wind.speed + " MPH"
                    var icon = document.querySelector("#icon")
                    icon.textContent = response.weather[1].icon


                })
            fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + response[0].lat + "&lon=" + response[0].lon + "&units=imperial&appid=" + apiKey) // future forcast here
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    var futureicon = document.querySelector('#futureIcon')
                    futureicon.textContent = response.weather[3] // need future
                    var futureHumidity = document.querySelector('#futureHumidity')
                    futureHumidity.textContent = "Humidity " + response.main.humidity + " %" // need future
                    var futureWind = document.querySelector('#futureWind')
                    futureWind.textContent = "Wind Speed " + response.wind.speed + " MPH" // Need future
                    var futureTemp = document.querySelector('#futureTemp')
                    futureTemp.textContent = "Temperature " + response.main.temp + "\u00B0"
                    var history = document.querySelector('#history')
                    // history.textContent = 
                })
        });

}

document.querySelector('#search').addEventListener('click', search)
