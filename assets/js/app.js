const navMenu = document.getElementById('navMenu')
const toggleBar1 = document.getElementById('toggleBar1')
const toggleBar2 = document.getElementById('toggleBar2')
const toggleBar3 = document.getElementById('toggleBar3')

const navlinks = document.querySelectorAll('.nav-link')

const toggleNavbar = () => {
    navMenu.classList.toggle('right-0');

    toggleBar1.classList.toggle('rotate-[45deg]');
    toggleBar1.classList.toggle('translate-y-[7px]');
    toggleBar1.classList.toggle('rounded-3xl');

    toggleBar2.classList.toggle('opacity-0');

    toggleBar3.classList.toggle('-rotate-[45deg]');
    toggleBar3.classList.toggle('-translate-y-[7px]');
    toggleBar3.classList.toggle('rounded-3xl');

    document.querySelector('html').classList.toggle('overflow-hidden');
};


navlinks.forEach(item => {
    item.addEventListener('click', toggleNavbar);
});

// Accordion //
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

// Back-To-Top //
const btn = document.getElementById('backToTop');

const toggleButtonOnScroll = () => {
    const shouldShowBtn =
        (window.innerWidth >= 1920 && window.scrollY > 800) ||
        (window.innerWidth < 1920 && window.scrollY > 400);

    if (shouldShowBtn) {
        btn.classList.remove('hidden');
    } else {
        btn.classList.add('hidden');
    }
};

window.addEventListener('scroll', toggleButtonOnScroll);

toggleButtonOnScroll();


btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});