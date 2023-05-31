const toggleMenuBtn = document.querySelector('.toggle-button-menu')
const menuMobile = document.querySelector('.nav-bar-mobile')

toggleMenuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('hide')
})