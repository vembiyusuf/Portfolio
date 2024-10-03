const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", this.window.scrollY > 120);
})

let menu = document.querySelector("#menu");
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  menu.classList.toggle('active');
}
window.onscroll = () => {
  menu.remove.toggle('bx-x');
  menu.remove.toggle('active');
}

