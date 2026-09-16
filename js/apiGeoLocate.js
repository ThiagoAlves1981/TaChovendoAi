import { apiGeoKey } from "/js/apiGeoLocate_key.js";

export async function fetchGeoLocateByCord(city, state) {
  try {
    const dataApi = await fetch(
      `https://geocode.maps.co/search?&city=${city}&state=${state}&api_key=${apiGeoKey}&format{json}
`,
    );

    const dataMais = await dataApi.json();

    if (dataMais) {
      return {
        lat: dataMais[0].lat,
        lon: dataMais[0].lon,
      };
    } else {
      throw new Error("Location not found");
    }
  } catch (error) {
    console.error("Erro: ", error);
  }
}

