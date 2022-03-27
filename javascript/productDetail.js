var btnColorOne = document.querySelector('.content-button-color .btn-1');
var btnColorSecond = document.querySelector('.content-button-color .btn-2');

$(document).on('click', '.content-button-color button', function () {
  $(this).addClass('btn-active').siblings().removeClass('btn-active');
});
$(document).on('click', '.content-size button', function () {
  $(this).addClass('btn-active').siblings().removeClass('btn-active');
});

var names = document.getElementById(shift);
console.log(names);

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
function changeImage(id) {
  let imagePath = document.getElementById(id).getAttribute('src');
  document.getElementById('main-img').setAttribute('src', imagePath);
}

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
// set data
productTitle.innerText = productData.name;
productPrice.innerText = productData.price + ' đ';
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
  console.log(product);
  localStorage.setItem('cart', JSON.stringify(product));
  // alert('Thêm vào giỏ hàng thành công');
  window.location.href = '../../user/cart.html';
});
