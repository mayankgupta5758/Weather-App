const apiKey = "d092e5f0b7829b3dd09e850ec3a9ca4e";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherImg = document.querySelector(".weather-img");
const weatherAlt = document.querySelector(".weather-img");

async function check(city) {
    const responce = await fetch(apiURL + city + `&appid=${apiKey}`)
    var data = await responce.json();

    console.log(data);

    
    if (responce.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
        
        weatherImg.src = "image/"+data.weather[0].main+".png"
        weatherImg.alt = data.weather[0].main
    }

}

searchBtn.addEventListener("click", ()=>{
    check(searchBox.value);
})



