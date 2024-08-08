const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const circles = []

function addCircle(x, y, radius, dx, dy) {
    circles.push({ x, y, radius, dx, dy })
}

const canvasWidth = canvas.width
const canvasHeight = canvas.height

const numCircles = 3

for (let i = 0; i < numCircles; i++) {
    const x = Math.random() * canvasWidth
    const y = Math.random() * canvasHeight
    const radius = Math.random() * 20 + 10
    const dx = (Math.random() - 0.05) * 2
    const dy = (Math.random() - 0.05) * 2
    addCircle(x, y, radius, dx, dy)
}

canvas.addEventListener('mousemove', event => {
    const mouseX = event.clientX - canvas.offsetLeft
    const mouseY = event.clientY - canvas.offsetTop
    
    circles.forEach(circle => {
        const dx = circle.x - mouseX
        const dy = circle.y - mouseY

        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < circle.radius) {
            const angle = Math.atan2(dy, dx)
            const force = 0.6
            
            circle.dx += Math.cos(angle) * force
            circle.dy += Math.sin(angle) * force
        }
    })
})

function drawCircles() {
context.clearRect(0, 0, canvasWidth, canvasHeight)
circles.forEach(circle => {
    circle.x += circle.dx
    circle.y += circle.dy

    if (
    circle.x + circle.radius > canvasWidth ||
    circle.x - circle.radius < 0
    ) {
        circle.dx *= -1
    }    

    if (
        circle.y + circle.radius > canvasHeight ||
        circle.y - circle.radius < 0
    ) { circle.dy *= -1
    }

    context.beginPath()
    context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
    context.fillStyle = 'blue'
    context.fill()
    context.closePath()
})

    requestAnimationFrame(drawCircles)
}

drawCircles()
