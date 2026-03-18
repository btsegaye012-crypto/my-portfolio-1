const apiKey = "1dc9902f3c99519ed3cc0de0b8242ad2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        alert("ከተማው አልተገኘም! እባክህ ስሙን አስተካክል");
    } else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".description").innerHTML = data.weather[0].description;
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
