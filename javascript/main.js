// banner
var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// click
var user = document.querySelector('.header-user-icon');
var form = document.querySelector('.form');
user.addEventListener('click', function () {
  form.classList.toggle('active-form');
});

window.onscroll = () => {
  form.classList.remove('active-form');
};

var mockData = [
  {
    id: 1,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/banner1.jpg',
  },
  {
    id: 2,
    name: 'Áo lo nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 3,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 4,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 5,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 6,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 7,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 8,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 9,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 10,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 11,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 12,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 13,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 14,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 16,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 17,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 18,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 19,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 20,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 21,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 22,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 23,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 24,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 25,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 26,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 27,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 28,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 26,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 27,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
  {
    id: 28,
    name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
    price: 150.0,
    sale: 'Đã bán 2',
    image: '/images/ao1.jpg',
  },
];

// search
const searchBar = document.querySelector('.header-search input');
searchBar.addEventListener('input', function (e) {
  let txtSearch = e.target.value.trim().toLowerCase();
  let listProductDOM = document.querySelectorAll('.product-item-name');
  listProductDOM.forEach((item) => {
    if (item.innerText.toLowerCase().inclues(txtSearch)) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
});

let perPage = 10; // số items hiển thị
let currentPage = 1;
let start = 0;
let end = perPage;

const totalPages = Math.ceil(mockData.length / perPage);

// render :ListPage
const listPage = document.querySelector('.content-number-page');
function renderPaginationPage() {
  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    html += `
    <button class="btn-number">${i}</button>
    `;
  }
  listPage.innerHTML = html;
}
renderPaginationPage();

function getCurrentPage(currentPage) {
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
  // totalPages = Math.ceil(mockData.length / perPage);
}

// render products
const products = document.querySelector('.product__bottom');

function numPages() {
  return Math.ceil(mockData.length / perPage);
}

function renderProduct() {
  // if (perPage < 1) perPage = 1;
  // if (perPage > numPages()) perPage = numPages();
  for (var i = (currentPage - 1) * perPage; i < perPage * currentPage; i++) {
    products.innerHTML += `
    <div class="product-items">
               <div class="product-item-name">
               <a href="productDetail.html"><img src="${mockData[i].image}" alt="" /></a>
                 <h4>
                   ${mockData[i].name}
                 </h4>
                 <div class="product-item-price">
                   <div class="price-item-cost">
                     <div class="product-price-start">₫90.000</div>
                     <div class="product-price-empty"></div>
                     <div class="product-price-end">₫180.000</div>
                   </div>
                   <div class="product-item-star">
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <div class="product-item-sale">Đã bán 20</div>
                   </div>
                 </div>
                 <div class="product-item-produce">TP. Hồ Chí Minh</div>
               </div>
             </div>
    `;
  }
}
renderProduct();
// Pagination
function changePage() {
  const currentPages = document.querySelectorAll('.content-number-page button');
  for (let i = 0; i < currentPages.length; i++) {
    currentPages[i].addEventListener('click', () => {
      let value = i + 1;
      currentPage = value;
      $('.content-number-page .btn-number').removeClass('active');
      currentPages[i].classList.add('active');
      if (currentPage > 1 && currentPage < totalPages) {
        $('.btn-prev').removeClass('btn-active');
        $('.btn-next').removeClass('btn-active');
      }
      if (currentPage === 1) {
        $('.btn-prev').removeClass('btn-active');
      }
      if (currentPage === totalPages) {
        $('.btn-next').addClass('btn-active');
      }
      getCurrentPage(currentPage);
      renderProduct();
    });
  }
}
changePage();

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

btnNext.addEventListener('click', () => {
  currentPage++;
  if (currentPage > totalPages) {
    btnNext.attr('disabled', 'disabled');
  }
  if (currentPage === totalPages) {
    $('.btn-next').addClass('active');
  }
  $('.btn-prev').removeClass('btn-active');
  $('.content-number-page .btn-number').removeClass('active');
  $(`.content-number-page .btn-number:eq(${currentPage - 1})`).addClass(
    'active'
  );
  getCurrentPage(currentPage);
  renderProduct();
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
  $(`.content-number-page .btn-number:eq(${currentPage - 1})`).addClass(
    'active'
  );
  $('.btn-next').removeClass('btn-active');
  getCurrentPage(currentPage);
  renderProduct();
});
