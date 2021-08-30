const upBt = document.querySelector('.up-button')
const downBt = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlideIndex = 0

upBt.addEventListener('click', () => {
    changeSlide('up')
})

downBt.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction){
    if (direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    } else if (direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesCount - 1
        }
    }

const height = container.clientHeight

mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}