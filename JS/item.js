const item = "https://pito0713.github.io/Fetch/item.json";

fetch(item)
.then((response) => {
    console.log(response)
    return response.json();
    //return response.text()
})
.then((myJson) => {
    console.log(myJson)
    showItem(myJson);
});

function showItem(myJson){
    let showItems = Array.from(myJson);
    for(let i = 0; i<showItems.length ;i++){
        let item = showItems[i];
        var id = item.id;
        var img = item.img;
        document.getElementById(id).innerHTML  += "<img class='itemShowImg"+" "+id+"'  src="+ img +"></img>"
    }
}
    

function itemShow(i){
    var item = document.getElementById(i);
    item.classList.add("itemShowContainer");
}

itemSlideIndex = 1

function CarouselShow(i,n){
    //let = document.getElementById(i);
    //let slides = document.querySelector(i);
    var itemSlides = document.getElementsByClassName(i);
    for (i = 0; i < itemSlides.length; i++) {
        itemSlides[i].style.display = "none";
    }
    //for (i = 0; i < this.dots.length; i++) {
      //this.dots[i].className = this.dots[i].className.replace(" active", "");
    //}
    itemSlideIndex += n;
    //let slides = document.getElementsByClassName("space");
    if (itemSlideIndex > itemSlides.length) {
        itemSlideIndex = 1;
    }
    if (itemSlideIndex < 1) {
        itemSlideIndex = itemSlides.length;
    }
    itemSlides[itemSlideIndex - 1].style.display = "flex";
    itemSlides[itemSlideIndex - 1].style.order = 1;
    //dots[slideIndex - 1].className += " active";
}

closeItemShow = function(i){
    var closeItemShow = document.getElementById(i)
    closeItemShow.classList.remove("itemShowContainer")
}


//監聽slideIndex 如果他有異動執行 function
    //先在所有 slides ,dot 只要沒被呼叫的 顯示none 或無動作
    //設立兩種顯示方式 當我螢幕尺寸大於1024 顯示 2個space , 小於則顯示 1 space
    //利用 flex order 改變順序 使原本要div順序 可改變顯示
    //利用 class: active 使點點的顏色變化
