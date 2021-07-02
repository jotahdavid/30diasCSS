const $menuHamburger = document.querySelector(".menu-hamburger");
const $menuLinks = document.querySelector(".links-list");

function handleClick() {
  $menuLinks.classList.toggle("--active");
}

$menuHamburger.addEventListener("click", handleClick);