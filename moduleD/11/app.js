const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
canvas.width = 1200
canvas.height = 600

var isDrawing = false

canvas.addEventListener('mousedown', function (event) {
    isDrawing = true

    var startX = event.clientX - canvas.offsetLeft
    var startY = event.clientY - canvas.offsetTop

    context.beginPath()
    context.moveTo(startX, startY)
})

canvas.addEventListener('mousemove', function (event) {
    if (isDrawing){
    var currentX = event.clientX - canvas.offsetLeft
    var currentY = event.clientY - canvas.offsetLeft

    context.lineTo(currentX, currentY)
    context.stroke()
 }
})

canvas.addEventListener('mouseup', function (event) {
    isDrawing = false
})