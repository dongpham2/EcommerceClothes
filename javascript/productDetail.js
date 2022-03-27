var btnColorOne = document.querySelector('.content-button-color .btn-1');
var btnColorSecond = document.querySelector('.content-button-color .btn-2');

$(document).on('click', '.content-button-color button', function () {
  $(this).addClass('btn-active').siblings().removeClass('btn-active');
});
$(document).on('click', '.content-size button', function () {
  $(this).addClass('btn-active').siblings().removeClass('btn-active');
});
const userProfile = document.querySelector('.header-user-icon')
var form = document.querySelector('.form');
userProfile.addEventListener('click', function () {
  form.classList.toggle('active-form');
});

window.onscroll = () => {
  form.classList.remove('active-form');
};

// function render province
var provinceVN = [
  'An Giang',
  'Bà Rịa – Vũng Tàu',
  'Bạc Liêu',
  'Bắc Giang',
  'Bắc Kạn',
  'Bắc Ninh',
  'Bến Tre',
  'Bình Dương',
  'Bình Định',
  'Bình Phước',
  'Bình Thuận',
  'Cà Mau',
  'Cao Bằng',
  'Cần Thơ',
  'Đà Nẵng',
  'Đắk Lắk',
  'Đắk Nông',
  'Điện Biên',
  'Đồng Nai',
  'Đồng Tháp',
  'Gia Lai',
  'Hà Giang',
  'Hà Nam',
  'Hà Nội',
  'Hà Tĩnh',
  'Hải Dương',
  'Hải Phòng',
  'Hậu Giang',
  'Hòa Bình',
  'Thành phố Hồ Chí Minh',
  'Hưng Yên',
  'Khánh Hòa',
  'Kiên Giang',
  'Kon Tum',
  'Lai Châu',
  'Lạng Sơn',
  'Lào Cai',
  'Lâm Đồng',
  'Long An',
  'Nam Định',
  'Nghệ An',
  'Ninh Bình',
  'Ninh Thuận',
  'Phú Thọ',
  'Phú Yên',
  'Quảng Bình',
  'Quảng Nam',
  'Quảng Ngãi',
  'Quảng Ninh',
  'Quảng Trị',
  'Sóc Trăng',
  'Sơn La',
  'Tây Ninh',
  'Thái Bình',
  'Thái Nguyên',
  'Thanh Hóa',
  'Thừa Thiên Huế',
  'Tiền Giang',
  'Trà Vinh',
  'Tuyên Quang',
  'Vĩnh Long',
  'Vĩnh Phúc',
  'Yên Bái',
];
var countryVN = document.querySelector('select[name="country_VN"]');

for (var i = 0; i <= provinceVN.length; i++) {
  var option = document.createElement('option');
  option.setAttribute('value', provinceVN[i]);
  option.innerText = provinceVN[i];

  countryVN.appendChild(option);
}

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

// Change image


// get info of color

const productData = JSON.parse(localStorage.getItem('detail-product'));
console.log(productData);
// init element
const productTitle = document.querySelector('.product-title');
const productPrice = document.querySelector('.product-price');
const productImage = document.querySelector('.product-image');
const productDescription = document.querySelector('.product-description');
const productImagesDetail = document.querySelector('.product-images-detail');
const productSize = document.querySelector('.product-size');
const productQuantity = document.querySelector('.product-quantity');
const btnAdd = document.querySelector('.btn-add');
const description = document.querySelector('.content-descript')
// set data
productTitle.innerText = productData.name;
productPrice.innerText = productData.price + ' ₫';
description.innerHTML = productData.description;
const sizeDom = productData.size.map(
  (item, index) => `<button id=${index}>${item}</button>`
);
productSize.innerHTML = sizeDom.join(' ');
productImage.src = productData.image;
const imagesDom = productData.image_details.map(
  (item) => `<img src=${item}></img>`
);
productImagesDetail.innerHTML = imagesDom.join(' ');

btnAdd.addEventListener('click', () => {
  const btnActive = document.querySelector('.btn-active');
  const id = btnActive?.getAttribute('id');
  const product = {
    id: productData.id,
    name: productData.name,
    price: productData.price,
    image: productData.image,
    size: productData.size[id],
    quantity: productQuantity.value,
  };
  localStorage.setItem('cart', JSON.stringify(product));
  // alert('Thêm vào giỏ hàng thành công');
  window.location.href = '../../user/cart.html';
});


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
function changeImage(id) {
  let imagePath = document.getElementById(id).getAttribute('src');
  document.getElementById('main-img').setAttribute('src', imagePath);
}
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