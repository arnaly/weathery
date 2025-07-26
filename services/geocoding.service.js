import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;

export async function getGeocoding(city) {
  try {
    const req = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );

    if (!req.ok) {
      throw new Error(`Error fetching API: ${req.status}`);
    }

    const res = await req.json();

    if (res.length == 0) {
      throw new Error(`No results found for city ${city}`);
    }
    const { lat, lon } = res[0];
    return { lat, lon };
  } catch (e) {
    console.error(e.message);
  }
}
