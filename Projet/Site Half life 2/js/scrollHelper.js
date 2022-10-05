/* --------------------------------- */

// Settings
const menuBtnsClass = ".button"; // Entrer ici la classe des boutons du menu principal
const topButtonClass = ".logo"; // Entrer ici la classe des boutons ramenant au "top"
const headerOffset = 0; // Entrer un offset de départ (au besoin)

/* --------------------------------- */

///////////////////////////////////////////////

// Répérer chacun des boutons du menu
const btns = document.querySelectorAll(menuBtnsClass);

// Variable servant à stocker la position courante(offset)
let currentOffset = 0;

/* 
Parcourir chacun des boutons du menu et leur ajouter
un listener de click appelant la fonction scrollToTarget
*/
btns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToTarget(this.hash);
  });
});

if (topButtonClass != "") {
  // Récupérer chacun des boutons ramenant à l'entête du site
  const btnsTop = document.querySelectorAll(topButtonClass);

  /* 
    Parcourir chacun des boutons "top" et leur ajouter
    un listener de click appelant la fonction scrollToTarget
    */
  btnsTop.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToTarget(0);
    });
  });
}

/*
    Fonction lancant le déplacement par scroll dans la page
    Elle peut recevoir comme paramètre un id(hash) ou une position(un nombre)
*/
function scrollToTarget(currentTarget) {
  let offsetPosition;
  // Récupérer le offset courant
  currentOffset = window.pageYOffset;
  // Dans le cas où un "hash" est passé
  if (isNaN(currentTarget)) {
    // Récupérer l'élément ayant pour ID le hash passé en paramètre
    let targetElement = document.querySelector(currentTarget);
    // Récupérer la position de l'élément
    let elementPosition = targetElement.getBoundingClientRect().top;
    // Calculer la position à atteindre en tenant compte du dernier déplacement (offSet)
    offsetPosition = elementPosition + headerOffset + currentOffset;
  }
  // Dans le cas où un nombre est passé
  else {
    /*
         Assigner le nombre (position) passé en paramètre 
        comme étant la position à atteindre */
    offsetPosition = currentTarget;
  }
  // Scroller jusqu'à la position de façon "smooth"
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}
