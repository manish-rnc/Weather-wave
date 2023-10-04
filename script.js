const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d9c039014mshe92b0685ef79937p17be9bjsn313513b7e4a3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function getWeather(enteredCity) {
    try {
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${enteredCity}`;
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);

        const res = JSON.parse(result);

        cityName.innerHTML = enteredCity.charAt(0).toUpperCase() + enteredCity.slice(1)

        temp.innerHTML = res.temp  
        min_temp.innerHTML = res.min_temp  
        max_temp.innerHTML = res.max_temp
        feels_like.innerHTML = res.feels_like
        humidity.innerHTML = res.humidity
        wind_speed.innerHTML = res.wind_speed 
        wind_degrees.innerHTML = res.wind_degrees
        sunrise.innerHTML = res.sunrise 
        sunset.innerHTML = res.sunset 

    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

