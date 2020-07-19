

var ProdcutItemPoint = document.getElementsByClassName("prodcutItemPoint");
var Succulents = document.getElementById("Succulents")
var Cultivation = document.getElementById("Cultivation")
var Cactus = document.getElementById("Cactus")

const Prodcut = "https://pito0713.github.io/Fetch/Product.json";

const jsonData = {}
//取得外部資料
//轉乘可用json
fetch(Prodcut, { method: 'get' })
  .then((response) => {
    return response.json();
  }).then((jsonData) => {
    ProdcutData = jsonData
    pagination(ProdcutData, 1);
  })


//取的視窗空度
var screenWidth = document.documentElement.clientWidth

window.onresize = function () {
  var _this = this
  _this.screenWidth = document.documentElement.clientWidth; // 視窗寬度
};



function pagination(ProdcutData, currentPage) {
  // 全部資料總數
  const dataTotal = ProdcutData.length;

  // 每一頁顯示幾筆資料。
  var datapage ;
  if (screenWidth > 481) {
    console.log(screenWidth)
    datapage = 4;
  } else {
    datapage = 2;
  }

  // 總共有幾頁//
  const pageTotal = Math.ceil(dataTotal / datapage);

  // 當前比總頁數大的，當前等於總頁數 //防止剛好進位
  if (currentPage > pageTotal) {
    currentPage = pageTotal;
  }

  // 最小 （當前)1*(單頁資料)4 - 4(起始頁資料) + 1 起始至少為1
  const minData = (currentPage * datapage) - datapage + 1;
  // 最大
  const maxData = (currentPage * datapage);

  // 當前頁面(1) 比 minData(例如：1) 大且又小於 maxData(例如：4) 就push進去新陣列。
  //建立新陣列
  const data = [];
  for (i = 0; i <= ProdcutData.length; i++) {
    if (i >= minData && i <= maxData) {
      data.push(ProdcutData[i - 1]);
    }
  }
  console.log(data);

  //建立頁面變數
  const page = {
    pageTotal, //整頁數
    currentPage, //當前
  }
  pageSelect(page);
  displayData(data);
}
function pageSelect(page) {
  //清除前資料
  document.getElementById("productinfo").innerHTML = "";
  let str = '';

  //建立page的data 
  //當currentPage 大於第一頁時
  //執行dataset
  if (page.currentPage > 1) {
    str += `<a data-page="${(page.currentPage) - 1}">上一頁</a>`;
  } else {
    str += `<span>上一頁</span>`;
  }
  //寫入所有頁數
  for (let i = 1; i <= page.pageTotal; i++) {
    str += `<a data-page="${i}">${i}</a>`;
  };
  //建立page的data
  //當currentPage 不可以大於最後一頁
  //都執行dataset
  if (page.currentPage < page.pageTotal) {
    str += `<a data-page="${(page.currentPage) + 1}">下一頁</a>`;
  } else {
    str += `<span >下一頁</span>`;
  }
  //寫入變數str所有資料
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
    var number = product.no;
    document.getElementById("productinfo").innerHTML += "<div class='prodcutItem'>" +
      "<div class='prodcutItemPoint' "+"onclick='ProductPage("+number+")'"+ "id=" + id + ">" +
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
  pagination(ProdcutData, page);
}
//寫入監聽只要標籤名稱<a>都可以有這監聽
document.getElementById("productPage").addEventListener('click', switchPage);

CatchProductItem = function (CatchProductId) {
  console.log(CatchProductId);
  if (CatchProductId == 'All') {
    catchData = ProdcutData;
  } else {
    //用id 屬性篩選我要的
    catchData = ProdcutData.filter(
      function (item) {
        return item.id == CatchProductId;
      });
  }
  //清除前一份資料
  document.getElementById("productinfo").innerHTML = "";
  //用抓到的資料帶回
  pagination(catchData, 1)
}



var parameter = {};

ProductPage = function(i) {
  var data = [[i]];
  parameter = {
    url: 'https://docs.google.com/spreadsheets/d/1DdvD5lRJKEdaquEFnJuOcLbJPFDAa5ohVYYv9FKIibE/edit#gid=0',
    name: '工作表1',
    data: data.toString(),
  };
  $.get('https://script.google.com/macros/s/AKfycbx-072NtScOpwqTuON17NYWrBxBaPVtB_GhLvNaCQXyIgb-zdbJ/exec',parameter);
  $('#loading').attr("style","display:block;"); 
  window.setTimeout("window.location.href='../MyWedDemo/productSinglePage.html'",2000); 
  
  
};

