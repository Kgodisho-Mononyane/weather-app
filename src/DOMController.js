(function submit() {
  const form = document.querySelector("#address-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit clicked. It works");
    modifyValues()
  });
})();


function modifyValues() {
  const cityName = document.querySelector("#city-name");
  cityName.textContent = "Cape Town";

  const tempValue = document.querySelector("#temperature-value");
  tempValue.textContent = "24 °c";

  const weatherValue = document.querySelector("#weather-value");
  weatherValue.textContent = "Sunny";

  const weatherDescription = document.querySelector("#weather-description");
  weatherDescription.textContent = "Clear blue skies";

  const windSpeed = document.querySelector("#wind-speed");
  windSpeed.textContent = `Wind speed: Fast af`;

  const feelsLike = document.querySelector("#feels-like")
  feelsLike.textContent = "Feels like: 20 deg";

  const cloudCover = document.querySelector("#cloud-cover");
  cloudCover.textContent = "Cloud cover: 49%";

  const humidity = document.querySelector("#humidity");
  humidity.textContent = "Humidity: 11%";
}
