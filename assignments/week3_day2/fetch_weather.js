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


  // ---------------------------------------------------------------------------------------

  // Rewrite the fetchWeather() function using async/await .

  const fetchWeather2 = () => {
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

  const getWeather = async () => {
    const data = await fetchWeather2();
    console.log(`Current Location is: ${data.location}`);
    console.log(`Current Temperature in ${data.location} is: ${data.temperature}°C`);
    console.log(`Current Weather Status in ${data.location} is: ${data.weather}`);
  }

  getWeather();

