const container = document.querySelector("#js-content");

routie({
        "choix-1": function(){
            showChoice("choix-1.html");
            localStorage.setItem("scene", "choix-1");
        },
        "scene-2.A": function(){
            showChoice("scene-2.A.html");
            setTimeout(game1,250);
            localStorage.setItem("scene", "scene-2.A");
        },
        "scene-2.B": function(){
            showChoice("scene-2.B.html");
            setTimeout(game2,250);
            localStorage.setItem("scene", "scene-2.B");
        },
        "choix-2.A": function(){
            showChoice("choix-2.A.html");
            localStorage.setItem("scene", "choix-2.A");
        },
        "choix-2.B": function(){
            showChoice("choix-2.B.html");
            localStorage.setItem("scene", "choix-2.B");  
        },
        "scene-3.A": function(){
            showChoice("scene-3.A.html");
            localStorage.setItem("scene", "scene-3.A");
        },
        "fin-1": function(){
            showChoice("fin-1.html");
            localStorage.setItem("scene", "fin-1");
        },
        "fin-2": function(){
            showChoice("fin-2.html");
            localStorage.setItem("scene", "fin-2");
        },
        "fin-1.Alternative": function(){
            showChoice("fin-1.Alternative.html");
            localStorage.setItem("scene", "fin-1.Alternative");
        },
        "fin-2.Alternative": function(){
            showChoice("fin-2.Alternative.html");
            localStorage.setItem("scene", "fin-2.Alternative");
        },
        "fin-3": function(){
            showChoice("fin-3.html");
            localStorage.setItem("scene", "fin-3");
        },
});

let currentScene = localStorage.getItem("scene");
let btnC = document.querySelector("#js-continuer");

btnC.addEventListener("click", showContinue);


function showContinue() {

    routie(currentScene)

};


function showChoice(view){

    fetch("views/" + view)
    .then( response => {
        return response.text();
    })
    .then( html => {
        container.innerHTML = html;
    })
    .catch(error => {
        console.log(error);
        })
}


// mini jeu 1


function game1(){

    let wp1 = document.getElementById("arme1");
    let wp2 = document.getElementById("arme2");
    let wp3 = document.getElementById("arme3");
    let wp4 = document.getElementById("arme4");

    wp3.addEventListener("click", function(){
        showChoice("scene-3.A.html");
    })

    wp1.addEventListener("click", function(){
        showChoice("fin-3.html");
    })

    wp2.addEventListener("click", function(){
        showChoice("fin-3.html");
    })

    wp4.addEventListener("click", function(){
        showChoice("fin-3.html");
    })

}


// mini jeu 2

function game2(){

    let cri = "Fus Ro Dah";

    let fieldCri = document.getElementById("js-field-word");
    let formCri = document.getElementById("js-form-word");

    formCri.addEventListener("submit", checkCri);

    function checkCri(evt){

        evt.preventDefault();
        
        let currentWord = fieldCri.value;

        if(currentWord == cri){
            showChoice("choix-2.B.html");
        }
        else{
            showChoice("fin-3.html");
        }
    }
}

