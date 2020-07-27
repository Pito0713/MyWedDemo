const Prodcut = "https://pito0713.github.io/Fetch/Product.json";

const jsonData = {}
//取得外部資料
//轉乘可用json
var parameter = {};

parameter = {
  url: 'https://docs.google.com/spreadsheets/d/1XhsYtznJn5Ps3kF2ZXS0pAAuxy3SBksRGty7pMaL0GA/edit#gid=0',
  name: '工作表1',
};
$.get('https://script.google.com/macros/s/AKfycbzBfHnRl7BwDSse9EtR5EH2RO5hlfOrooPuZQHI6ODkjQEz4rU/exec', parameter, function (output) {
  if (!output) {
    alert('沒有買東西喔');
  } else {
    console.log(output);
  }
  var shopCartData = [];
  for(i = 0 ; i < output.length ;i++){
    if(!output[i].name == ""){
        shopCartData.push(output[i]);
    }
  }
  console.log(shopCartData)

  fetch(Prodcut, { method: 'get' })
  .then((response) => {
    return response.json();
  }).then((jsonData) => {
    ProdcutData = jsonData
    shopCart(ProdcutData);
  })

  function shopCart(ProdcutData){
    //把data重新排列成array
    productItem = Array.from(ProdcutData);
    for (let i = 0; i < shopCartData.length; i++) {
      
      shopCart = shopCartData[i]
      
      var name = shopCart.name;
      var totalPrice = shopCart.price;
      var quaity = shopCart.quaity;
      var id = shopCart.id;
      product = productItem[id];
      var img = product.img;
      var price = product.price;

      document.getElementById("shopCart").innerHTML += 
      "<div class='cartData container' id="+id+">"+
        "<div class='cartDataInfo'>" +
          "<a style='display:none' id='"+id+'cartDataNo'+"'>"+id+"</a>"+
          "<a style='display:none' id='"+id+'productPrice'+"'>"+price+"</a>"+
          "<div class='img_name'>"+
            "<img src=" + img + ">" +
            "<a id='"+id+'cartDataName'+"'>" + name + "</a>" +
          "</div>"+
          "<div class='quaity_price'>"+
            "<div>"+
              "<button onclick='Cart("+id+")'>修改"+"</button>"+
            "</div>"+
            "<div>"+
              "<div style=display:flex;>"+
                "<a>下單"+
                "<button onclick='add("+id+")'> <a>+</a>"+"</button>"+
                "<div id='"+id+'counter'+"'>"+quaity+"</div>"+
                "<button onclick='subtract("+id+")'> <a>-</a>"+"</button>"+
                "個</a>"+
              "</div>"+
              "<a>共 $<a class='price' id='"+id+'totalPrice'+"'>" + totalPrice + "</a></a>"+
              "</div>"+
            "</div>"+  
          "</div>" +
        "</div>"+
      "</div>"  
    }
  }
 })

 function add(id){
    //讀取當前counter值
    var count = document.getElementById(id + "counter").innerHTML;
    var Price = document.getElementById(id + "productPrice").innerHTML;
    //加上1
    count=parseInt(count)+1;
    //在回寫上去
    document.getElementById(id + "counter").innerHTML=count;
    document.getElementById(id + "totalPrice").innerHTML = Number(Price * count);
  }
  function subtract(id){
    var count=document.getElementById(id + "counter").innerHTML;
    var Price = document.getElementById(id +"productPrice").innerHTML;
      if(count<=1){
          count=1;
      }else{
          count=parseInt(count)-1;
      }	
    document.getElementById(id +"counter").innerHTML=count;
    document.getElementById(id +"totalPrice").innerHTML = Number(Price * count);
  }

 Cart = function(id){
    var name = document.getElementById(id + "cartDataName").innerHTML;
    var Qauity = document.getElementById(id+ 'counter').innerHTML;
    var Price = document.getElementById(id + "totalPrice").innerHTML;
    var number = Number(document.getElementById(id + "cartDataNo").innerHTML);
    console.log(number+1)
    data = [[name , Price , Qauity ,number]]
    parameter = {
      url: 'https://docs.google.com/spreadsheets/d/1XhsYtznJn5Ps3kF2ZXS0pAAuxy3SBksRGty7pMaL0GA/edit#gid=0',
      name: '工作表1',
      data: data.toString(),
      row: number+1,
      column:data[0].length
    };
    $.get('https://script.google.com/macros/s/AKfycbwrmkkL4oSV_qgbVV1byYPJYoKnRbq7vstu6-urmTVlTDbv2ZU/exec', parameter, function (data) {
      if (!data) {
          alert('無資料');
      } else {
          console.log(data);
      }
    });
  }