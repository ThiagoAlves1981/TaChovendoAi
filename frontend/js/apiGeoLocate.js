export async function fetchGeoLocateByCord(city, state) {
  try {
    const response = await fetch(
      `https://clima-api-0w5e.onrender.com/api/geo?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`,
    );

    if (!response.ok) {
      throw new Error("Falha ao obter coordenadas do servidor.");
    }

    const dataMais = await response.json();
    console.log("Retorno GeoLocate: ",dataMais);

    if (dataMais && dataMais.length > 0) {
      return {
        lat: dataMais[0].lat,
        lon: dataMais[0].lon,
      };
    } else {
      throw new Error("Nenhum resultado encontrado para esta cidade.");
    }
  } catch (error) {
    console.error("Erro no apiGeoLocate: ", error);
  }
}
