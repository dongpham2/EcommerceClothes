var user =  document.querySelector(".header-user-icon");
var form = document.querySelector(".form")
var profile = document.querySelector(".nav-profile");
var voucher = document.querySelector(".nav-vocher");
var order = document.querySelector(".nav-order");
var changeBtn = document.querySelector(".change")
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".close");
var save = document.querySelector(".save");
user.addEventListener("click", function() {
    form.classList.toggle("active-form")
})

changeBtn.addEventListener("click", function() {
    overlay.style.display = "block"
})
close.addEventListener("click", function() {
    overlay.style.display = "none"
})
save.addEventListener("click", function() {
    overlay.style.display = "none"

})


window.onscroll = () => {
    form.classList.remove("active-form");
}
const id = localStorage.getItem('iduser')

const URL_API = `https://api-start-deploy.herokuapp.com/users/${id}`

fetch(URL_API)
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});

function start() {
    getUsers(renderUSers);
    // handerCreateForm()
}

start();

function getUsers(callback) {
    fetch(URL_API)
        .then(function(response) {
           return response.json();
        })
        .then(callback);
}


function renderUSers(users) {
    var listUser = document.querySelector('.nav-information');
    var htmls = users.map(function(user) {
        return `
        <div class="inf nav-name">
        <div class="fl0 nav-title-name">
          Tên người dùng:
        </div>
        <div class="fl1 nav-detail-name">
          winter
        </div>
      </div>
      <div class="inf nav-address">
        <div class="fl0 nav-title-address">
          Địa chỉ nhận hàng:
        </div>
        <div class="fl1 nav-detail-address">
          385 Lê Duẩn - Q.Hải Châu - Đà Nẵng
        </div>
      </div>
      <div class="inf nav-phone">
        <div class="fl0 nav-title-phone">
          Số điện thoại:
        </div>
        <div class="fl1 nav-detail-phone">
          0853390932
        </div>
      </div>
      <div class="inf nav-email">
        <div class="fl0 nav-title-email">
          Địa chỉ email:
        </div>
        <div class="fl1 nav-detail-email">
          qwewqe@gmail.com
        </div>
      </div>
      <div class="inf nav-bank">
          <div class="fl0 bank-name">
              Ngân hàng liên kết:
          </div>
          <div class="fl1 bank-number">
              1245786156145
          </div>
          <a href="">Thay đổi</a>
      </div>
      <button class="change">Thay đổi</button>
        `;
    });
    listUser.innerHTML = htmls.join('')
}



// function createUser(data, callback) {
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//           },
//         body: JSON.stringify(data)
//     };
//     fetch(usersApi, options)
//         .then(function(response) {
//             response.json();
//         })
//     .then(callback);
// }

