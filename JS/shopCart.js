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
  for (i = 0; i < output.length; i++) {
    if (!output[i].name == "") {
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
  function shopCart(ProdcutData) {
    window.setTimeout(() => {
      $('#loading').attr("style", "display:none;");
      if (!shopCartData[0]) {
        document.getElementById("shopCartInfo").innerHTML += "<a style='font-size:3rem;'>你購物車沒買東西！！</a>"
      }

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

        document.getElementById("shopCartInfo").innerHTML +=
          "<div class='cartData container' id=id" + id + ">" +
          "<div class='cartDataInfo'>" +
          "<a style='display:none' id='" + id + 'cartDataNo' + "'>" + id + "</a>" +
          "<a style='display:none' id='" + id + 'productPrice' + "'>" + price + "</a>" +
          "<div class='img_name'>" +
          "<img src=" + img + ">" +
          "<a id='" + id + 'cartDataName' + "'>" + name + "</a>" +
          "</div>" +
          "<div class='quaity_price'>" +
          "<div style='display:flex'>" +
          "<div style='width: 3rem; height:1.5rem; padding: 0.2rem;' class='buttom' onclick='Cart(" + id + ")'>修改" + "</div>" +
          "<div style='width: 3rem; height:1.5rem; padding: 0.2rem;' class='buttom' onclick='Delet(" + id + ")'><i class='fas fa-trash-alt'></i></div>" +
          "</div>" +
          "<div>" +
          "<div style=display:flex;>" +
          "<a>下單" +
          "<div class='buttom' onclick='add(" + id + ")'> <a>+</a>" + "</div>" +
          "<div style='width: 2rem; text-align:center' id='" + id + 'counter' + "'>" + quaity + "</div>" +
          "<div class='buttom' onclick='subtract(" + id + ")'> <a>-</a>" + "</div>" +
          "個</a>" +
          "</div>" +
          "<a>共 $<a class='price' id='" + id + 'totalPrice' + "'>" + totalPrice + "</a></a>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>"
      
      }
      var totalPrice = 0
      for (let i = 0; i < shopCartData.length; i++) {
        shopCart = shopCartData[i]
        
        totalPrice += shopCartData[i].price;
        console.log(totalPrice)
       
      }  
      document.getElementById("shopCartTotalPrice").innerHTML +=
      "<div style='padding-right:1.5rem;'>總金額 : <a id='AlltotalPrice'>"+totalPrice+"</a></div>"
     
    }, 1500);
  }
})

function add(id) {
  //讀取當前counter值
  var count = document.getElementById(id + "counter").innerHTML;
  var Price = document.getElementById(id + "productPrice").innerHTML;
  //加上1
  count = parseInt(count) + 1;
  //在回寫上去
  document.getElementById(id + "counter").innerHTML = count;
  document.getElementById(id + "totalPrice").innerHTML = Number(Price * count);

  let AllTotalPrice = document.getElementById("AlltotalPrice").innerHTML;
  let TotalPrice =  Number(AllTotalPrice) + Number(Price)
  document.getElementById("AlltotalPrice").innerHTML = "";
  document.getElementById("AlltotalPrice").innerHTML += TotalPrice 
}
function subtract(id) {
  var count = document.getElementById(id + "counter").innerHTML;
  var Price = document.getElementById(id + "productPrice").innerHTML;
  if (count <= 1) {
    count = 1;
  } else {
    count = parseInt(count) - 1;
    let AllTotalPrice = document.getElementById("AlltotalPrice").innerHTML;
    let TotalPrice =  Number(AllTotalPrice) - Number(Price)
    document.getElementById("AlltotalPrice").innerHTML = "";
    document.getElementById("AlltotalPrice").innerHTML += TotalPrice 
  }
  document.getElementById(id + "counter").innerHTML = count;
  document.getElementById(id + "totalPrice").innerHTML = Number(Price * count);
  
}

Cart = function (id) {
  var name = document.getElementById(id + "cartDataName").innerHTML;
  var Qauity = document.getElementById(id + 'counter').innerHTML;
  var Price = document.getElementById(id + "totalPrice").innerHTML;
  var number = Number(document.getElementById(id + "cartDataNo").innerHTML);
  data = [[name, Price, Qauity, number]]
  parameter = {
    url: 'https://docs.google.com/spreadsheets/d/1XhsYtznJn5Ps3kF2ZXS0pAAuxy3SBksRGty7pMaL0GA/edit#gid=0',
    name: '工作表1',
    data: data.toString(),
    row: number + 2,
    column: data[0].length
  };
  $.get('https://script.google.com/macros/s/AKfycbwrmkkL4oSV_qgbVV1byYPJYoKnRbq7vstu6-urmTVlTDbv2ZU/exec', parameter, function (data) {
    if (!data) {
      alert('無資料');
    } else {
      console.log(data);
    }
  });
  $('#reviseCart').attr("style", "display:block;");
  window.setTimeout(() => {
    $('#reviseCart').attr("style", "display:none;");
  }, 2500);
}
Delet = function (id) {
  document.getElementById('id' + id).style.display = "none";
  var Qauity = document.getElementById(id + 'counter').innerHTML;
  var Price = document.getElementById(id + "totalPrice").innerHTML;
  var number = Number(document.getElementById(id + "cartDataNo").innerHTML);
  data = [["", Price, Qauity, number]]
  parameter = {
    url: 'https://docs.google.com/spreadsheets/d/1XhsYtznJn5Ps3kF2ZXS0pAAuxy3SBksRGty7pMaL0GA/edit#gid=0',
    name: '工作表1',
    data: data.toString(),
    row: number + 2,
    column: data[0].length
  };
  $.get('https://script.google.com/macros/s/AKfycbwrmkkL4oSV_qgbVV1byYPJYoKnRbq7vstu6-urmTVlTDbv2ZU/exec', parameter, function (data) {
    if (!data) {
      alert('無資料');
    } else {
      console.log(data);
    }
  });
  $('#deleteCart').attr("style", "display:block;");
  window.setTimeout("window.location.href='../MyWedDemo/shopCart.html'",1000); 
}


