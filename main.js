document.querySelector('.burger-menu').onclick = () => {
    document.querySelector('.burger-menu').classList.toggle('active');
    document.querySelector('.navigation-menu__links').classList.toggle('active');
    let body = document.getElementsByTagName('body');
    body[0].classList.toggle('lock');
}

document.querySelector('.scroll-top').onclick = () => {
    window.scrollTo(pageYOffset, 0);
}

window.addEventListener('scroll', function() {
    if (pageYOffset < 200) {
        document.querySelector('.scroll-top').classList.remove('visible');
    }
    else {
        if (!document.querySelector('.scroll-top').classList.contains('visible')) {
            document.querySelector('.scroll-top').classList.add('visible');
        }
    }
})