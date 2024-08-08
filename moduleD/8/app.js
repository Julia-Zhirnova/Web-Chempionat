var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

var isDrawing = false
var lastPoint = null

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect()
    return {
        x: ((event.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
        y: ((event.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height,
    }
}

function draw(event) {
    var pos = getMousePos(canvas, event)
    var posX = pos.x
    var posY = pos.y
    
    var canvasCenterX = canvas.width / 2
    var canvasCenterY = canvas.height / 2
    var radius = canvas.width / 2
    var distanceFromCenter = Math.sqrt(
        (posX - canvasCenterX) ** 2 + (posY - canvasCenterY) ** 2
    )

    if (!isDrawing && distanceFromCenter <= radius) {
        lastPoint = pos
        isDrawing = true
    }

    if (isDrawing) {
        context.clearRect(0, 0, canvas.width, canvas.height)
    
        if (distanceFromCenter <= radius) {
            context.strokeStyle = '#E0EB2D'
            context.lineWidth = 2
            context.beginPath()
            context.moveTo(canvasCenterX, canvasCenterY)
            context.lineTo(posX, posY)
            context.stroke()

            context.fillStyle = '#E0EB2D'
            context.beginPath()
            context.arc(canvasCenterX, canvasCenterY, 3, 0, Math.PI * 2, true)
            context.closePath()
            context.fill()
        } else {
            context.strokeStyle = '#E0EB2D'
            context.lineWidth = 2
            context.beginPath()
            context.moveTo(canvasCenterX, canvasCenterY)
            context.lineTo(posX, posY)
            context.stroke()

            context.fillStyle = '#E0EB2D'
            context.beginPath()
            context.arc(canvasCenterX, canvasCenterY, 3, 0, Math.PI * 2, true)
            context.closePath()
            context.fill()
        }            
    }
}

function stopDrawing() {
    isDrawing = false
}

canvas.addEventListener('mousemove', draw)

canvas.addEventListener('mouseup', function () {
    stopDrawing()
})

canvas.addEventListener('mouseleave', function () {
    stopDrawing()
})