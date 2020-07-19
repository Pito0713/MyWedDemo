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
      "<div>" +
       "<div class='productSinglePageInfo'>" +
        "<img class='productSinglePageImg' src=" + productItem[data].img + ">" +
        "<div>" +
         "<a class='productSinglePageName'>" + productItem[data].name + "</a>" +
         "<p>" + productItem[data].content + "</p>" +
         "<a class='productSinglePagePrice'>$" + productItem[data].price + "</a>" +
        "</div>" +
       "</div>" +
      "</div>"
  }
});




