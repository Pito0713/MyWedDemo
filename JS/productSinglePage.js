const Prodcut = "https://pito0713.github.io/Fetch/Product.json";

const jsonData = {}
//取得外部資料
//轉乘可用json

var parameter = {};



parameter = {
  url: 'https://docs.google.com/spreadsheets/d/1DdvD5lRJKEdaquEFnJuOcLbJPFDAa5ohVYYv9FKIibE/edit#gid=0',
  name: '工作表1',
};
$.get('https://script.google.com/macros/s/AKfycbwng1qjqvSst7AyUvsT5_EyTwd-wZ5DEZJNMY0CXdhHbnwfaGFp/exec', parameter, function (data) {
  if (!data) {
    alert('無資料');
  } else {
    console.log(data);
  }

  fetch(Prodcut, { method: 'get' })
    .then((response) => {
      return response.json();
    }).then((jsonData) => {
      ProdcutData = jsonData
      ProductSingleInfo(ProdcutData);
    })

  function ProductSingleInfo(ProdcutData) {
    console.log(data)
    productItem = Array.from(ProdcutData);
    console.log(productItem);
    document.getElementById("prodcutItem").innerHTML += 
       "<div class='productSinglePageInfo'>" +
        "<img class='productSinglePageImg' src=" + productItem[data].img + ">" +
        "<div>"+
         "<a class='productSinglePageName' id='productSinglePageName'>" + productItem[data].name + "</a>" +
         "<a style='display:none' id='productSinglePageNo'>" + productItem[data].no + "</a>"+
         "<p>" + productItem[data].content + "</p>" +
         "<a>ㄧ個  </a>"+
         "<a class='productSinglePagePrice' id='productSinglePagePrice'>" + productItem[data].price + "</a>" +
         "<div class='productCountQua'>"+
          
          "<div class='buttom' onclick='add()'> <a>+</a>"+"</div>"+
          "<div style='width:2rem; text-align: center;  'id='counter'>1"+"</div>"+
          "<div class='buttom' onclick='subtract()'> <a>-</a>"+"</div>"+
         "</div>"+
         "<div style='display:flex;  float: right;'>"+
         "<div style='padding-right: 2rem; font-size: 1.2rem;'><a>共 $</a><a id='productCountTotalPrice'>"+ productItem[data].price +"</a>"+
          "</div>"+
          "<div class='buttom addCart' onclick='Cart()'> 加入購物車"+"</div>"+
         "</div>"+
        "</div>" +
       "</div>"
  }
});

function add(){
  //讀取當前counter值
  var count = document.getElementById("counter").innerHTML;
  var Price = document.getElementById("productSinglePagePrice").innerHTML;
  //加上1
  count=parseInt(count)+1;
  //在回寫上去
  document.getElementById("counter").innerHTML=count;
  document.getElementById("productCountTotalPrice").innerHTML = Number(Price * count);
}
function subtract(){
  var count=document.getElementById("counter").innerHTML;
  var Price = document.getElementById("productSinglePagePrice").innerHTML;
	if(count<=1){
		count=1;
	}else{
		count=parseInt(count)-1;
	}	
  document.getElementById("counter").innerHTML=count;
  document.getElementById("productCountTotalPrice").innerHTML = Number(Price * count);
}


Cart = function(name){
  var name = document.getElementById("productSinglePageName").innerHTML;
  var Qauity = document.getElementById("productCountTotalPrice").innerHTML;
  var Price = document.getElementById("counter").innerHTML;
  var number = Number(document.getElementById("productSinglePageNo").innerHTML);
  data = [[name , Qauity ,Price,number]]
  console.log(data)
  parameter = {
    url: 'https://docs.google.com/spreadsheets/d/1XhsYtznJn5Ps3kF2ZXS0pAAuxy3SBksRGty7pMaL0GA/edit#gid=0',
    name: '工作表1',
    data: data.toString(),
    row: number+2,
    column:data[0].length
  };
  $.get('https://script.google.com/macros/s/AKfycbwrmkkL4oSV_qgbVV1byYPJYoKnRbq7vstu6-urmTVlTDbv2ZU/exec', parameter, function (data) {
    if (!data) {
        alert('無資料');
    } else {
        console.log(data);
    }
  });
  $('#addCart').attr("style","display:block;");
  window.setTimeout(()=>{
    $('#addCart').attr("style","display:none;");
  },2500);
}
  
