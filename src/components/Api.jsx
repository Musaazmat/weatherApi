const apiKey = import.meta.env.VITE_API_KEY;
const getWeather = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error fetching the weather data:', error);
    return null; // Return null in case of error
  }
};

export default getWeather;