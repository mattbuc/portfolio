<?php

SESSION_start();

if(count($_POST) == 0){
    header('location: contact.php');
}

if (!empty($_POST['prenom'])){
    $prenom=ucfirst(mb_strtolower($_POST['prenom']));

    if (!empty($_POST['nom'])){
        $nom=strtoupper($_POST['nom']);

        if (!empty($_POST['email'])){
            $email=filter_var($_POST['email'],FILTER_VALIDATE_EMAIL);

            if (!empty($_POST['message'])) {
                $message=($_POST['message']);

                        $message = "Envoyé par ".$prenom." ".$nom."\n\n".$message;
                        $destinataire = 'matt-buc@orange.fr';
                        $sujet = 'Demande de renseignement --- '.date('d/m/Y');
                        $headers = 'From: '.$email. "\r\n" .
                        'Reply-To: '.$email . "\r\n" .
                        'X-Mailer: PHP/' . phpversion();
                        if (mail($destinataire, $sujet, $message, $headers)) {
                        echo 'Message envoyé : OK !'."\n";
            
                        } 
            
                        else {
                            $_SESSION['messageError'] = 'Erreur : message non envoyé !'."\n";
                            header('location: contact.php');
                        }
            
                        $headers = 'From: ' . $email . "\r\n" .
                        'Reply-To: no-reply@orange.fr' . "\r\n" .
                        'X-Mailer: PHP/' . phpversion();
                        if (mail($_POST['email'], 'Confirmation de demande', 'Nous avons bien reçu votre demande !', $headers)) {
                        header('location: index.html?mail=1');
            
                        } 

                    
                        else {
                            $_SESSION['messageError'] = 'Erreur : message de confirmation non envoyé !'."\n";
                            header('location: contact.php');
                        }
                
                }
                else {
                    $_SESSION['messageError'] = 'Erreur : Aucun message saisie !'."\n";
                    header('location: contact.php');

                }
            }

            else {
                $_SESSION['messageError'] = "Erreur : votre mail n'est pas valide !".'<br/>'."\n";
                header('location: contact.php');
            }
        
    }
        else {
            $_SESSION['messageError'] = "Erreur : le nom est vide !".'<br/>'."\n";
            header('location: contact.php');
        }
        
    }

    else {
        $_SESSION['messageError'] = "Erreur : le prénom est vide !".'<br/>'."\n";
        header('location: contact.php');
    }


    ?>