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


