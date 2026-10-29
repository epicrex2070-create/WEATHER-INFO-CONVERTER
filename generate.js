const fs = require("fs");

const data = JSON.parse(
  fs.readFileSync("weather.json", "utf8")
);

const h = data[0].hourly;

const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Weather Data</title>
</head>
<body>
<h1>Weather Forecast</h1>

<p>Latitude: ${data[0].latitude}</p>
<p>Longitude: ${data[0].longitude}</p>

<table border="1">
<tr>
<th>Time</th>
<th>Temp °F</th>
<th>Humidity %</th>
</tr>

${h.time.map((t,i)=>`
<tr>
<td>${t}</td>
<td>${h.temperature_2m[i]}</td>
<td>${h.relative_humidity_2m[i]}</td>
</tr>
`).join("")}

</table>

</body>
</html>
`;

fs.writeFileSync("index.html", html);
