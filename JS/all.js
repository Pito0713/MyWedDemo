const navSlide = function () {
    const burger = document.querySelector('.nav-burger');
    const nav = document.querySelector('.nav-branch');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}
navSlide();

