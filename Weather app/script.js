const apiKey = "abf346d274c4839d7b63607d0d3a951d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const rightSide = document.querySelector(".right_side");
const searchBox = document.querySelector(".searchbar");
const searchBtn = document.querySelector("#searchbtn");
const weatherIcon = document.querySelector(".weather-icon");
const weatherImg = document.querySelector("#type1");
async function updateWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "^C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }

  if (data.main.temp < 0) {
    rightSide.style.background = "none";
    rightSide.style.transition = "background-color 2s";

    rightSide.style.backgroundColor = "lightblue";

    setTimeout(() => {
      rightSide.style.transition = "";
    }, 2000);
  } else if (data.main.temp >= 30) {
    rightSide.style.background = "none";
    rightSide.style.transition = "background-color 2s";

    rightSide.style.backgroundColor = "red";

    setTimeout(() => {
      rightSide.style.transition = "";
    }, 2000);
  }
}

const firstCountry = document.querySelector(".firstCountry");
const SecCountry = document.querySelector(".SecCountry");
const ThirdCountry = document.querySelector(".ThirdCountry");
const FourthCountry = document.querySelector(".FourthCountry");
const FifthCountry = document.querySelector(".FifthCountry");

async function updateFirst(city) {
  if (city == firstCountry) {
    const response = await fetch(apiUrl + "baku" + `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(" .firstCountry .present_name1").innerHTML =
      data.name;
    document.querySelector(" .firstCountry #temp1").innerHTML =
      data.main.temp + "^C";
  } else if (city == SecCountry) {
    const response = await fetch(apiUrl + "moscow" + `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(" .SecCountry .present_name1").innerHTML = data.name;
    document.querySelector(" .SecCountry #temp1").innerHTML =
      data.main.temp + "^C";
  } else if (city == ThirdCountry) {
    const response = await fetch(apiUrl + "london" + `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(" .ThirdCountry .present_name1").innerHTML =
      data.name;
    document.querySelector(" .ThirdCountry #temp1").innerHTML =
      data.main.temp + "^C";
  } else if (city == FourthCountry) {
    const response = await fetch(apiUrl + "toronto" + `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(" .FourthCountry .present_name1").innerHTML =
      data.name;
    document.querySelector(" .FourthCountry #temp1").innerHTML =
      data.main.temp + "^C";
  } else if (city == FifthCountry) {
    const response = await fetch(apiUrl + "budapest" + `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(" .FifthCountry .present_name1").innerHTML =
      data.name;
    document.querySelector(" .FifthCountry #temp1").innerHTML =
      data.main.temp + "^C";
  }

  if (data.weather[0].main == "Clouds") {
    weatherImg.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherImg.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImg.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImg.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherImg.src = "images/mist.png";
  }
}

updateFirst(firstCountry);
updateFirst(SecCountry);
updateFirst(ThirdCountry);
updateFirst(FourthCountry);
updateFirst(FifthCountry);

searchBtn.addEventListener("click", () => {
  updateWeather(searchBox.value);
});
