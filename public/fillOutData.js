const weatherIcon = document.getElementById("weather-icon");
const weatherDescription = document.getElementById("weather-description");
const city = document.getElementById("city");
const country = document.getElementById("country");
const lat = document.getElementById("latitude");
const lon = document.getElementById("longitude");

export default function fillOut(data) {
  const currentWeather = data.list[0];
  const currentCountry = data.city;

  weatherDescription.textContent = currentWeather.weather[0].description;
  weatherIcon.src = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;
  weatherIcon.alt = currentWeather.weather[0].description;

  city.textContent = currentCountry.name;
  country.textContent = currentCountry.country;
  lat.textContent = currentCountry.coord.lat;
  lon.textContent = currentCountry.coord.lon;
}
