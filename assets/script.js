// Setting up the One Call Open Weather API

let weatherKey =
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2824096d7fe149eff6336b2232af2c6c";

// Set up OpenWeather Direct Geocoding API, uses this API call:
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=2824096d7fe149eff6336b2232af2c6c
let cityName;

document.getElementById("searchBtn").addEventListener("click", searchCity);
function searchCity(event) {
  event.preventDefault();

  let cityName = citySearch.value;

  // if (cityName === undefined) {
  //   alert("Please enter a valid city")
  // }
}

let geoCoord =
  "http://api.openweathermap.org/geo/1.0/direct?q=" +
  cityName +
  "&limit=1&appid=2824096d7fe149eff6336b2232af2c6c";

// Get the coordinates of the city from Openweather Geocoding API


function getCoordinates (cityName) {
  let geoCoord =
  "http://api.openweathermap.org/geo/1.0/direct?q=" +
  cityName +
  "&limit=1&appid=2824096d7fe149eff6336b2232af2c6c";

  fetch(geoCoord)
  .then (function (response) {
    if (response.ok) {
      console.log(response);
      response.json().then (function (data) {
        // Receiving datat points for city name, latitude, and longitude
        let city = data[0].name;
        let latitude = data[0].lat;
        let longitude = data[0].longitude
        // Now passed in to get exact weather data
        getWeather(city, latitude, longitude);
      });
    }
  }
  )
}


// Receiving weather from specific city from their latitude and longitude coord

function getWeather(city, latitude, longitude) {
  let weatherForecast =
  "https://api.openweathermap.org/data/2.5/onecall?lat=" +
  latitude +
  "&lon=" +
  longitude +
  "&exclude=minutely,hourly,alerts&units=imperial&appid=2824096d7fe149eff6336b2232af2c6c";

  fetch(weatherForecast)
    .then (function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data.daily);
          currentWeather(data.daily, city);
          fiveDayForecast(data.daily);
        })
      }
    })
}




function currentWeather

function fiveDayForecast



// function coordinates() {
//   return fetch(geoCoord)
//     .then(function (response) {
//       if (response.ok) {
//         return response.json();
//       } else {
//         console.error("could not get coordinates!");
//       }
//     })
//     .then(function (data) {
//       longitude = data.coord.lon;
//       latitude = data.coord.lat;
//       if (data.ok) {
//         return {
//           longitude: data.coord.lon,
//           latitude: data.coord.lat,
//         };
//       }
//     });
// }

let weatherForecast =
  "https://api.openweathermap.org/data/2.5/onecall?lat=" +
  latitude +
  "&lon=" +
  longitude +
  "&exclude=minutely,hourly,alerts&units=imperial&appid=2824096d7fe149eff6336b2232af2c6c";

// Get the weather data

// function weather(input) {
//   return fetch(weatherForecast).then(function (response) {
//     if (response.ok) {
//       return response.json().then(function (data) {
//         for (let i = 1; i < 6; i++) let;
//       });
//     }
//   });
// }
