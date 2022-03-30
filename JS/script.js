// DOM-ELEMENTS
const btnclick = document.querySelector('.nav_btn')
const topNav = document.querySelector('.topnav')
const nav = document.querySelector('.nav')
const $burgerMenu = document.querySelector('.burger_menu')
const $close = document.querySelector('.close')
const $adaptiveMenu = document.querySelector('.adaptive-header')
const btnclick2 = document.querySelector('.adaptive_nav_btn')
const $carBtn1 = document.querySelector('.car_btn1')
const $carBtn2 = document.querySelector('.car_btn2')
const $span = document.querySelector('.span')
const $range = document.querySelector('.range')
const $accardionbtn = document.querySelector('.accardion_btn')
// DOM-ELEMENTS

            // SWIPER
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
            // SWIPER

///////////
function btnFunc() {
    alert('ВРЯД ЛИ У ТЕБЯ ЕСТЬ ЛИЧНЫЙ КАБИНЕТ || Sorry, you dont have a personal account.')
}
btnclick.addEventListener('click' , e => {
    e.preventDefault()
    btnFunc()
})
   
btnclick2.addEventListener('click', e => {
    e.preventDefault()
    btnFunc()
})

$accardionbtn.addEventListener('click', e => {
    e.preventDefault()
    alert("К сожалению это функция отстуствует! ")
})
///////////



window.addEventListener('scroll', () => {
    if(scrollY > 39){
        topNav.classList.add('fixtopnav')
        nav.classList.add('fixedNav')
    }else{
        nav.classList.remove('fixedNav')
        topNav.classList.remove('fixtopnav')
    }
    
})


$burgerMenu.addEventListener('click', e => {
    e.preventDefault()
    $adaptiveMenu.classList.toggle('add')
})

$close.addEventListener('click', e => {
    e.preventDefault()
    $adaptiveMenu.classList.remove('add')
})

$carBtn1.addEventListener('click' , () => {
    $carBtn1.classList.remove('car1')
    $carBtn2.classList.remove('car2')
})

$carBtn2.addEventListener('click', () => {
    $carBtn1.classList.add('car1')
    $carBtn2.classList.add('car2')
})

function goodsgoods(e){
    $span.innerHTML = `${e.value} $`
}