const navSlide = function(){
    const burger =document.querySelector('.nav-burger');
    const nav = document.querySelector('.nav-branch');
    //const navlink =document.querySelectorAll('.nav-items')
    
    burger.addEventListener('click' ,()=>{
        console.log(123)
        //toggle nav
        nav.classList.toggle('nav-active');
        //animation burger
        //burger.classList.toggle('burgertoggle');
        //animation link

    });
}
navSlide(); 