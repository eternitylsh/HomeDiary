const images = [
    "98913.jpg",
    "284467.jpg",
    "1132054.jpg",
    "5418600.jpg",
    "2268775.jpg",
    "20463798.jpg",
    "192180.jpg",
    "1308789357_2.jpg",
    "i13344771245.jpg",
]
const chosenbg = images[Math.floor(Math.random() * images.length)]

const bgImage = `url(img/bgs/${chosenbg})`
const bodystyle = document.body.style
bodystyle.backgroundImage = bgImage