// import { ProducService } from "./services/product";

document.querySelector(".img-btn").addEventListener("click", function () {
  document.querySelector(".cont").classList.toggle("s-signup");
});
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn_login = document.querySelector("#btn-login");
btn_login.addEventListener("click", (e) => {
  e.preventDefault();
  const user = {
    email: email.value,
    password: password.value,
  };
  let success = false;
  fetch("http://localhost:3000/register", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
  .then((response) => {
    if(succes) {
      success = true;
      return response.json();
    }
    else {
      success = false;
      return ;
    }
  })
  .then((data) => {
    if (success) {
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      const url = "http://127.0.0.1:5500/user/main.html";
      // window.location = url;
    }
  })
  .catch((error) => {
    alert(error.message);
  });
});


