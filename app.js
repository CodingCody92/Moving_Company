const toggleButton = document.getElementsByClassName('toggle-button')[0]
const links = document.getElementsByClassName('navbar-links')[0]
const buttons = document.querySelector('.btn')

toggleButton.addEventListener('click', () => {
    links.classList.toggle('active')
})

buttons.addEventListener('click', () => {
    buttons.innerHTML = 'Simple Booking'

    setTimeout(() => {
        buttons.innerHTML = 'Easy Booking'
    }, 3000);
})