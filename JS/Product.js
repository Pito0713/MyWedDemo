

var ProdcutItemPoint = document.getElementsByClassName("prodcutItemPoint");
var Succulents = document.getElementById("Succulents")
var Cultivation = document.getElementById("Cultivation")
var Cactus = document.getElementById("Cactus")

Catch = function (items){
    for (let item of ProdcutItemPoint) {
        if(item.id == items){
            document.getElementById(item.id).style.display="block"
        } else {
           var CatchIt = document.getElementById(item.id)
           CatchIt.style.display="none"
           console.log(CatchIt)
           
        }
     }
}


const Prodcut = "https://pito0713.github.io/Fetch/Product.json";

fetch(Prodcut)
.then((response) => {
    console.log(response)
    return response.json();
    //return response.text()
}).then((myJson) => {
    console.log(myJson);
    let product;
    for(let i = 0; i<myJson.length;i++){
        product = myJson[i];
        var content = product.content;
        var id = product.id;
        var img = product.img;
        var name = product.name ;
        var price = product.price;
        document.getElementById("prodcutinfo").innerHTML  += "<div class='prodcutItem'>"+
        "<div class='prodcutItemPoint' + id="+ id +">"+
        "<img src="+ img +">"+
        "<div class='prodcutItemName'>"+
        "<a href='#'>" +name+"</a>"+
        "<a class='prodcutItemPrice'>$"+ price + "</a>"+
        "</div>"+
        "<div class='prodcutItemContent'>"+
        "<p>"+content+"</p>"+
        "</div>"+
        "</div>"+
        "</div>"
    }
    
})