var reglink = document.querySelector(".reg-link")
var regpopup = document.querySelector(".reg-modal")

var maplink = document.querySelector('.map-link')
var mappopup = document.querySelector('.map-modal')

reglink.addEventListener("click", function (evt) {
    evt.preventDefault();
    regpopup.classList.toggle('reg-modal-show')
})

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        if (regpopup.classList.contains('reg-modal-show')) {
            evt.preventDefault();
            regpopup.classList.remove('reg-modal-show');
        }             
    }
})


maplink.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log('mapppp')
    mappopup.classList.toggle("map-modal-show")
})

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        if (mappopup.classList.contains('map-modal-show')) {
            evt.preventDefault();
            mappopup.classList.remove('map-modal-show');
        }             
    }
})