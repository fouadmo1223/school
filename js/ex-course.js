let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

let flip = function () {
    this.classList.toggle("flip");

}
box1.addEventListener("click", flip);
box2.addEventListener("click", flip);
box3.addEventListener("click", flip);
box4.addEventListener("click", flip);