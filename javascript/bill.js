const billData = JSON.parse(localStorage.getItem('cart'));

const productTitle = document.querySelector('.product-title');
const productSize = document.querySelector('.product-size');
const productPrice = document.querySelector('.product-price');
const productImage = document.querySelector('.product-image');
const productColor = document.querySelector('.product-color')
const productTotal = document.querySelector('.product-total')
const billTotal = document.querySelector('.bill-total-cost')
productTitle.innerHTML = billData.name;
productSize.innerHTML = billData.size;
productPrice.innerHTML = "₫" + billData.price;
productImage.src = billData.image;
productColor.innerHTML = billData.color;

var total = (billData.price)
productTotal.innerHTML = "₫" + total;
billTotal.innerHTML = "₫" + total;