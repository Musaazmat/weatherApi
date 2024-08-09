const apiKey = '1173843b2e322a419a8d17b0f992b5c2';

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