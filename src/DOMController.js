import { getWeather } from "./weather.js";

(function submit() {
  const form = document.querySelector("#address-form");
  const address = document.querySelector("#address-input"); //input

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    dataCall(`${address.value}`); //function call that
    //console.log(address.value)
  });
})();

async function dataCall(name) {
  const {
    addressName,
    addressTemperature,
    addressConditions,
    addressDescription,
    addressWindSpeed,
    addressFeelsLike,
    addressCloudCover,
    addressHumidity,
  } = await getWeather(`${name}`);

  modifyValues(
    addressName,
    addressTemperature,
    addressConditions,
    addressDescription,
    addressWindSpeed,
    addressFeelsLike,
    addressCloudCover,
    addressHumidity,
  );
}

function modifyValues(
  nameVal,
  tempVal,
  weatherVal,
  descriptionVal,
  windSpeedVal,
  feelsLikeVal,
  cloudCoverVal,
  humidityVal,
) {
  const cityName = document.querySelector("#city-name");
  cityName.textContent = "";
  cityName.textContent = `${nameVal}`;

  const tempValue = document.querySelector("#temperature-value");
  tempValue.textContent = "";
  tempValue.textContent = `${tempVal} °C`;

  const weatherValue = document.querySelector("#weather-value");
  weatherValue.textContent = "";
  weatherValue.textContent = `${weatherVal}`;

  const weatherDescription = document.querySelector("#weather-description");
  weatherDescription.textContent = "";
  weatherDescription.textContent = `${descriptionVal}`;

  const windSpeed = document.querySelector("#wind-speed");
  windSpeed.textContent = "";
  windSpeed.textContent = `Wind speed: ${windSpeedVal} kph`;

  const feelsLike = document.querySelector("#feels-like");
  feelsLike.textContent = "";
  feelsLike.textContent = `Feels like: ${feelsLikeVal} °C`;

  const cloudCover = document.querySelector("#cloud-cover");
  cloudCover.textContent = `Cloud cover: ${cloudCoverVal}%`;
  cloudCover.textContent = `Cloud cover: ${cloudCoverVal}%`;

  const humidity = document.querySelector("#humidity");
  humidity.textContent = `Humidity: ${humidityVal}%`;
}
