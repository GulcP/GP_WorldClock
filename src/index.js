function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let bursaElement = document.querySelector("#bursa");
  let bursaDateElement = bursaElement.querySelector(".date");
  let bursaTimeElement = bursaElement.querySelector(".time");
  let bursaTime = moment().tz("Europe/Istanbul");

  bursaDateElement.innerHTML = bursaTime.format("dddd, MMMM Do YYYY");
  bursaTimeElement.innerHTML = bursaTime.format("h:mm:ss [<small>]A[</small>]");

  let osakaElement = document.querySelector("#osaka");
  let osakaDateElement = osakaElement.querySelector(".date");
  let osakaTimeElement = osakaElement.querySelector(".time");
  let osakaTime = moment().tz("Asia/Tokyo");

  osakaDateElement.innerHTML = osakaTime.format("dddd, MMMM Do YYYY");
  osakaTimeElement.innerHTML = osakaTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
              <div class="city" >
                            <div class="cityleft">
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format(
                      "dddd, MMMM Do YYYY"
                    )}</div>
                </div>
                <div class="time">${cityTime.format(
                  "h:mm:ss [<small>]A[</small>]"
                )}</div>
            </div>
              <a href="/">Go back to All Cities</a>;

  
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
