const navMenu = document.getElementById('navMenu');
const toggleBar1 = document.getElementById('toggleBar1');
const toggleBar2 = document.getElementById('toggleBar2');
const toggleBar3 = document.getElementById('toggleBar3');
const navlinks = document.querySelectorAll('.nav-link');

const openNavbar = () => {
    navMenu.classList.add('right-0');

    toggleBar1.classList.add('rotate-[45deg]', 'translate-y-[7px]', 'rounded-3xl');
    toggleBar2.classList.add('opacity-0');
    toggleBar3.classList.add('-rotate-[45deg]', '-translate-y-[7px]', 'rounded-3xl');

    document.querySelector('html').classList.add('overflow-hidden');
};

const closeNavbar = () => {
    navMenu.classList.remove('right-0');

    toggleBar1.classList.remove('rotate-[45deg]', 'translate-y-[7px]', 'rounded-3xl');
    toggleBar2.classList.remove('opacity-0');
    toggleBar3.classList.remove('-rotate-[45deg]', '-translate-y-[7px]', 'rounded-3xl');

    document.querySelector('html').classList.remove('overflow-hidden');
};

const toggleNavbar = () => {
    const isOpen = navMenu.classList.contains('right-0');
    if (isOpen) {
        closeNavbar();
    } else {
        openNavbar();
    }
};

document.querySelector('.group').addEventListener('click', toggleNavbar);

navlinks.forEach(item => {
    item.addEventListener('click', () => {
        closeNavbar();
    });
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