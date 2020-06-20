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
        document.getElementById(id).innerHTML  += "<img class='itemShowImg' src="+ img +"></img>"
    }    
}

function itemShow(i){
    console.log(i)
    var item = document.getElementById(i);
    console.log(item)
    item.classList.add("itemShowContainer");
}

closeItemShow = function(i){
    var closeItemShow = document.getElementById(i)
    closeItemShow.classList.remove("itemShowContainer")
}