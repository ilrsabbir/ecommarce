const menuBarIcon = document.querySelector(".menu-bar");
const menuBar = document.querySelector("menu");

menuBarIcon.addEventListener("click", showMenu);

function showMenu(){
    menuBarIcon.classList.toggle("fa-times");
    if (menuBar.style.right !== '0%') {
        menuBar.style.right ='0%';
    } else {
        menuBar.style.right = '-110%';
      }
}