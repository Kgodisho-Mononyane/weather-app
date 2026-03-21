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
  cityName.textContent = `${nameVal.toUpperCase()}`;

  const tempValue = document.querySelector("#temperature-value");
  tempValue.textContent = `${tempVal} °C`;

  const weatherValue = document.querySelector("#weather-value");
  weatherValue.textContent = `${weatherVal}`;

  const weatherDescription = document.querySelector("#weather-description");
  weatherDescription.textContent = `${descriptionVal}`;

  const windSpeed = document.querySelector("#wind-speed");
  windSpeed.textContent = `WIND SPEED: ${windSpeedVal} KM/H`;

  const feelsLike = document.querySelector("#feels-like");
  feelsLike.textContent = `FEELS LIKE: ${feelsLikeVal} °C`;

  const cloudCover = document.querySelector("#cloud-cover");
  cloudCover.textContent = `CLOUD COVER: ${cloudCoverVal}%`;

  const humidity = document.querySelector("#humidity");
  humidity.textContent = `HUMIDITY: ${humidityVal}%`;
}
