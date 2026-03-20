import {getWeather} from "./weather.js"

(function submit() {
  const form = document.querySelector("#address-form");
  const address = document.querySelector("#city-input").value;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //dataCall(address);
    modifyValues("New York", 34, "Partly cloudy", "Cloudy with a chance of meatballs", 12, 45, 78, 50)
  });
})();


async function dataCall(name) {
  const addressValues = getWeather(name);
  const {
    addressName,
    addressTemperature,
    addressConditions,
    addressDescription,
    addressWindSpeed,
    addressFeelsLike,
    addressCloudCover,
    addressHumidity,
  } = await getWeather(name);

  console.log(
    addressName,
    addressTemperature,
    addressConditions,
    addressDescription,
    addressWindSpeed,
    addressFeelsLike,
    addressCloudCover,
    addressHumidity,
  )
}

dataCall("sydney")

function modifyValues(name, temp, weather, description, windSpeedVal, feelsLikeVal, cloudCoverVal, humidityVal) {
  const cityName = document.querySelector("#city-name");
  cityName.textContent = `${name}`;

  const tempValue = document.querySelector("#temperature-value");
  tempValue.textContent = `${temp} °C`;

  const weatherValue = document.querySelector("#weather-value");
  weatherValue.textContent = `${weather}`;

  const weatherDescription = document.querySelector("#weather-description");
  weatherDescription.textContent = `${description}`;

  const windSpeed = document.querySelector("#wind-speed");
  windSpeed.textContent = `Wind speed: ${windSpeedVal} kph`;

  const feelsLike = document.querySelector("#feels-like")
  feelsLike.textContent = `Feels like: ${feelsLikeVal} °C`;

  const cloudCover = document.querySelector("#cloud-cover");
  cloudCover.textContent = `Cloud cover: ${cloudCoverVal}%`;

  const humidity = document.querySelector("#humidity");
  humidity.textContent = `Humidity: ${humidityVal}%`;
}
