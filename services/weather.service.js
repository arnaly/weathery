import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;

export async function getWeather(lat, lon) {
  try {
    const req = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${API_KEY}`
    );

    if (!req.ok) {
      throw new Error(`Error fetching API: ${req.status}`);
    }

    const res = await req.json();

    if (!res.list || res.list.length === 0) {
      throw new Error(
        `No results found for the coordinates given: LAT: ${lat}, LON: ${lon}`
      );
    }
    return res;
  } catch (e) {
    console.error(e.message);
  }
}
