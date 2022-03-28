var deleteCart = document.querySelector('#btn-delete');
var product = document.querySelector('.content-cart-container');

var user = document.querySelector('.header-user-icon');
var form = document.querySelector('.form');
user.addEventListener('click', function () {
  form.classList.toggle('active-form');
});

window.onscroll = () => {
  form.classList.remove('active-form');
};
// Function plus and sub number
$('input.input-qty').each(function () {
  var $this = $(this),
    qty = $this.parent().find('.is-form'),
    min = Number($this.attr('min')),
    max = Number($this.attr('max'));
  if (min == 0) {
    var d = 0;
  } else d = min;
  $(qty).on('click', function () {
    if ($(this).hasClass('minus')) {
      if (d > min) d += -1;
    } else if ($(this).hasClass('plus')) {
      var x = Number($this.val()) + 1;
      if (x <= max) d += 1;
    }
    $this.attr('value', d).val(d);
  });
});

$('#checkAll').click(function () {
  $('input:checkbox').not(this).prop('checked', this.checked);
});

$('#btn-delete').click(function () {
  $('.content-cart-container input:checked').each(function () {
    alert($(this).val());
  });
});


const cartData = JSON.parse(localStorage.getItem('cart'));
const productTitle = document.querySelector('.product-title');
const productSize = document.querySelector('.product-size');
const productPrice = document.querySelector('.product-price');
const productImage = document.querySelector('.product-image');
const productColor = document.querySelector('.product-color')

// set value
productTitle.innerHTML = cartData.name;
productSize.innerHTML = cartData.size;
productPrice.innerHTML = cartData.price;
productImage.src = cartData.image;
productColor.innerHTML = cartData.color;

// render :ListPage
const listPage = document.querySelector('.content-number-page');
function renderPaginationPage(totalPages) {
  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    html += `
      <button class="btn-number" id=${i}>${i}</button>
    `;
  }
  listPage.innerHTML = html;
}
renderPaginationPage();

//renderproduct
const productsElement = document.querySelector('.product__bottom');

let currentPage = 0;
const SIZE = 12;

let products = [];
(async () => {
  try {
    products = await axiosClient.get('/items');
    renderProduct(products);
    renderPaginationPage(Math.ceil(products.length / SIZE));
  } catch (error) {
    console.log(error);
  }
})();

async function renderProduct(products) {
  console.log('products', products);
  const data_render = products.slice(
    currentPage * SIZE,
    (currentPage + 1) * SIZE
  );
  productsElement.innerHTML = '';
  for (let i = 0; i < data_render.length; i++) {
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'product-item');
    divElement.setAttribute('id', products[i]._id);
    divElement.innerHTML = `
    <div class="product-item-name">
    <a ><img src="${products[i].image}" alt="" /></a>
      <h4>
        ${products[i].name}
      </h4>
      <div class="product-item-price">
        <div class="price-item-cost">
          <div class="product-price-start">${products[i].price} ₫</div>
          
        </div>
        <div class="product-item-star">
          <div class="product-item-sale">Đã bán: 0</div>
        </div>
      </div>
      <div class="product-item-produce">TP. Đà Nẵng</div>
    </div>
    `;
    productsElement.appendChild(divElement);
    try {
      console.log('run it', `#${products[i]._id}`);
      const productItemsElement = document.getElementById(`${products[i]._id}`);
      console.log(productItemsElement);
      productItemsElement.addEventListener('click', () => {
        localStorage.setItem('detail-product', JSON.stringify(products[i]));
        window.location.href = './productDetail.html';
      });
    } catch (error) {
      console.log(error);
    }
  }
}
// Pagination
function changePage(totalPages) {
  const currentPages = document.querySelectorAll('.content-number-page');
  for (let i = 0; i < currentPages.length; i++) {
    currentPages[i].addEventListener('click', () => {
      let value = i + 1;
      currentPage = value;
      $('.content-number-page .btn-number').removeClass('active');
      currentPages[i].classList.add('active');
      if (currentPage > 1 && currentPage < products.length) {
        $('.btn-prev').removeClass('btn-active');
        $('.btn-next').removeClass('btn-active');
      }
      if (currentPage === 1) {
        $('.btn-prev').removeClass('btn-active');
      }
      if (currentPage === totalPages) {
        $('.btn-next').addClass('btn-active');
      }
      renderProduct(products);
    });
  }
}
changePage();

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

btnNext.addEventListener('click', (totalPages) => {
  currentPage++;
  if (currentPage > totalPages) {
    btnNext.attr('disabled', 'disabled');
  }
  if (currentPage === totalPages) {
    $('.btn-next').addClass('active');
  }
  $('.btn-prev').removeClass('btn-active');
  $('.content-number-page .btn-number').removeClass('active');
  $(`.content-number-page .btn-number:eq(${currentPage})`).addClass(
    'active'
  );
  renderProduct(products);
});

btnPrev.addEventListener('click', () => {
  currentPage--;
  if (currentPage <= 1) {
    currentPage = 1;
  }
  if (currentPage === 1) {
    $('.btn-prev').addClass('btn-active');
  }
  $('.content-number-page .btn-number').removeClass('active');
  $(`.content-number-page .btn-number:eq(${currentPage})`).addClass(
    'active'
  );
  $('.btn-next').removeClass('btn-active');
  renderProduct(products);
});