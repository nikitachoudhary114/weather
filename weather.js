const APIURL;
const API_KEY:

searchBox = document.querySelector(".inp");
searchBtn = document.querySelector(".search-img");
loc = document.querySelector(".city");
temp = document.querySelector(".temp");
humidity = document.querySelector(".humidity-data");
speed = document.querySelector(".speed-data");
img = document.querySelector(".weather-img");

async function checkWeather(city) {
    const response = await fetch(APIURL + city + `&appid=${API_KEY}`);
    var data = await response.json();
    console.log(data);

    loc.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + `°C`;
    humidity.innerHTML = data.main.humidity + `%`;
    speed.innerHTML = data.wind.speed + `Km/hr`;

    if (data.weather[0].main == "Clouds") {
        img.src = "./images/clouds.png"
    }
    if (data.weather[0].main == "Clear") {
        img.src = "./images/Clear.png"
    }
    if (data.weather[0].main == "Drizzle") {
        img.src = "./images/drizzle.png"
    }
    if (data.weather[0].main == "Mist") {
        img.src = "./images/mist.png"
    }
    if (data.weather[0].main == "Rain") {
        img.src = "./images/rain.png"
    }
    if (data.weather[0].main == "Snow") {
        img.src = "./images/snow.png"
    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})

