async function loadWeather() {
    const response = await fetch("https://api.metro-weather.example/weather");
    const data = await response.json();

    document.getElementById("weather").innerText =
        `Temperature: ${data.temperature}°F
Condition: ${data.condition}
Humidity: ${data.humidity}%`;
}

loadWeather();
