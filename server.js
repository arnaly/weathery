import express from "express";
import dotenv from "dotenv";
import { reqWeather } from "./weather.controller.js";

dotenv.config();

const app = express();

app.get("/api/weather", reqWeather);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
