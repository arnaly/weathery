import fillOut from "./fillOutData.sec1.js";

// searchbar elements
const input = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// mostrar estado de carga
function setLoadingState(isLoading) {
  const button = document.getElementById("search-button");
  const input = document.getElementById("search-input");

  if (isLoading) {
    button.disabled = true;
    input.disabled = true;
    button.style.opacity = "0.6";
    input.style.opacity = "0.6";
  } else {
    button.disabled = false;
    input.disabled = false;
    button.style.opacity = "1";
    input.style.opacity = "1";
  }
}

// buscar clima por ciudad
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

// cargar datos de una ciudad
async function loadCityWeather(city, showAlert = true) {
  setLoadingState(true);

  const data = await getWeatherByCity(city);

  setLoadingState(false);

  if (data) {
    fillOut(data);
    return true;
  } else {
    if (showAlert) {
      alert("No se pudo obtener el clima. Intenta nuevamente!");
    } else {
      console.warn(`No se pudo cargar el clima de ${city} por defecto`);
    }
    return false;
  }
}

// cargar Barcelona por defecto
document.addEventListener("DOMContentLoaded", async () => {
  console.log("Cargando clima de Barcelona...");
  const success = await loadCityWeather("Barcelona", false);
  if (success) {
    console.log("Barcelona cargada exitosamente");
  }
});

searchButton.addEventListener("click", async () => {
  const city = input.value.trim();
  if (!city) {
    alert("Porfavor introduce una ciudad!");
    return;
  }
  await loadCityWeather(city);
});

input.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    const city = input.value.trim();
    if (!city) {
      alert("Porfavor introduce una ciudad!");
      return;
    }
    await loadCityWeather(city);
  }
});
