//animaçao do menu
function animaMenu() {
  var Icone = document.querySelectorAll(".icone");
  Icone[0].addEventListener("click", function () {
    let navMenu = document.getElementById("menu");
    if (navMenu.classList.contains("menu-aparece")) {
      navMenu.classList.remove("menu-aparece");
    } else {
      navMenu.classList.add("menu-aparece");
    }
  });
}
