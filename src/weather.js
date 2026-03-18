export async function getWeather(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=SCK8PST8V2BG7EMRFJB6HYMDD`);
        
        if(!response.ok) {
            throw new Error("Response is fucked, Kgodisho. ")
        }
        const data = await response.json();

        console.log(data)
    } catch(error) {
        console.error(error.message)
    }
}

getWeather("johannesburg")