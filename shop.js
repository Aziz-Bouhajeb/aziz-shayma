function makeProduct(name,price,stock){
    var product={}
    product.name=name
    product.id=id()
    product.price=price
    product.stock=stock
    return product
}

function generateId(){
    var count =0
 return function (){
    return count++
 }   
}

var id=generateId()

var product1=makeProduct("Smartphone Samsung S21",4599+" TND","Available")
$("#namephone1").append(`<h3>${product1.name}</h3>`)
$("#stockphone1").append(`${product1.stock}`)
$("#pricephone1").append(`${product1.price}`)
var product2=makeProduct("Smartphone OPPO RENO 8",1799+" TND","Available")
$("#namephone2").append(`<h3>${product2.name}</h3>`)
$("#stockphone2").append(`${product2.stock}`)
$("#pricephone2").append(`${product2.price}`)
var product3=makeProduct("IPHONE 14 PRO MAX",7999+" TND","Unavailable")
$("#namephone3").append(`<h3>${product3.name}</h3>`)
$("#stockphone3").append(`${product3.stock}`)
$("#pricephone3").append(`${product3.price}`)
var product4=makeProduct("IPHONE 14 PRO",6899+" TND","Available")
$("#namephone4").append(`<h3>${product4.name}</h3>`)
$("#stockphone4").append(`${product4.stock}`)
$("#pricephone4").append(`${product4.price}`)
var product5=makeProduct("SAMSUNG TELEVISEUR",4284.874+" TND","Available")
$("#nameTv1").append(`<h3>${product5.name}</h3>`)
$("#stockTv1").append(`${product5.stock}`)
$("#priceTv1").append(`${product5.price}`)
var product6=makeProduct("TV LG 65 SMART-RECEPTEUR",1799+" TND","Unavailable")
$("#nameTv2").append(`<h3>${product6.name}</h3>`)
$("#stockTv2").append(`${product6.stock}`)
$("#priceTv2").append(`${product6.price}`)
var product7=makeProduct("TV LG 50 SMART-RECEPTEUR",2179+" TND","Available")
$("#nameTv3").append(`<h3>${product7.name}</h3>`)
$("#stockTv3").append(`${product7.stock}`)
$("#priceTv3").append(`${product7.price}`)
var product8=makeProduct("TV SAMSUNG 55 SMART-QLED",7999+" TND","Available")
$("#nameTv4").append(`<h3>${product8.name}</h3>`)
$("#stockTv4").append(`${product8.stock}`)
$("#priceTv4").append(`${product8.price}`)
var product9=makeProduct("Sony Playstation 5",3699+" TND","Available")
$("#nameConsole1").append(`<h3>${product9.name}</h3>`)
$("#stockConsole1").append(`${product9.stock}`)
$("#priceConsole1").append(`${product9.price}`)
var product10=makeProduct("Console Nintendo Switch",1499+" TND","Available")
$("#nameConsole2").append(`<h3>${product10.name}</h3>`)
$("#stockConsole2").append(`${product10.stock}`)
$("#priceConsole2").append(`${product10.price}`)
var product11=makeProduct("PC GAMER FRAG GA-V7 ",5500+" TND","Unavailable")
$("#nameConsole3").append(`<h3>${product11.name}</h3>`)
$("#stockConsole3").append(`${product11.stock}`)
$("#priceConsole3").append(`${product11.price}`)
var product12=makeProduct("PC GAMER FRAG GI-V9 ",6529+" TND","Available")
$("#nameConsole4").append(`<h3>${product12.name}</h3>`)
$("#stockConsole4").append(`${product12.stock}`)
$("#priceConsole4").append(`${product12.price}`)