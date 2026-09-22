import { apiWeatherKey } from "./apiWeather_key.js";

export async function loadApiService(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiWeatherKey}&units=metric&lang=pt_br`,
    );

    const dataApi = await response.json();
    //const weatherCard = document.getElementById("weatherCard");

    console.log(dataApi);

    return dataApi;
  } catch {
    (error) => console.error(error);
  }
}