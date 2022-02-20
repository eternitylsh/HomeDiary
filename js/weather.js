const API_KEY = "cfb3b37269713aa7caf83b5d122fb02c"
document.cookie = "safeCookie1=foo; SameSite=Lax"; // 쿠키설정.

// https://kit.fontawesome.com
// fontawesome icons..
// fontweather 이거.. 좋은데.. 무료가 한정적이다 ..........
const ft_w = {
    style: "solid",
    icons: {
        '01': 'sun',
        '02': 'cloud-sun',
        '03': 'cloud',
        '04': 'cloud-meatball',
        '09': 'cloud-showers-heavy',
        '10': 'cloud-sun-rain',
        '11': 'bolt',
        '13': 'snowflake',
        '50': 'smog',
    },
    size: "3x",
    anime: "fade", // ohter animes in after......
}

const WIconCLUpdate = newicode => {
    const weather_icon = document.querySelector("#weather i")
    weather_icon.className = `fa-${ft_w.style} fa-${ft_w.icons[newicode]} fa-${ft_w.size} fa-${ft_w.anime}`;
}

const onGeoSuccess = pos => {
    const lat = pos.coords.latitude // 위도.
    const lon = pos.coords.longitude // 경도.
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(res => res.json()).then(data => {
            const weather_temp = document.querySelector("#temp_local span:first-child")
            const city = document.querySelector("#temp_local span:last-child")
            city.innerText = data.name
                // 0 is now target wdata.
            const icon_src = data.weather[0].icon.slice(0, -1) // remove last str.. ex.. ..n
            WIconCLUpdate(icon_src)
            weather_temp.innerText = `${data.main.temp}ºC`
        }) // update html active after receive from server..
}

const onGeoError = () => {
    alert("Can't find you. No weather for you.")
}

// completly find now location from js..
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)