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
