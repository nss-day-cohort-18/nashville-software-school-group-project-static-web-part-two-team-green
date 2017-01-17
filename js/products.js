var recycle = {

  product1: {poster:"images/product1.jpg", title:"Metal Recycling", price:"$50.00", descr:"Recycling pick up schedule: M-F 7-9am"}, 
  product2: {poster:"images/product2.jpg", title:"Glass Recycling", price:"$60.00", descr:"Recycling pick up schedule: M-F 7-9am"},
  product3: {poster:"images/product3.gif", title:"Paper Recycling", price:"$75.00", descr:"Recycling pick up schedule: M-F 7-9am"},
  product4: {poster:"images/product4.jpg", title:"Plastic Recycling", price:"$90.00", descr:"Recycling pick up schedule: M-F 7-9am"},
  product5: {poster:"images/product5.jpg", title:"Wood Recycling", price:"$110.00", descr:"Recycling pick up schedule: M-F 7-9am"},
  product6: {poster:"images/product6.jpg", title:"Food Waste Recycling", price:"$120.00", descr:"Recycling pick up schedule: M-F 7-9am"},
  product7: {poster:"images/product7.jpg", title:"Biohazard Recycling", price:"$135.00", descr:"Recycling pick up schedule: M-F 7-9am"},
  product8: {poster:"images/product8.jpeg", title:"Textile Recycling", price:"$150.00", descr:"Recycling pick up schedule: M-F 7-9am"},
 
}

var productSection = document.getElementById("productCards");
 
for (var key in recycle) {

    var product = recycle[key];

    var poster = product["poster"];

    var title = product["title"];

    var price = product["price"];

    var descr = product["descr"];

    console.log(poster, title, price);
	

    var card = "<section id='cards'>" + "<h4>" + title + "</h4>" + "<div><img class='resizeCard' src='" + poster + "'></div>" + "<footer><p id='money'>" + price + "<br>" + descr + "</p></footer></article>";

    productSection.innerHTML += card;

}





