// import { ProducService } from "./services/product";

document.querySelector('.img-btn').addEventListener('click', function () {
  document.querySelector('.cont').classList.toggle('s-signup');
});

const formLogin = document.querySelector('.sign-in');
const btn_login = document.querySelector('#btn-login');
const usernameLogin = document.getElementById('login-username');
const passwordLogin = document.getElementById('login-password');

const formRegister = document.querySelector('.sign-up');
const btn_register = document.querySelector('#btn-register');
const usernameRegister = formRegister.querySelector('.username');
const passwordRegister = formRegister.querySelector('.password');
const fullNameRegister = formRegister.querySelector('.fullname');
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
    alert(error.message);
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
      fullname: 'admin1232323',
      username: 'admin121212',
      sdt: '0913420197',
      password: 'admin123',
    });
  } catch (error) {
    alert(error.message);
  }
});
