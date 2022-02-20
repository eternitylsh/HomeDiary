const clock = document.querySelector("#clock")
const formatNumCount = 2
const fillClockNum = '0'

// padstart : set format two num >> 2, '0' ex) 00:00
const getClock = () => {
    const date = new Date()
    const hour = date.getHours().toString().padStart(formatNumCount, fillClockNum)
    const minute = date.getMinutes().toString().padStart(formatNumCount, fillClockNum)
    clock.innerText = `${hour}:${minute}`
}

getClock() // open now!
setInterval(getClock, 60000)