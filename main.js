document.querySelector('.burger-menu').onclick = () => {
    document.querySelector('.burger-menu').classList.toggle('active');
    document.querySelector('.navigation-menu__links').classList.toggle('active');
    let body = document.getElementsByTagName('body');
    body[0].classList.toggle('lock');
}