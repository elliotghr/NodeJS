import axios from "axios";
import chalk from "chalk";

const API_KEY = "3a7b431a880b6ac37cd87fe5c1e6b23b";

// Func async por el uso de axios
async function getWeather(city) {
  try {
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const response = await axios.get(endpoint, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.log(chalk.redBright(error));
    throw new Error(
      `No es posible obtener la información de la ciudad: ${city}`
    );
  }
}

function displayWeather(city, weatherData) {
  console.log(chalk.yellow(`\nInformación del clima: ${city}:`));
  console.log(
    chalk.yellow(
      "☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️"
    )
  );
  console.log(chalk.cyan("Descripción:"), weatherData.weather[0].description);
  console.log(chalk.cyan("Temperatura:"), `${weatherData.main.temp} °C`);
  console.log(chalk.cyan("Humedad:"), `${weatherData.main.humidity}%`);
  console.log(
    chalk.cyan("Velocidad del Viento:"),
    `${weatherData.wind.speed} m/s`
  );
  console.log(
    chalk.yellow("☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️\n")
  );
}
function handleError(error) {
  console.log(chalk.red(`Error: ${error}`));
  process.exit(1);
}

function initApp() {
  // Con process.argv obtenemos los argumentos del comando que lanza el proceso de Node
  let city = process.argv[2];
  //   console.log(city);
  if (!city) {
    console.log(
      chalk.redBright("Por favor, proporciona un nombre de lugar o ciudad")
    );
    console.log(
      chalk.redBright(
        "Ejectua el siguiente comando: node app.js [nombre ciudad]"
      )
    );
  }

  getWeather(city)
    .then((res) => {
      displayWeather(city, res);
    })
    .catch(handleError);
}

initApp();
