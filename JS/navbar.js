const navSlide = function () {
    const burger = document.querySelector('.nav-burger');
    const nav = document.querySelector('.nav-branch');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}
navSlide();

window.onload = function () {
    navFixed();
}
function navFixed() {
    var nav = document.getElementById('nav');
    var navA = document.querySelectorAll('#nav-text');
    var navHeight = nav.offsetTop;

    window.onscroll = function () {
        var nav = document.getElementById('nav');
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        
        if (scrollTop <= navHeight) {
            nav.style.position = 'relative';
            nav.style.backgroundColor='#ffffff';
            for(i=0;i<=3;i++){
                navA[i].style.color='var(--text-color)'
            }
        } else {
            nav.style.position = 'fixed';
            nav.style.backgroundColor='#f3a16a';
            for(i=0;i<=3;i++){
                navA[i].style.color='#ffffff';
            }
        }
    }
}
burgerExpand = function(){
    var line1 = document.getElementById('lineOne');
    var line2 = document.getElementById('linetwo');
    var line3 = document.getElementById('linethree');
    line1.classList.toggle('lineOne');
    line2.classList.toggle('linetwo');
    line3.classList.toggle('linethree');
}