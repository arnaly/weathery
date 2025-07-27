import fillOut from "./fillOutData.js";

const input = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", async () => {
  const city = input.value.trim();
  if (!city) {
    alert("Porfavor introduce una ciudad!");
    return;
  }
  const data = await getWeatherByCity(city);
  if (data) {
    fillOut(data);
  } else {
    alert("No se pudo obtener el clima. Intenta nuevamente!");
  }
});

async function getWeatherByCity(city) {
  try {
    const req = await fetch(`http://localhost:3000/api/weather?city=${city}`);
    if (!req.ok) {
      throw new Error(`Error al obtener el clima para ${city}`);
    }

    const data = await req.json();
    return data;
  } catch (e) {
    console.error(e.message);
    return null;
  }
}
