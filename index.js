let nav = document.querySelector("nav");
let menu_btn = document.querySelector(".menu_btn");
let overlay = document.querySelector(".overlay");
let anchors = document.querySelectorAll(".links a");
let link = document.querySelector(".links");

menu_btn.onclick = () => {
  nav.classList.toggle("active");
  menu_btn.classList.toggle("active");
  overlay.classList.toggle("active");
  link.classList.toggle("active");
};

anchors.forEach((i) => {
  i.onclick = () => {
    nav.classList.remove("active");
    menu_btn.classList.remove("active");
    overlay.classList.remove("active");
    link.classList.remove("active");
  };
});
