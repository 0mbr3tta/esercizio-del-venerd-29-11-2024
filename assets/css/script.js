
const navbar = document.getElementById('navbar');
const header = document.querySelector('header');


window.addEventListener('scroll', () => {
    
    const headerHeight = header.offsetHeight;

    if (window.scrollY > headerHeight) {
        navbar.classList.add('sticky'); 
    } else {
        navbar.classList.remove('sticky'); 
    }
});