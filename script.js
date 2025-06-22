const apiKey = '0dd16d4d3aaebc1f21a1211e33e8c39f';

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const weatherBox = document.getElementById('weatherResult');

  if (!city) {
    weatherBox.innerHTML = `<p>Please enter a city name.</p>`;
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const { name, sys, main, weather, wind } = data;
      const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

      weatherBox.innerHTML = `
        <h2>${name}, ${sys.country}</h2>
        <img src="${icon}" alt="${weather[0].main}" />
        <p><strong>${weather[0].main}</strong> - ${weather[0].description}</p>
        <p>🌡 Temp: ${main.temp}°C</p>
        <p>💧 Humidity: ${main.humidity}%</p>
        <p>💨 Wind: ${wind.speed} m/s</p>
      `;
    })
    .catch(err => {
      weatherBox.innerHTML = `<p>❌ ${err.message}</p>`;
    });
}