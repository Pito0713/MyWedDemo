const navSlide = function () {
    const burger = document.querySelector('.nav-burger');
    const nav = document.querySelector('.nav-branch');
    //const navlink =document.querySelectorAll('.nav-items')

    burger.addEventListener('click', () => {
        console.log(123)
        //toggle nav
        nav.classList.toggle('nav-active');
        //animation burger
        //burger.classList.toggle('burgertoggle');
        //animation link

    });
}
navSlide();

// 封装获取DOM节点方法   $("")
var $ = function(selector){
    return document.querySelector(selector);
}

//var wrapper = $("#wrapper");
//var list = $("#list");
//var prev = $("#prev");
//var next = $("#next");
//var index=1;//button[0].classNme="on";
//var timer;
//var animated = false;//动画停止标记


//var slides = document.getElementsByClassName("listImg");
//var slideIndex = 0;

function animate(offset){ 
    var time = 300;
    var inteval = 10;
    var speed = offset/(time/inteval);
    animated=true;
    var newLeft=parseInt(list.style.left) +offset;
    function go(){
        if ( (speed > 0 && parseInt(list.style.left) < newLeft) || (speed < 0 && parseInt(list.style.left) > newLeft)) {
            list.style.left = parseInt(list.style.left) + speed + 'px';
            setTimeout(go, inteval);
        }
        else 
        {   
            animated=false;
        }
    }
    go();
}

prev.onclick = function () {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        list.style.left = 0+'px'
    }
    
    if (slideIndex == slides.length) {
        slideIndex = 0
    }
    console.log(slideIndex)
    if (slideIndex < slides.length-3) {
        for (i = 0; i < 4; i++) {
            slides[ slideIndex + i ].style.display = "block";
            slides[ slideIndex + i ].style.order = i+1;
        };
        //slides[slideIndex].style.display = "block";
        //slides[slideIndex].style.order = 1;
        //slides[slideIndex+1].style.display = "block";
        //slides[slideIndex+1].style.order = 2;
        //slides[slideIndex+2].style.display = "block";
        //slides[slideIndex+2].style.order = 3;
        //slides[slideIndex+3].style.display = "block";
        //slides[slideIndex+3].style.order = 4;
    } else {
        for (i = 0; i < 4; i++) {
            var n = 4 - (slideIndex + i)
            if( n >= 0){
                slides[ slideIndex + i ].style.display = "block";
                slides[ slideIndex + i ].style.order = i+1;
                
            } else {
                for (index = 0; index < (slideIndex - 1); index++) {
                    console.log(index + 'index')
                    console.log(i + 'i')
                    slides[ index ].style.display = "block";
                    slides[ index ].style.order = i+1+index;
                }
            }
            
        };
        //slides[slideIndex].style.display = "block";
        //slides[slideIndex].style.order = 1;
        //slides[slideIndex+1].style.display = "block";
        //slides[slideIndex+1].style.order = 2;
        //slides[slideIndex+2].style.display = "block";
        //slides[slideIndex+2].style.order = 3;
        //slides[0].style.display = "block";
        //slides[0].style.order = 4;

    }
    //if ( slideIndex == slides.length-2) {
      //  slides[slideIndex].style.display = "block";
      //  slides[slideIndex].style.order = 1;
      //  slides[slideIndex+1].style.display = "block";
      //  slides[slideIndex+1].style.order = 2;
      //  slides[0].style.display = "block";
      //  slides[0].style.order = 3;
      //  slides[1].style.display = "block";
      //  slides[1].style.order = 4;
    //}
    //if ( slideIndex == slides.length-1) {
      //  slides[slideIndex].style.display = "block";
      //  slides[slideIndex].style.order = 1;
      //  slides[0].style.display = "block";
      //  slides[0].style.order = 2;
      //  slides[1].style.display = "block";
      //  slides[1].style.order = 3;
      //  slides[2].style.display = "block";
      //  slides[2].style.order = 4;
    //}
    animate(-300)
    slideIndex++ ;
    list.style.left = 0+'px'
}
next.onclick = function() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        list.style.left = -300+'px'
    }
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1 ;
    }
    console.log(list.style.left)
    console.log(slideIndex)
    //slideIndex < slides.length-3
    for (i = 0; i < (slides.length - 1) ; i++){
        let n = (slideIndex  + i)
        if ( n < slides.length ) {
            for (let index = 0; index < (slides.length - slideIndex); index ++) {
                slides[ slideIndex + index  ].style.display = "block";
                slides[ slideIndex + index  ].style.order = index +1;
            };
        } else {
            for (let index  = 0; index < (slideIndex - 1); index++) {
                slides[ index ].style.display = "block";
                slides[ index ].style.order = index + n ;
            };
        }

    }
    animate(300)
}