let burgerMenu = document.querySelector('.burger-menu');
let scrollButton = document.querySelector('.scroll-top');
let linkList = document.querySelector('.navigation-menu__links');
let carousel = document.querySelector('.carousel__visible-box');
let carouselPrevious = document.querySelector('.carousel__previous');
let carouselNext = document.querySelector('.carousel__next');
let currentItem = 1;

burgerMenu.onclick = () => {
    burgerMenu.classList.toggle('active');
    linkList.classList.toggle('active');
    let body = document.getElementsByTagName('body');
    body[0].classList.toggle('lock');
    if (burgerMenu.classList.contains('active')) {
        scrollButton.classList.remove('visible');
    } else if (pageYOffset >= 200) {
        scrollButton.classList.add('visible');
    }
}

scrollButton.onclick = () => {
    window.scrollTo(pageYOffset, 0);
}

window.addEventListener('scroll', function() {
    if (pageYOffset < 200) {
        scrollButton.classList.remove('visible');
    }
    else {
        if (!scrollButton.classList.contains('visible')) {
           scrollButton.classList.add('visible');
        }
    }
});

carouselNext.onclick = () => {
    if (currentItem < 3) {
        carouselPrevious.classList.remove('disabled');
        carousel.classList.remove('item' + currentItem);
        currentItem++;
        carousel.classList.add('item' + currentItem);
    }

    if (currentItem == 3) {
        carouselNext.classList.add('disabled');
    }
}

carouselPrevious.onclick = () => {
    if (currentItem > 1) {
        carouselNext.classList.remove('disabled');
        carousel.classList.remove('item' + currentItem);
        currentItem--;
        carousel.classList.add('item' + currentItem);
    }

    if (currentItem == 1) {
        carouselPrevious.classList.add('disabled');
    }
}