

var ProdcutItemPoint = document.getElementsByClassName("prodcutItemPoint");
var Succulents = document.getElementById("Succulents")
var Cultivation = document.getElementById("Cultivation")
var Cactus = document.getElementById("Cactus")



const Prodcut = "https://pito0713.github.io/Fetch/Product.json";

fetch(Prodcut)
.then((response) => {
    console.log(response)
    return response.json();
    //return response.text()
})
.then((myJson) => {
    console.log(myJson)
    catchItem(myJson);
});



function catchItem(myJson){
    a = Array.from(myJson);
    product = a[0];
        document.getElementById("prodcutinfo-header").innerHTML  += "<div class='prodcutItem'>"+
            "<div class='prodcutItemPoint' + id="+ product.id +">"+
            "<img src="+ product.img +">"+
            "<div class='prodcutItemName-Primary'>"+
            "<a href='#'>" + product.name+"</a>"+
            "<a class='prodcutItemPrice-Primary'>$"+ product.price+ "</a>"+
            "</div>"+
            "<div class='prodcutItemContent-Primary'>"+
            "<p>"+ product.content+"</p>"+
            "</div>"+
            "</div>"+
            "</div>"
        for(let i = 1; i<3;i++){
            product = a[i];
            var content = product.content;
            var id = product.id;
            var img = product.img;
            var name = product.name ;
            var price = product.price;
            document.getElementById("prodcutinfo-sider").innerHTML  += "<div class='prodcutItem'>"+
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
        for(let i = 3; i<a.length;i++){
            product = a[i];
            var content = product.content;
            var id = product.id;
            var img = product.img;
            var name = product.name ;
            var price = product.price;
            document.getElementById("productinfo").innerHTML  += "<div class='prodcutItem'>"+
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
}

Catch = function (items){
    console.log(a);
    var data = a.filter(function(item){ 
        return item.id == items;
    });
    console.log(data);
    document.getElementById("prodcutinfo-header").innerHTML = "";
    document.getElementById("prodcutinfo-sider").innerHTML = "";
    document.getElementById("productinfo").innerHTML = "";
        product = data[0];
        document.getElementById("prodcutinfo-header").innerHTML  += "<div class='prodcutItem'>"+
            "<div class='prodcutItemPoint' + id="+ product.id +">"+
            "<img src="+ product.img +">"+
            "<div class='prodcutItemName-Primary'>"+
            "<a href='#'>" + product.name+"</a>"+
            "<a class='prodcutItemPrice-Primary'>$"+ product.price+ "</a>"+
            "</div>"+
            "<div class='prodcutItemContent-Primary'>"+
            "<p>"+ product.content+"</p>"+
            "</div>"+
            "</div>"+
            "</div>"
        for(let i = 1; i<3;i++){
            product = data[i];
            var content = product.content;
            var id = product.id;
            var img = product.img;
            var name = product.name ;
            var price = product.price;
            document.getElementById("prodcutinfo-sider").innerHTML  += "<div class='prodcutItem'>"+
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
        for(let i = 3; i<data.length;i++){
            product = data[i];
            var content = product.content;
            var id = product.id;
            var img = product.img;
            var name = product.name ;
            var price = product.price;
            document.getElementById("productinfo").innerHTML  += "<div class='prodcutItem'>"+
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
    
}


                
//<div class="prodcutItem">
//<div class="prodcutItemPoint" id="Cactus">
    //<img src="./img/about-5.jpeg" alt="about-2">
    //<div class="prodcutItemName">
        //<a href="#">仙人掌</a>
        //<a class="prodcutItemPrice">$ 123</a>
    //</div>
    //<div class="prodcutItemContent">
        //<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
    //</div>
//</div>
//</div>

