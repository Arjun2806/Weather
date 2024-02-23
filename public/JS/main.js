const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");

const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityValue = cityName.value;

  if (cityValue === "") {
    city_name.innerText = `Pleasr Enter the City.`;
    datahide.classList.add("data_hide");
  } else {
    let url = `http://api.weatherapi.com/v1/current.json?key=7c2664a3d7d142a9b2e65218242202&q=${cityValue}&aqi=no`;

    const response = await fetch(url);
    const data = await response.json();
    const arrData = [data];

    city_name.innerText = `${arrData[0].location.name}, ${arrData[0].location.country}`;
    temp_real_val.innerText = `${arrData[0].current.temp_c}`;

    const tempMod = arrData[0].current.condition.text;
    console.log(tempMod);
    if (tempMod === "Sunny") {
      temp_status.innerHTML =
        "<i class='fa-light fa-sun' style='color: #FFD43B'></i>";
    } else if (tempMod === "Light rain") {
      temp_status.innerHTML =
        "<i class='fa-solid fa-cloud-moon-rain' style='color: #5530c5;'></i>";
    } else if (tempMod === "Partly cloudy") {
      temp_status.innerHTML =
        "<i class='fa-solid fa-cloud-sun' style='color: #f3f1f1'></i>";
    } else if (tempMod === "Rain") {
      temp_status.innerHTML =
        "<i class=fa-solid fa-cloud-rain' style='color: #74C0FC'></i>";
    } else {
      temp_status.innerHTML =
        "<i class='fas fa-sun' style='color:#eccc68;'></i>";
    }

    datahide.classList.remove("data_hide");
  }
};

submitBtn.addEventListener("click", getInfo);
