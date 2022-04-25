
let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.addEventListener("click", prevImg);
next.addEventListener("click", nextImg);


let second = document.getElementById('second');

function prevImg() {
    second.style.msTransform = "rotateY(0deg)";
    second.style.webkitTransform = "rotateY(0deg)";
    second.style.transform = "rotateY(0deg)";
}
function nextImg() {
    second.style.msTransform = "rotateY(-180deg)";
    second.style.webkitTransform = "rotateY(-180deg)";
    second.style.transform = "rotateY(-180deg)";
}