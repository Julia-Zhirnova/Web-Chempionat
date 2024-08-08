let square = document.querySelector('.square')

window.addEventListener('mousemove', event =>{
    let x = event.clientX / innerWidth
    let y = event.clientY / innerHeight

    const red = Math.floor(x * 255)
    const green = Math.floor(x * y * 255)
    const blue = Math.floor(y * 255)

    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    square.textContent = `rgb(${red}, ${green}, ${blue})`
})