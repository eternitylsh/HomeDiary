const audio = document.querySelector('#audioplayer audio')

// animation .. ref url : https://kit.fontawesome.com
const animestyle = {
    play: "fa-beat",
    sub: "beatani"
}

const VolumeInterval = 0.1

const onSoundEvent = {
    play: () => audio.play(),
    pause: () => audio.pause(),
    VolUp: () => audio.volume += VolumeInterval,
    VolDown: () => audio.volume -= VolumeInterval,
}


const EventMouse = event => {
    const icon = event.target.querySelector("i")
    icon.classList.toggle(animestyle.play)
    icon.classList.toggle(animestyle.sub)
}

const btns = document.querySelectorAll('#audiocontrols button')

// click.
btns[0].addEventListener("click", onSoundEvent.play)
btns[1].addEventListener("click", onSoundEvent.pause)
btns[2].addEventListener("click", onSoundEvent.VolUp)
btns[3].addEventListener("click", onSoundEvent.VolDown)

// animation.
btns.forEach(btn => btn.addEventListener("mouseenter", EventMouse));
btns.forEach(btn => btn.addEventListener("mouseleave", EventMouse));