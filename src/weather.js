async function getWeather(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=SCK8PST8V2BG7EMRFJB6HYMDD`);
        const data = await response.json();

        console.log(data)
    } catch(error) {
        console.error(error.message)
    }
}

getWeather("new york")