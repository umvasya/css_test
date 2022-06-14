var reglink = document.querySelector(".reg-link")
var regpopup = document.querySelector(".reg-modal")

reglink.addEventListener("click", function (evt) {
    evt.preventDefault();
    regpopup.classList.toggle('reg-modal-show')
})