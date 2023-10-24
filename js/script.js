document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close-btn');
    const menu = document.querySelector('.mobile__menu');


    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active')
    })

    closeBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
})