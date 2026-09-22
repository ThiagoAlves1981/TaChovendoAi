import { fetchGeoLocateByCord } from "./apiGeoLocate.js";
import { loadApiService } from "./apiWeather.js";

let btn_submit = document.getElementById("submit");

btn_submit.addEventListener("click", async () => {
  let city = document.getElementById("city");
  let state = document.getElementById("state");

  console.log(city.value, state.value);

  const { lat, lon } = await fetchGeoLocateByCord(city.value, state.value);

  console.log("lat: ", lat, "lon: ", lon);

  let data = await loadApiService(lat, lon);
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(
    "pt-BR",
    {
      hour: "2-digit",
      minute: "2-digit",
    },
  );
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  //console.log("Sunrise: ", sunrise, "Sunset: ", sunset);

  let weatherShowCard = document.getElementById("weatherCard");
  let weatherCardMarine = document.getElementById("weatherCardMarine");
  let weatherCardFitness = document.getElementById("weatherCardFitness");

  weatherShowCard.innerHTML = `
  <strong>Cidade:</strong> ${data.name} </br>
  <strong>Temperatura:</strong> ${data.main.temp.toPrecision(2)}°C</br>
  <strong>Umidade:</strong> ${data.main.humidity}%</br>
  
  
  `;

  weatherCardMarine.innerHTML = `
  <strong>Pressão:</strong> ${data.main.pressure} hPa</br>
  <strong>Altura em relação ao nivel do mar:</strong> ${data.main.sea_level} m</br>
  `;

  let windSpeedKmH = data.wind.speed * 3.6

  weatherCardFitness.innerHTML = `
  <strong>Tempo:</strong> ${data.weather[0].description}</br>
  <strong>Vento:</strong> ${windSpeedKmH.toPrecision(3)} km/h</br>
  <strong>Nascer do Sol:</strong> ${sunrise}</br>
  <strong>Por do Sol:</strong> ${sunset}</br>
  `;
});
