<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <script src="./js/main.js" defer></script>
    <title>Matthias Buczek - portfolio</title>
  </head>
  <body>
  <header>
        <div class="header_div">
            <nav class="desktop_nav">
                <ul>
                  <li><a href="index.html" class="menu_item lien_top">Accueil</a></li>
                  <li><a href="/projet.html" class="menu_item lien_top">Projet</a></li>
                  <li><a href="/CV-MatthiasBuczek.pdf" target="_blank" class="menu_item lien_top">CV</a></li>
                  <li><a href="/contact.php" class="menu_item lien_top">Contact</a></li>
                </ul>
              </nav>
        </div>
        <nav id="mySidenav" class="sidenav">
            <a id="closeBtn" href="#" class="close">×</a>
            <ul>
            <li><a href="index.html">Accueil</a></li>
              <li><a href="/projet.html">Projet</a></li>
              <li><a href="/CV-MatthiasBuczek.pdf" target="_blank" class="menu_item lien_top">CV</a></li>
              <li><a href="/contact.php">Contact</a></li>
            </ul>
        </nav>
          
          <a href="#" id="openBtn">
            <span class="burger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
    </header>
    <main class="box_contact">
        <h1 class="textecontact">Me contacter</h1>
        <br>
<!--         
            <?php
                        if (!empty($_SESSION['messageError'])) {
                            echo '<div class="errorMessage"><p>'.$_SESSION['messageError'].'</p></div>'."\n";
                            $_SESSION['messageError']=null;
                            }
                    ?> -->
        
        <div class="formulaire">
           <form action="envoyer_mail.php" method="POST">
               <div id="en-tete" >
                    <div>
                    <label>Prenom : </label>
                    <br>
                    <br>
                    <input class="input_texte" type="text" name="prenom">
                    </div>
                    <div>
                    <br>
                    <br>
                    <label>Nom : </label>
                    <br>
                    <br>
                    <input class="input_texte" type="text" name="nom">
                    </div>
                    </div>
                    <div>
                    <br>
                    <br>
                    <label>Email : </label>
                    <br>
                    <br>
                    <input class="input_texte" type="email" name="email" placeholder="toto@exemple.com">
                    </div>
                    <div>
                    <br>
                    <br>
                    <label>Message : </label>
                    <br>
                    <br>
                    <textarea class="input_texte" id="message" name="message" placeholder="Entrer votre message"></textarea>
                    <br>
                    <input class="input_btn" type="submit" value="Envoyer" class="btn_submit">
                    </div>
           </form>
        </div>
    </main>
    <footer>
            <a href="https://www.linkedin.com/in/matthias-buczek-a09119211/" target="_blank"><img src="/image/linkedin.png" alt="logo linkedin" class="logo_foot"></a></li>
            <a href="https://github.com/mattbuc" target="_blank"><img src="/image/git.png" alt="logo github" class="logo_foot"></a></li>
    </footer>
  </body>
</html>