import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();

// Permite que seu frontend acesse este backend sem ser bloqueado pelo navegador
app.use(cors());

// Rota 1: Clima por Coordenadas
app.get('/api/weather', async (req, res) => {
  const { lat, lon } = req.query;
  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do clima' });
  }
});

// Rota 2: Geolocalização
app.get('/api/geo', async (req, res) => {
  const { city, state } = req.query;
  const apiKey = process.env.GEO_API_KEY;

  try {
    const response = await fetch(
      `https://geocode.maps.co/search?city=${city}&state=${state}&api_key=${apiKey}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar geolocalização' });
  }
});

// Porta onde o servidor vai rodar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});