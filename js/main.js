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
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  console.log("Sunrise: ", sunrise, "Sunset: ", sunset);

  let weatherShowCard = document.getElementById("weatherShow");

  weatherShowCard.innerHTML = `
  Cidade: ${data.name} </br>
  Temperatura: ${data.main.temp}°C</br>
  Umidade: ${data.main.humidity}%</br>
  Pressão: ${data.main.pressure} bar</br>
  Altura em relação ao nivel do mar: ${data.main.sea_level} m</br>
  ${data.weather[0].description}, otimo para caminhar!</br>
  Vento: ${data.wind.speed} km/h</br>
  Nascer do Sol: ${sunrise}</br>
  Por do Sol: ${sunset}</br>
  `;
});
