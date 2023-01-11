let city = document.getElementById("city");
let country = document.getElementById("country");
let temp = document.getElementById("temp");
let input = document.getElementById("user_input");

let checkTemp = async () => {
  let city_value = input.value;
  if (city_value == "") {
    alert("Please Enter a City Name before Search");
  } else {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city_value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
    );
    let data = await response.json();
    city.textContent=data.name;
    country.textContent=data.sys.country
    temp.textContent=data.main.temp
  }
};
