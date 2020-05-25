

var list = document.querySelector("#list");
//var prev = $("#prev");
//var next = $("#next");
//var index=1;//button[0].classNme="on";
//var timer;
//var animated = false;//动画停止标记


var slides = document.getElementsByClassName("listImg");
var slideIndex = 0;

function animate(offset){ 
    var time = 300;
    var inteval = 5;
    var speed = offset/(time/inteval);
    animated=true;
    var newTop=parseInt(list.style.top) +offset;
    function go(){
        if ( (speed > 0 && parseInt(list.style.top) < newTop) || (speed < 0 && parseInt(list.style.top) > newTop)) {
            list.style.top = parseInt(list.style.top) + speed + 'px';
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
        list.style.top = 0+'px'
    }
    
    if (slideIndex == slides.length) {
        slideIndex = 0
    }
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
    animate(-150)
    slideIndex++ ;
    list.style.top = 0+'px'
}
next.onclick = function() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        list.style.top = -150+'px'
    }
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1 ;
    }
    //slideIndex < slides.length-3
    for (i = 0; i < 4 ; i++){
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
    animate(150)
}
function play(){
    timer=setInterval(function(){
        next.onclick();
    },2000);
}

play()