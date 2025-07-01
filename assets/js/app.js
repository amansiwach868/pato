const navMenu = document.getElementById('navMenu')
const toggleBar1 = document.getElementById('toggleBar1')
const toggleBar2 = document.getElementById('toggleBar2')
const toggleBar3 = document.getElementById('toggleBar3')

const toggleNavbar = () => {
    navMenu.classList.toggle('right-0')
    toggleBar1.classList.toggle('rotate-[35deg]')
    toggleBar2.classList.toggle('opacity-0')
    toggleBar3.classList.toggle('-rotate-[35deg]')
    document.querySelector('html').classList.toggle('overflow-y-hidden')
}