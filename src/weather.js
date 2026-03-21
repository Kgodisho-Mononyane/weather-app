export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=SCK8PST8V2BG7EMRFJB6HYMDD`,
    );

    if (!response.ok) {
      throw new Error("Response is fucked, Kgodisho. ");
    }
    const data = await response.json();

    const addressName = data.address;
    const addressTemperature = Math.round(
      ((data.currentConditions.temp - 32) * 5) / 9,
    );
    const addressConditions = data.currentConditions.conditions;
    const addressDescription = data.description;
    const addressWindSpeed = data.currentConditions.windspeed;
    const addressFeelsLike = Math.round(
      ((data.currentConditions.feelslike - 32) * 5) / 9,
    );
    const addressCloudCover = data.currentConditions.cloudcover;
    const addressHumidity = data.currentConditions.humidity;

    return {
      addressName,
      addressTemperature,
      addressConditions,
      addressDescription,
      addressWindSpeed,
      addressFeelsLike,
      addressCloudCover,
      addressHumidity,
    };
  } catch (error) {
    console.error(error.message);
  }
}
