'use strict'

let now = new Date()
let hours = now.getHours()

const sun = document.querySelector('.circulo')
const body = document.querySelector('body')

let arfunc = () =>
    hours > 6 && hours < 12
        ? (sun.style.top = '65vh')
        : hours > 12 && hours < 16
        ? (sun.style.top = '10vh')
        : hours > 16 && hours < 17
        ? (sun.style.top = '-40vh')
        : sun
arfunc()

hours > 17 && hours < 24
    ? (sun.style.background = 'linear-gradient(#f3f4f5,#58626d)')
    : sun
hours > 17 && hours < 24
    ? (body.style.background = 'background: #101e38;')
    : sun
