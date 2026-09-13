import { apiGeoKey } from "/js/apiGeoLocate_key.js";

let btn_submit = document.getElementById("submit");

export async function fetchGeoLocateByCord(city, state) {
  //let street = "555 5th Ave";
  //let postalCode = "10017";
  //let country = "US";
  try {
    const dataApi = await fetch(
      `https://geocode.maps.co/search?&city=${city}&state=${state}&api_key=${apiGeoKey}&format{json}
`,
    );

    const dataMais = await dataApi.json();

    if (dataApi.length()) {
      return {
        lat: dataApi[0].lat,
        lon: dataApi[0].lon,
      };
    } else {
      throw new Error("Location not found");
    }
    /*
    console.log("API de GeoLocalizacao", dataMais);

    let lat = dataMais[0].lat;
    let lon = dataMais[0].lon;

    console.log("lat: ", lat, "lon: ", lon);*/
  } catch (error) {
    console.error("Erro: ", error);
  }
}

btn_submit.addEventListener("click", () => {
  let city = document.getElementById("city");
  let state = document.getElementById("state");

  console.log(city.value, state.value);

  fetchGeoLocateByCord(city.value, state.value);
});

//`https://geocode.maps.co/search?street=${street}&city=${city}&state=${state}&postalcode=${postalCode}&country=${country}&api_key=${apiGeoKey}&format{json}`
