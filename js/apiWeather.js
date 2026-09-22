export async function loadApiService(lat, lon) {
  try {
    // Exemplo no Frontend chamando o seu novo Backend:
    const response = await fetch(
      `https://clima-api-0w5e.onrender.com/api/weather?lat=${lat}&lon=${lon}`,
    );

    if (!response.ok)
      throw new Error("Falha ao obter os dados do clima do servidor");

    const data = await response.json();

    console.log("Retorno OpenWeather: ", data);

    return data;
  } catch (error) {
    console.error("Erro no apiWeather:", error);
    return null;
  }
}
