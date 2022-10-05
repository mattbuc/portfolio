//------------------------------------------------------------------
// NOTE : Détection de collisions plutôt spécifique au projet courant
//        -> On vérifie si un objet entre en collision avec le vaisseau

function shipCollide(objet) {
  let collisionOccurs = false;

  if (
    (objet.x > ship.x && objet.x < ship.x + ship.img.width) ||
    (objet.x + objet.img.width > ship.x &&
      objet.x + objet.img.width < ship.x + ship.img.width)
  ) {
    if (objet.y > ship.y && objet.y < ship.y + ship.img.height) {
      collisionOccurs = true;
    }
  }

  return collisionOccurs;
}

//-------------------------------------------------------------
// NOTE : Détection de collisions plus générique pouvant servir
//        dans différentes situations
//        -> On vérifie si 2 objets passés en argument entrent en collision

function objectsIsColliding(objet1, objet2) {
  let collisionOccurs = false;

  if (
    (objet1.x > objet2.x && objet1.x < objet2.x + objet2.img.width) ||
    (objet1.x + objet1.img.width > objet2.x &&
      objet1.x + objet1.img.width < objet2.x + objet2.img.width)
  ) {
    if (
      (objet1.y > objet2.y && objet1.y < objet2.y + objet2.img.height) ||
      (objet2.y > objet1.y && objet2.y < objet1.y + objet1.img.height)
    ) {
      collisionOccurs = true;
    }
  }

  return collisionOccurs;
}
