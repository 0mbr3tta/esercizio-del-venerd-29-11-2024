document.addEventListener('scroll', () => {
const nav = document.querySelector('nav');
    const button = document.querySelector('nav .Buttongetstarted');
const mmm = document.querySelector('.MMM');
const mmmBottom = mmm.getBoundingClientRect().bottom;
if (mmmBottom <= 0) {
        nav.
style.backgroundColor = 'white';
        button.
style.backgroundColor = 'green';
        button.
style.color = 'white';
    }
else {nav.
style.backgroundColor = '#FFC017';
        button.
      
style.backgroundColor = 'black';
        button.
style.color = 'white';
    }
});

/*
document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const dabloccare = document.querySelector('.dabloccare');
const dabloccareTop = dabloccare.getBoundingClientRect().top;
    if (dabloccareTop <= nav.offsetHeight) {
        dabloccare.
classList.add('sticky');
    }  
else { dabloccare.
classList.remove('sticky');
}
});*/

document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const dabloccare = document.querySelector('.dabloccare');
    const navHeight = nav.offsetHeight;
    const dabloccareTop = dabloccare.getBoundingClientRect().top;

    if (dabloccareTop <= navHeight) {
        dabloccare.classList.add('sticky');
    } else if (window.scrollY < dabloccare.offsetTop - navHeight) {
        dabloccare.classList.remove('sticky');
    }
});
