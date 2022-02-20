const schform = document.querySelector("#search-form")
const schinput = document.querySelector("#search-form input:first-child")

const ChromeSearchAddress = "http://www.google.co.kr/search?q="

const onSearchEvent = event => {
    event.preventDefault()
    const search_target = schinput.value;
    location.href = ChromeSearchAddress + search_target
}


schform.addEventListener("submit", onSearchEvent)