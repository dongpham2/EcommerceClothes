var deleteCart = document.querySelector("#btn-delete")
var product = document.querySelector(".content-cart-container");

var user = document.querySelector(".header-user-icon");
var form = document.querySelector(".form");
user.addEventListener("click", function () {
  form.classList.toggle("active-form");
});

window.onscroll = () => {
  form.classList.remove("active-form");
};
// Function plus and sub number
$("input.input-qty").each(function () {
  var $this = $(this),
    qty = $this.parent().find(".is-form"),
    min = Number($this.attr("min")),
    max = Number($this.attr("max"));
  if (min == 0) {
    var d = 0;
  } else d = min;
  $(qty).on("click", function () {
    if ($(this).hasClass("minus")) {
      if (d > min) d += -1;
    } else if ($(this).hasClass("plus")) {
      var x = Number($this.val()) + 1;
      if (x <= max) d += 1;
    }
    $this.attr("value", d).val(d);
  });
});

$("#checkAll").click(function(){
  $('input:checkbox').not(this).prop('checked', this.checked);
});

$("#btn-delete").click(function() {
  $('.content-cart-container input:checked').each(function() {
    alert($(this).val());
  })
})


const products_API = 'https://api-start-deploy.herokuapp.com/items'

fetch(products_API)
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});

function start() {
  // getProducts(renderProducts)
}
start()

function getProducts(callback) {
  fetch(products_API)
    .then(function(response) {
      return response.json();
    })
    .then(callback);
}
function renderProducts(products) {
  var listProducts = document.querySelector('.slide-sliders');
  var htmls = products.map(function(product) {
    return `
    <div class="slide-content">
      <a href=""><img src="${product.image}" alt=""></a>
        <div class="slide-name">
          <h4>${product.name}</h4>
        </div>
        <div class="slide-detail">
          <div class="slide-detail-price">
            ${product.price}₫
          </div>
          <div class="slide-detail-sale">
            Đã bán:
          </div>
        </div>
    </div>
    `;
  });
  listProducts.innerHTML = htmls.join('')
}