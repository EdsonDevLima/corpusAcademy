//animaçao do menu
function animaMenu() {
  var Icone = document.querySelectorAll(".icone");
  var Tj = document.querySelectorAll(".tj");
  Icone[0].addEventListener("click", function () {
    let navMenu = document.getElementById("menu");
    if (navMenu.classList.contains("menu-aparece")) {
      navMenu.classList.remove("menu-aparece");
      Icone[0].style.transition = "0.5s";
      Tj[1].style.transform = "rotate(0)";
      Tj[2].style.transform = "rotate(0)";
      Tj[2].style.position = "static";
      Tj[1].style.position = "static";
      Tj[0].style.display = "block";
    } else {
      navMenu.classList.add("menu-aparece");
      Icone[0].style.transition = "0.5s";
      Tj[1].style.transform = "rotate(49deg)";
      Tj[2].style.transform = "rotate(-49deg)";
      Tj[2].style.position = "absolute";
      Tj[1].style.position = "absolute";
      Tj[0].style.display = "none";
    }
  });
}



const next = document.querySelector(".next")
const previous = document.querySelector(".previous")
var conteinerItens = document.querySelector(".conteiner-itens")
const itemSli = document.querySelectorAll(".item-card")
var margin = 0
next.addEventListener("click",()=>{
  const largura = conteinerItens.clientWidth
  const larguraItem = itemSli[0].clientWidth
  
  if(margin <largura / 1.5){
    margin += larguraItem 
    conteinerItens.style.marginLeft = `-${margin + 35}px`

  }else{
    margin = 0
    conteinerItens.style.marginLeft = `${margin+ 35}px`
  }

  
})
previous.addEventListener("click",()=>{
  const largura = conteinerItens.clientWidth
  const larguraItem = itemSli[0].clientWidth
  
  if(margin > 0){
    margin -= larguraItem 
    conteinerItens.style.marginLeft = `-${margin + 20}px`
  }else{
    conteinerItens.style.marginLeft = `-180%`
    margin = largura - larguraItem

  }

  
})





















animaMenu();
