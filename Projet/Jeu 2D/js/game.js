const canvas = document.getElementById("js-canvas");

const ctx = canvas.getContext("2d");

const img = document.getElementById("defaite");

const width = canvas.width;
const height = canvas.height;

let gameIsOver = false;

let xMove = 0;
let yMove = 0;

let ship;

let asteroides = [];
let etoiles = [];

//----------------------------------
// LOOP

function loop(){

    if(gameIsOver){
        musiqueSound.stop();
        looseSound.play();
        img.classList.add("visible");
        return;
    }

    // Récupérer les entrées
    processInput();

    // Mettre à jour
    update();

    // Dessiner
    draw();

    window.requestAnimationFrame(loop);

}




//------------------------------------
// DRAW



function draw(){

    ctx.clearRect(0, 0, width, height);

    // Dessiner les éléments dans le canvas

    ctx.drawImage(ship.img, ship.x, ship.y);

    asteroides.forEach(currentAsteroide => {
        ctx.drawImage(currentAsteroide.img, currentAsteroide.x, currentAsteroide.y);
    })

    etoiles.forEach(currentEtoile => {
        ctx.drawImage(currentEtoile.img, currentEtoile.x, 
        currentEtoile.y);
    })
}

//------------------------------------
// PROCESS INPUT


const keyState = {
    left: false,
    right: false,
    up: false,
    down: false
}

const keyMap = {
    81: "left",
    68: "right",
    90: "up",
    83: "down"

}


function processInput() {

    xMove = 0;
    yMove = 0;

    if(keyState.left == true){
        xMove = -1;
    }

    if(keyState.right == true){
        xMove = 1;
    }

    if(keyState.up == true){
        yMove = -1;
    }

    if(keyState.down == true){
        yMove = 1;
    }
}


window.addEventListener("keydown", function(evt){
    let key = keyMap[evt.keyCode];
    keyState[key] = true;
});

window.addEventListener("keyup", function (evt){
    let key = keyMap[evt.keyCode];
    keyState[key] = false;
});


//------------------------------------
// UPDATE

function update(){

    ship.x += xMove * ship.speed;
    ship.y += yMove * ship.speed;

    asteroides.forEach(currentAsteroide => {
        currentAsteroide.y += currentAsteroide.speed;

        if (currentAsteroide.y > height){
            currentAsteroide.y = -currentAsteroide.img.height;
            currentAsteroide.x = Math.floor(Math.random() * width - currentAsteroide.img.width);
        }

        if(shipCollide(currentAsteroide)){
            gameIsOver = true;
            console.log("Hits");
            play = false;
            explosionSound.play();
        }
        
    })

    etoiles.forEach(currentEtoile => {
        currentEtoile.y += currentEtoile.speed;

        if (currentEtoile.y > height){
            currentEtoile.y = -currentEtoile.img.height;
            currentEtoile.x = Math.floor(Math.random() * width - currentEtoile.img.width);
        }
    })
}




//------------------------------------

function Obstacle(src){
    this.img = new Image();
    this.img.src = src;
    this.x = 0;
    this.y = 0;
    this.speed = 8;
}

function Object(src){
    this.img = new Image();
    this.img.src = src;
    this.x = 0;
    this.y = 0;
    this.speed = 2;
}


function Player(src){
    this.img = new Image();
    this.img.src = src;
    this.x = 0;
    this.y = 0;
    this.speed = 4;
}


//------------------------------------
// PREPARE

function prepare(){

    ship = new Player("img/spaceship_mini.png");
    ship.x = width / 2 - ship.img.width / 2;
    ship.y = height / 2;

    for(let i = 0; i < 5; i++){
        let asteroide = new Obstacle("img/asteroid_mini.png");
        asteroide.x = Math.floor(Math.random() * width - asteroide.img.width);
        asteroide.y = -150 * i;
        asteroides.push(asteroide);
    }

    

    for(let i = 0; i < 3; i++){
        let etoile = new Object("img/etoile.png");
        etoile.x = Math.floor(Math.random() * width - etoile.img.width);
        etoile.y = -150 * i;
        etoiles.push(etoile);
    }

    window.requestAnimationFrame(loop);

}

prepare();

//-------------------------------------
// SCORE

let chronometre = 0
let play = true;
let chrono = document.querySelector("#js-chrono");

function time() {
    if (play == true) {
        chronometre = chronometre + 1;
        setTimeout(time, 200);
        chrono.textContent = chronometre;
        refresh();
    }
}

time();

function refresh() {
    if (chronometre == 0) {
        location.reload();
    }
}

//-------------------------------------
// AUDIO

let explosionSound = new Sound1("audio/explosion.mp3")

function Sound1(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

let musiqueSound = new Sound2("audio/musique.mp3")

function Sound2(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

musiqueSound.play();

let looseSound = new Sound3("audio/loose.mp3");

function Sound3(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}



