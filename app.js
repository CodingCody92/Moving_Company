const toggleButton = document.getElementsByClassName('toggle-button')[0]
const links = document.getElementsByClassName('navbar-links')[0]
const buttons = document.querySelector('.btn')
const resident = document.querySelector('#resident')
const apt = document.querySelector('#apt')
const office = document.querySelector('#office')
const pack = document.querySelector('#pack')
const port = document.querySelector('#portable')
const state = document.querySelector('#state')

toggleButton.addEventListener('click', () => {
    links.classList.toggle('active')
})

buttons.addEventListener('click', () => {
    buttons.innerHTML = 'Simple Booking'

    setTimeout(() => {
        buttons.innerHTML = 'Easy Booking'
    }, 2000);
})

resident.addEventListener('mouseover', () => {
    resident.innerHTML = 'No Hassle Home Move'

    setTimeout(() => {
        resident.innerHTML = 'Residential Moving'
    }, 2000);
})

apt.addEventListener('mouseover', () => {
    apt.innerHTML = 'Any Size Apartment Move'

    setTimeout(() => {
        apt.innerHTML = 'Apartment Moving'
    }, 2000);
})

office.addEventListener('mouseover', () => {
    office.innerHTML = 'No Move Too Complicated'

    setTimeout(() => {
        office.innerHTML = 'Office Moving'
    }, 2000);
})

pack.addEventListener('mouseover', () => {
    pack.innerHTML = 'We Pack It All'

    setTimeout(() => {
        pack.innerHTML = 'Residential Moving'
    }, 2000);
})

state.addEventListener('mouseover', () => {
    state.innerHTML = 'Anywhere in Texas'

    setTimeout(() => {
        state.innerHTML = 'Statewide Moving'
    }, 2000);
})

port.addEventListener('mouseover', () => {
    port.innerHTML = 'Unpacking Made Easy'

    setTimeout(() => {
        port.innerHTML = 'Storage Moves'
    }, 2000);
})