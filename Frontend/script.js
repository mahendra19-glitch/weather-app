async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultBox = document.getElementById("weatherResult");

  if (city === "") {
    resultBox.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const apiKey = "9b4de7687060f5ff82b1853258d6e3d2"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      resultBox.innerHTML = "<p>City not found. Try again.</p>";
      return;
    }

    resultBox.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} km/h</p>
    `;
  }
  catch (error) {
    resultBox.innerHTML = "<p>Error fetching weather data.</p>";
  }
}
async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultBox = document.getElementById("weatherResult");

  if (city === "") {
    resultBox.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const apiKey = "9b4de7687060f5ff82b1853258d6e3d2"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      resultBox.innerHTML = "<p>City not found. Try again.</p>";
      return;
    }

    resultBox.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} km/h</p>
    `;
  }
  catch (error) {
    resultBox.innerHTML = "<p>Error fetching weather data.</p>";
  }
}
