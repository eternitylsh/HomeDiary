const API_KEY = "cfb3b37269713aa7caf83b5d122fb02c"
document.cookie = "safeCookie1=foo; SameSite=Lax"; // 쿠키설정.

const onGeoSuccess = pos => {
    const lat = pos.coords.latitude // 위도.
    const lon = pos.coords.longitude // 경도.
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(res => res.json()).then(data => {
            const weather_icon = document.querySelector("#weather img:first-child")
            const weather_temp = document.querySelector("#temp_local span:first-child")
            const city = document.querySelector("#temp_local span:last-child")
            city.innerText = data.name
                // 0 is now target wdata.
            const icon_src = data.weather[0].icon.slice(0, -1) // remove last str.. ex.. ..n
            weather_icon.src = `http://openweathermap.org/img/wn/${icon_src}d@2x.png`
            weather_temp.innerText = `${data.main.temp}C`
        }) // update html active after receive from server..
}

const onGeoError = () => {
    alert("Can't find you. No weather for you.")
}

// completly find now location from js..
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)