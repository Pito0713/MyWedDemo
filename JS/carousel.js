

var list = document.querySelector("#list");
var AboutUsImg = document.querySelector("#AboutUsImg");
var screenWidth = document.documentElement.clientWidth
var prevUp = document.querySelector("#prevUp");
var prevLeft = document.querySelector("#prevLeft");
var nextDown = document.querySelector("#nextDown");
var nextRight = document.querySelector("#nextRight");
//var index=1;//button[0].classNme="on";
var timer;
//var animated = false;//动画停止标记


var slides = document.getElementsByClassName("listImg");
var slideIndex = 0;
window.onresize = function () {
    var _this = this
    _this.screenWidth = document.documentElement.clientWidth; // 視窗寬度
};

function animate(offset) {
    var time = 500;
    var inteval = 5;
    var speed = offset / (time / inteval);
    if (screenWidth > 1024) {
        var newTop = parseInt(list.style.top) + offset;
        function go() {
            if ((speed > 0 && parseInt(list.style.top) < newTop) || (speed < 0 && parseInt(list.style.top) > newTop)) {
                list.style.top = parseInt(list.style.top) + speed + 'px';
                setTimeout(go, inteval);
            } 
        }
    } else {
        var newTop = parseInt(list.style.left) + offset;
        function go() {
            if ((speed > 0 && parseInt(list.style.left) < newTop) || (speed < 0 && parseInt(list.style.left) > newTop)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
        }
    }
    go();
}
prevUp.onclick = function () {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        list.style.top = 0 + 'px'
    }
    if (slideIndex == slides.length) {
        slideIndex = 0
    }
    if (slideIndex < slides.length - 3) {
        for (i = 0; i < 4; i++) {
            slides[slideIndex + i].style.display = "block";
            slides[slideIndex + i].style.order = i + 1;
        };
    } else {
        for (i = 0; i < 4; i++) {
            var n = 4 - (slideIndex + i)
            if (n >= 0) {
                slides[slideIndex + i].style.display = "block";
                slides[slideIndex + i].style.order = i + 1;

            } else {
                for (index = 0; index < (slideIndex - 1); index++) {
                    slides[index].style.display = "block";
                    slides[index].style.order = i + 1 + index;
                }
            }

        };
    }
    animate(-150)
    slideIndex++;
    list.style.left = 0 + 'px'
}
prevLeft.onclick = function () {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        list.style.left = 0 + 'px'
    }
    if (slideIndex == slides.length) {
        slideIndex = 0
    }
    if (slideIndex < slides.length - 3) {
        for (i = 0; i < 4; i++) {
            slides[slideIndex + i].style.display = "block";
            slides[slideIndex + i].style.order = i + 1;
        };
    } else {
        for (i = 0; i < 4; i++) {
            var n = 4 - (slideIndex + i)
            if (n >= 0) {
                slides[slideIndex + i].style.display = "block";
                slides[slideIndex + i].style.order = i + 1;
            } else {
                for (index = 0; index < (slideIndex - 1); index++) {
                    slides[index].style.display = "block";
                    slides[index].style.order = i + 1 + index;
                }
            }
        };
    }
    animate(-150)
    slideIndex++;
    list.style.left = 0 + 'px'
}
nextDown.onclick = function () {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        list.style.top = -150 + 'px'
    }
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < 4; i++) {
        let n = (slideIndex + i)
        if (n < slides.length) {
            for (let index = 0; index < (slides.length - slideIndex); index++) {
                slides[slideIndex + index].style.display = "block";
                slides[slideIndex + index].style.order = index + 1;
            };
        } else {
            for (let index = 0; index < (slideIndex - 1); index++) {
                slides[index].style.display = "block";
                slides[index].style.order = index + n;
            };
        }
    }
    animate(150)
}
nextRight.onclick = function () {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        list.style.left = -150 + 'px'
    }
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < (slides.length - 1); i++) {
        let n = (slideIndex + i)
        if (n < slides.length) {
            for (let index = 0; index < (slides.length - slideIndex); index++) {
                slides[slideIndex + index].style.display = "block";
                slides[slideIndex + index].style.order = index + 1;
            };
        } else {
            for (let index = 0; index < (slideIndex - 1); index++) {
                slides[index].style.display = "block";
                slides[index].style.order = index + n;
            };
        }
    }
    animate(150)
}




function play() {
    timer = setInterval(function () {
        if (screenWidth > 1024) {
            nextDown.onclick();
        } else {
            nextRight.onclick();
        }
    }, 2000);
}
function stop() {
    clearInterval(timer);
}
play();
AboutUsImg.onmouseover = stop;
AboutUsImg.onmouseout = play;