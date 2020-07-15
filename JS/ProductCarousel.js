
//取得外部資料
//轉乘可用json
fetch(Prodcut, { method: 'get' })
  .then((response) => {
    return response.json();
  }).then((jsonData) => {
    ProdcutData = jsonData
    productCarousel(ProdcutData);
  })

function productCarousel(ProdcutData) {
    //把data重新排列成array
    productItem = Array.from(ProdcutData);
    for (let i = 0; i < productItem.length; i++) {
      //先跑一次循環
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
    //再來就重複循環
    setInterval(function () {
      for (let i = 0; i < productItem.length; i++) {
        //重複循環內在計數跑資料
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
        //清除資料
        document.getElementById("productItemCarousel").innerHTML =" ";
      }
    }, 2500 * productItem.length);
  
  }
  