import { apiWeatherKey } from "./apiWeather_key.js";

async function loadApiService() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=-19.7478&lon=-47.9319&appid=${apiWeatherKey}&units=metric`,
    );

    const dataApi = await response.json();
    const weatherCard = document.getElementById("weatherCard");

    console.log(dataApi);

    weatherCard.innerText = `Cidade: ${dataApi.name}
    Temperatura: ${dataApi.main.temp}°C`;
  } catch {
    (error) => console.error(error);
  }
}

loadApiService();
