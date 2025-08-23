export async function getData(location) {
  const key = "BVFNM26J7CTEZKPF4EEE7FZNN";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const convertedResponse = await response.json();
    processJSON(convertedResponse);
  } catch (error) {
    console.log(error);
  }
}

function processJSON(json) {
  const weather = {
    address: json.resolvedAddress,
    description: json.description,
    condition: json.currentConditions.conditions,
    humidity: json.currentConditions.humidity,
    temperature: json.currentConditions.temp,
    windSpeed: json.currentConditions.windspeed,
    windDir: json.currentConditions.winddir,
  };
  return weather;
}
