const API_KEY = "cfb3b37269713aa7caf83b5d122fb02c"
document.cookie = "safeCookie1=foo; SameSite=Lax"; // 쿠키설정.

// https://kit.fontawesome.com
// fontawesome icons..
// fontweather 이거.. 좋은데.. 무료가 한정적이다 ..........
const ft_w = {
    style: "solid",
    icons: {
        '01': { icon: 'sun', ani: 'spin', sub: 'spinani' },
        '02': { icon: 'cloud-sun', ani: 'fade', sub: 'fadeani' },
        '03': { icon: 'cloud', ani: 'bounce', sub: 'bounceani' },
        '04': { icon: 'cloud-meatball', ani: 'bounce', sub: 'frogani' },
        '09': { icon: 'cloud-showers-heavy', ani: 'beat-fade', sub: 'bfani' },
        '10': { icon: 'cloud-sun-rain', ani: 'fade', sub: 'fadeani' },
        '11': { icon: 'bolt', ani: 'beat-fade', sub: 'bfani' },
        '13': { icon: 'snowflake', ani: 'spin', sub: '' },
        '50': { icon: 'smog', ani: 'fade', sub: 'fadeani2' },
    },
    size: "3x"
}

const WIconCLUpdate = newicode => {
    const weather_icon = document.querySelector("#weather i")
    const in_icon = ft_w.icons[newicode];
    weather_icon.className = `fa-${ft_w.style} fa-${in_icon.icon} fa-${ft_w.size} fa-${in_icon.ani} ${in_icon.sub}`;
    console.log(weather_icon.className)
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