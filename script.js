const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f05ba01c3dmsh96c413cb9fb0ca0p1d3048jsn50dda3fb1699',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function getdata() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);


		cloud_pct.innerHTML = result.cloud_pct;
		temp.innerHTML = result.temp;
		feels_like.innerHTML = result.feels_like;
		humidity.innerHTML = result.humidity;
		min_temp.innerHTML = result.min_temp;
		max_temp.innerHTML = result.max_temp;
		wind_speed.innerHTML = result.wind_speed;
		wind_degrees.innerHTML = result.wind_degrees;
		sunrise.innerHTML = result.sunrise;
		sunset.innerHTML = result.sunset;

	} catch (error) {
		console.error(error);
	}
}
submit.addEventListener("click",(e)=>{
	getadata(e.target.value)
	
})