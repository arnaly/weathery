// header right content
const weatherIcon = document.getElementById("weather-icon");
const weatherDescription = document.getElementById("weather-description");

// header left content
const city = document.getElementById("city");
const country = document.getElementById("country");
const lat = document.getElementById("latitude");
const lon = document.getElementById("longitude");

export default function fillOut(data) {
  const currentWeather = data.list[0];
  const currentCountry = data.city;

  // convert first letter to uppercase
  const weatherDescriptionUpperCase =
    currentWeather.weather[0].description[0].toUpperCase() +
    currentWeather.weather[0].description.slice(1);

  // header right content
  weatherDescription.textContent = weatherDescriptionUpperCase;
  weatherIcon.src = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;
  weatherIcon.alt = currentWeather.weather[0].description;

  // header left content
  city.textContent = currentCountry.name;
  country.textContent = currentCountry.country;
  lat.textContent = currentCountry.coord.lat;
  lon.textContent = currentCountry.coord.lon;
}
