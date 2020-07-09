

var ProdcutItemPoint = document.getElementsByClassName("prodcutItemPoint");
var Succulents = document.getElementById("Succulents")
var Cultivation = document.getElementById("Cultivation")
var Cactus = document.getElementById("Cactus")



const Prodcut = "https://pito0713.github.io/Fetch/Product.json";

let jsonData = {}

fetch(Prodcut, { method: 'get' })
  .then((response) => {
    return response.json();
  }).then((ProdcutData) => {
    console.log(ProdcutData)
    jsonData = ProdcutData
    pagination(jsonData, 1);
    productCarousel(jsonData);
  })

var screenWidth = document.documentElement.clientWidth

window.onresize = function () {
  var _this = this
  _this.screenWidth = document.documentElement.clientWidth; // 視窗寬度
};





function pagination(jsonData, currentPage) {
  // 全部資料
  const dataTotal = jsonData.length;

  // 每一頁顯示幾筆資料。
  var datapage ;

  if (screenWidth > 481) {
    console.log(screenWidth)
    datapage = 4;
  } else {
    datapage = 2;
  }


  // 總共有幾頁//每頁8個
  const pageTotal = Math.ceil(dataTotal / datapage);

  // 當"當前頁數"比"總頁數"大的時候，"當前頁數"就等於"總頁數"
  if (currentPage > pageTotal) {
    currentPage = pageTotal;
  }

  // 最小 1*8 - 8 + 1 起始至少為1
  const minData = (currentPage * datapage) - datapage + 1;
  // 最大
  const maxData = (currentPage * datapage);

  // 當 num 比 minData(例如：1) 大且又小於 maxData(例如：8) 就push進去新陣列。
  //建立新陣列
  const data = [];
  for (i = 0; i <= jsonData.length; i++) {
    if (i >= minData && i <= maxData) {
      data.push(jsonData[i - 1]);
    }
  }
  console.log(data);
  // 用物件方式來傳遞資料

  //建立頁面變數
  const page = {
    pageTotal, //整頁數
    currentPage, //當前
  }
  pageSelect(page);
  displayData(data);
}
function pageSelect(page) {
  document.getElementById("productinfo").innerHTML = "";
  let str = '';

  if (page.currentPage > 1) {
    //建立page的data 
    //當currentPage 不是第一頁時
    //執行dataset
    str += `<a data-page="${(page.currentPage) - 1}">上一頁</a>`;
  } else {
    str += `<span >上一頁</span>`;
  }

  for (let i = 1; i <= page.pageTotal; i++) {
    str += `<a data-page="${i}">${i}</a>`;
  };

  if (page.currentPage < page.pageTotal) {
    //建立page的data
    //當currentPage 還沒到最後一頁
    //都執行dataset
    str += `<a data-page="${(page.currentPage) + 1}">下一頁</a>`;
  } else {
    str += `<span >下一頁</span>`;
  }
  //寫入
  document.getElementById("productPage").innerHTML = str;
}
function displayData(data) {
  //把data重新排列成array

  productItem = Array.from(data);
  for (let i = 0; i < productItem.length; i++) {
    product = productItem[i];
    var content = product.content;
    var id = product.id;
    var img = product.img;
    var name = product.name;
    var price = product.price;
    document.getElementById("productinfo").innerHTML += "<div class='prodcutItem'>" +
      "<div class='prodcutItemPoint' + id=" + id + ">" +
      "<img src=" + img + ">" +
      "<div class='prodcutItemName'>" +
      "<p href='#'>" + name + "</p>" +
      "<p class='prodcutItemPrice'>$" + price + "</p>" +
      "</div>" +
      "<div class='prodcutItemContent'>" +
      "<p>" + content + "</p>" +
      "</div>" +
      "</div>" +
      "</div>"
  }
}
function switchPage(e) {
  //監聽父節點，使用 e.target.nodeName  取得點擊元素的標籤名稱<a>
  if (e.target.nodeName !== 'A') return;
  //提取data-page的資料
  const page = e.target.dataset.page;
  //回傳
  pagination(jsonData, page);
}
//寫入監聽只要標籤名稱<a>都可以有這監聽
document.getElementById("productPage").addEventListener('click', switchPage);

CatchProductItem = function (CatchProductId) {
  console.log(CatchProductId);
  if (CatchProductId == 'All') {
    catchData = jsonData;
    console.log(catchData);
    document.getElementById("productinfo").innerHTML = "";

  } else {
    catchData = jsonData.filter(
      function (item) {
        return item.id == CatchProductId;
      });
    document.getElementById("productinfo").innerHTML = "";
  }
  pagination(catchData, 1)
}


function productCarousel(jsonData) {
  //把data重新排列成array
  productItem = Array.from(jsonData);
  for (let i = 0; i < productItem.length; i++) {
    setTimeout(
      function () {
        document.getElementById("productItemCarousel").innerHTML = "";
        product = productItem[i];
        var content = product.content;
        var img = product.img;
        var name = product.name;
        var price = product.price;
        document.getElementById("productItemCarousel").innerHTML += 
        "<div>"+
        "<img src="+img+">"+
        "<div class='productItemCarouselName'>"+
        "<a href='#'>"+name+"</a>"+
        "<a class='productItemCarouselPrice'>"+price+"</a>"+
        "</div>"+
        "<div class='prodcutItemCarouselContent'>"+
        "<p>"+content+"</p>"+
        "</div>"+
        "</div>"
      }, 2500 * i);
  }
  setInterval(function () {
    for (let i = 0; i < productItem.length; i++) {
      setTimeout(
        function () {
          document.getElementById("productItemCarousel").innerHTML = "";
          product = productItem[i];
          var content = product.content;
          var id = product.id;
          var img = product.img;
          var name = product.name;
          var price = product.price;
          document.getElementById("productItemCarousel").innerHTML += 
          "<div>"+
          "<img src="+img+">"+
          "<div class='productItemCarouselName'>"+
          "<a href='#'>"+name+"</a>"+
          "<a class='productItemCarouselPrice'>"+price+"</a>"+
          "</div>"+
          "<div class='prodcutItemCarouselContent'>"+
          "<p>" + content + "</p>"+
          "</div>"+
          "</div>"
        }, 2500 * i);
      document.getElementById("productItemCarousel").innerHTML = ' ';
    }
  }, 2500 * productItem.length);

}
