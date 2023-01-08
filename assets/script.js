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
var apiKey = "884b48a666f77e7182db403200d6c4bc"

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
                    temp.textContent = "temperature " + response.main.temp + "\u00B0"
                    var humidity = document.querySelector('#humidity')
                    humidity.textContent = "Humidity " + response.main.humidity + " %"
                    var windspeed = document.querySelector("#wind")
                    windspeed.textContent = "Wind Speed " + response.wind.speed + " MPH"
                    var icon = document.querySelector("#icon")
                    icon.textContent = response.weather[3]
                    
                    
                    
                    var future = document.querySelector('#futureForcast')
                    var history = document.querySelector('#history')
                })
                fetch("") // future forcast here
        });

}

document.querySelector('#search').addEventListener('click, keydown', search)
