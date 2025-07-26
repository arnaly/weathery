import { getGeocoding } from "./services/geocoding.service.js";
import { getWeather } from "./services/weather.service.js";

export const reqWeather = async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: "City parameter is required" });
  }
  try {
    const { lat, lon } = await getGeocoding(city);
    const data = await getWeather(lat, lon);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
