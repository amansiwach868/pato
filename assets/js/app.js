const navMenu = document.getElementById('navMenu')
const toggleBar1 = document.getElementById('toggleBar1')
const toggleBar2 = document.getElementById('toggleBar2')
const toggleBar3 = document.getElementById('toggleBar3')

const navlinks = document.querySelectorAll('.nav-link')

const toggleNavbar = () => {
    navMenu.classList.toggle('right-0');
    toggleBar1.classList.toggle('rotate-[35deg]');
    toggleBar2.classList.toggle('opacity-0');
    toggleBar3.classList.toggle('-rotate-[35deg]');
    document.querySelector('html').classList.toggle('max-md:overflow-y-hidden');
};

navlinks.forEach(item => {
    item.addEventListener('click', toggleNavbar);
});

const items = document.querySelectorAll('.accordion-item');
items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const arrow = item.querySelector('.arrow-icon');

    header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        items.forEach(i => {
            i.classList.remove('active');
            i.classList.add('rounded-full');
            i.style.borderRadius = '50px';
            i.classList.remove('shadow-md', 'border', 'border-black/10');
            i.querySelector('.accordion-content').style.maxHeight = null;
            i.querySelector('.arrow-icon').classList.remove('rotate-90');
        });

        if (!isOpen) {
            item.classList.add('active');
            item.classList.remove('rounded-full');
            item.style.borderRadius = '30px';
            item.classList.add('shadow-md', 'border', 'border-black/10');
            content.style.maxHeight = content.scrollHeight + "px";
            arrow.classList.add('rotate-90');
        }
    });
});
