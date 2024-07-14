const baseUrl = "http://api.weatherapi.com/v1/current.json?key=50fb01ef122644089b283718240207";

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseUrl}&q=${city}&api=yes`);
    return await response.json();
}

export const getWeatherDataForLocation = async (lan,lon) => {
    const response = await fetch(`${baseUrl}&q=${lan},${lon}&api=yes`);
    return await response.json();
}