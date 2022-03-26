// import { ProducService } from "./services/product";

document.querySelector('.img-btn').addEventListener('click', function () {
  document.querySelector('.cont').classList.toggle('s-signup');
});

const formLogin = document.querySelector('.sign-in');
const btn_login = document.querySelector('#btn-login');
const usernameLogin = document.getElementById('login-username');
const passwordLogin = document.getElementById('login-password');
const eye = document.querySelector('.eye-pw')

const formRegister = document.querySelector('.sign-up');
const btn_register = document.querySelector('#btn-register');
const usernameRegister = formRegister.querySelector('.username');
const passwordRegister = formRegister.querySelector('.password');
const fullNameRegister = formRegister.querySelector('.fullname');
const emailRegister = formRegister.querySelector('.email');
const confirmPasswordRegister = formRegister.querySelector('.confirm-password');
const phoneRegister = formRegister.querySelector('.phone');

btn_login.addEventListener('click', async function () {
  console.log('value', passwordLogin.value);
  try {
    const res = await axiosClient.post('/users/signin', {
      username: usernameLogin.value,
      password: passwordLogin.value,
    });
    if (res.success) {
      window.location.href = './main.html';
    }
  } catch (error) {
    alert("Tài khoản hoặc mật khẩu của bạn không đúng!!");
  }
});

btn_register.addEventListener('click', async function () {
  try {
    if (
      passwordRegister.value.trim() !== confirmPasswordRegister.value.trim()
    ) {
      alert('Mật khẩu không trùng khớp');
      return;
    }

    const res = await axiosClient.post('/users/signup', {
      fullname: fullNameRegister.value,
      username: usernameRegister.value,
      phone: phoneRegister.value,
      email: emailRegister.value,
      password: passwordRegister.value,
      repeat_password: confirmPasswordRegister.value,
    });
    if (res.success) {
      window.location.href = './login.html';
    }
  } catch (error) {
    alert("Đăng ký thất bại, vui lòng nhập đầy đủ thông tin!!!");
  }
});

eye.addEventListener('click', function() {
  if(passwordLogin.type == 'password'){
    passwordLogin.type = 'text'
  }
  else{
    passwordLogin.type = 'password'
  }
})
