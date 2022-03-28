// DOM-ELEMENTS
const btnclick = document.querySelector('.nav_btn')
const topNav = document.querySelector('.topnav')
const nav = document.querySelector('.nav')
const $burgerMenu = document.querySelector('.burger_menu')
const $close = document.querySelector('.close')
const $adaptiveMenu = document.querySelector('.adaptive-header')
const btnclick2 = document.querySelector('.adaptive_nav_btn')
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
///////////



window.addEventListener('scroll', () => {
    if(scrollY > 40){
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