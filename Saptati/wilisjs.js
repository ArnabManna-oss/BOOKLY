let openCart = document.querySelector('.cart');
let closeCart = document.querySelector('.close2');
// let openheart = document.querySelector('.cart');
// let closeheart = document.querySelector('.close1');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let udetails = document.querySelector('.details');

// openheart.addEventListener('click', ()=>{
//     body.classList.add('active1');
// })

// closeheart.addEventListener('click', ()=>{
//     body.classList.remove('active1');
// })
openCart.addEventListener('click', () => {
  body.classList.add('active2');
})

closeCart.addEventListener('click', () => {
  body.classList.remove('active2');
})
// let users = [
//   {
//     id: 1,
//     name: 'Jina',
//     email: 'abc@gmail.com',
//     pnom: 123498765
//   },
// ]

let products = [
  {
    id: 1,
    name: 'Book1',
    image: 'pic1.jpg',
    price: 1500
  },
  {
    id: 2,
    name: 'Book2',
    image: 'pic2.jpg',
    price: 1500
  },
];

let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="">Wishlist</button>
            <button onclick="addToCart(${key})">Add to Cart</button>`;
    list.appendChild(newDiv);
  })
}
initApp();

// function addToWishlist(key){
//     if(listCards[key] == null){
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].wtotal = 1;
//     }
//     reloadWishlist();
// }
// function reloadWishlist(){
//     listCard.innerHTML = '';
//     let wCount = 0;
//     let totalPricee = 0;
//     listCards.forEach((value, key) => {
//         totalPricee = totalPricee + value.price;
//         wCount = wCount + value.wtotal;

//         if(value != null){
//             let newDiv =document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="images/${value.image}"></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeWtotal(${key}, ${value.wtotal- 1})">-</button>
//                     <div class="count">${value.quantity}</div> 
//                     <button onclick="changeWtotal(${key}, ${value.wtotal + 1})">+</button>
//                 </div>`;
//             listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPricee.toLocaleString();
//     wtotal.innerText = wCount;
// }
// function changeWtotal(key, wtotal){
//     if(wtotal == 0){
//         delete listCards[key];
//     }
//     else{
//         listCards[key].wtotal =wtotal;
//         listCards[key].price = wtotal * products[key].price;
//     }
//     reloadWishlist();
// }

function addToCart(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCart();
}
function reloadCart() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
                <div><img src="images/${value.image}"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div> 
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  })
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  }
  else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCart();
}