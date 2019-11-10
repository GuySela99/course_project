//navegation const
const blackDrop = document.querySelector('.black_drop');
const hamburger = document.querySelector('.manu_hamburger');
let hamburgerPress = false;
const drawer = document.querySelector('.drawer');

//navegation hadling
hamburger.addEventListener('click', function () {
    blackDrop.classList.toggle("visibilty");
    hamburgerPress = true;
    drawer.classList.toggle("visibilty");

});
hamburger.addEventListener("mouseover", function () {
    let layers = document.querySelectorAll('.manu_hamburger_line');
    for (let i = 0; i < 3; i++) {
        layers[i].style.backgroundColor = "white";
    }

});
hamburger.addEventListener("mouseout", function () {
    let layers = document.querySelectorAll('.manu_hamburger_line');
    for (let i = 0; i < 3; i++) {
        layers[i].style.backgroundColor = "black";
    }
});
blackDrop.addEventListener('click', function () {
    blackDrop.classList.toggle("visibilty");
    if (!hamburgerPress) {
        notification.classList.toggle("visibilty");
    }
    if (hamburgerPress) {
        drawer.classList.toggle("visibilty");
    }
    hamburgerPress = false;
});