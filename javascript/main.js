// banner
var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 4000);

// click
var user = document.querySelector('.header-user-icon');
var form = document.querySelector('.form');
user.addEventListener('click', function () {
  form.classList.toggle('active-form');
});

window.onscroll = () => {
  form.classList.remove('active-form');
};
// search
const searchBar = document.querySelector('.header-search input');
searchBar.addEventListener('input', function (e) {
  let txtSearch = e.target.value.trim().toLowerCase();
  const productsSearch = products.filter((item) =>
    item.name.toLowerCase().includes(txtSearch)
  );
  renderProduct(productsSearch);
  let listProductDOM = document.querySelectorAll('.product-item-name');
  listProductDOM.forEach((item) => {
    if (item.innerText.toLowerCase().inclues(txtSearch)) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
});
// search by price

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
const SIZE = 20;

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
  // if (perPage < 1) perPage = 1;
  // if (perPage > numPages()) perPage = numPages();
  // 0 => 0 - 19   => 0 - SIZE
  // 1 => 20 - 39  => SIZE- SIZE * 2-1
  // 2 => 40 - 49  => SIZE * 2 - SIZE * 3-1
  // 3 => 50 - 79  => SIZE * 3  - SIZE * 4-1
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
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
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


const checkBoxShirt = document.querySelector('.checkbox-ao');
const checkBoxPants = document.querySelector('.checkbox-quan');

checkBoxShirt.addEventListener('click', () => {
  if (checkBoxShirt.checked) {
    renderProduct(products.filter((product) => product.type === 'ao'));
    return;
  }
  renderProduct(products);
});
checkBoxPants.addEventListener('click', () => {
  if (checkBoxPants.checked) {
    renderProduct(products.filter((product) => product.type === 'quan'));
    return;
  }
  renderProduct(products);
});
