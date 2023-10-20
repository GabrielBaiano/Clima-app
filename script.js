'use strict'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function drawCircle(x, y, radius) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = 'orange'
    ctx.fill()
    ctx.closePath()
}

function updateSpherePosition() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 100

    // Calculate the angle based on the time of day
    const angle =
        (2 * Math.PI * (hours % 12)) / 12 + (2 * Math.PI * (minutes / 60)) / 12

    // Calculate the vertical position of the sphere
    const x = centerX
    const y = centerY + radius * Math.sin(angle)

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw the sphere at the new position
    drawCircle(x, y, 280)

    // Schedule the next update
    setTimeout(updateSpherePosition, 1000) // Update every second
}

updateSpherePosition() // Start the animation
