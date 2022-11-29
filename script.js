var division = document.createElement('div')
division.innerHTML=`
<div class="card" style="width: 25rem;">
  <img src="https://files.myglamm.com/site-images/1200x1200/Sinner-(1)_1.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">LIPSTICK DETIAL</h5>
    <button id="button" onclick="getdata()">Get detial</button>
     <p class="card-text" id="brand"></p>
    <p class="card-text" id="price"></p>
    <p class="card-text" id="name"></p>
    <p class="card-text" id="description"></p>
    <p class="card-text" id="image"></p>
    <p class="card-text" id="product"></p>   
  </div>
</div>`
division.setAttribute("class","container")
document.body.append(division);



async function getdata(){

    var brand = document.getElementById('button').value // use brand for user defind

    let url = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?${brand}&product_type=lipstick`)
let result = await url.json();
console.log(result)

let length = Math.floor(Math.random()*result.length) //math.random use to get random number,math.floor to fix round number
console.log(length)
 var brand= result[length].brand
 console.log(brand)
 var price =result[length].price
 console.log(price)
 var description = result[length].description
 console.log(description)

 var image = result[length].image_link  // use all the var as my user frndly
 console.log(image )

 var product = result[length].product_link
 console.log(product)
 var name =result[length].name
 console.log(name)

 document.getElementById('brand').innerHTML=`<b style="color: red;">Brand Name</b>:${brand}`
 document.getElementById('price').innerHTML=`<b style="color: red;">Price</b>:${price}$`
 document.getElementById('description').innerHTML=`<b style="color: red;">description</b>:${description}`
 document.getElementById('image').innerHTML=`<b style="color: red;">Image link</b>:${image}`
 document.getElementById('product').innerHTML=`<b style="color: red;">Product</b>:${product}`
 document.getElementById('name').innerHTML=`<b style="color: red;">Name of the product</b>:${name}`
}

