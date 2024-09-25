// Create a promise-based function fetchWeather() that simulates fetching weather information for Lagos. Chain multiple
//.then() calls to process the result.

const fetchWeather = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        location: 'Lagos, Nigeria',
        temperature: -5,
        weather: 'Snowy'
      });
    }, 2000);
  });
}

fetchWeather()
    .then((data) => {
        console.log(`Current Location is: ${data.location}`);
        return data;
    })
    .then((data) => {
        console.log(`Current Temperature in ${data.location} is: ${data.temperature}°C`);
        return data;
    })
    .then((data) => {
        console.log(`Current Weather Status in ${data.location} is: ${data.weather}`);
    });
