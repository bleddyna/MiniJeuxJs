//Générer un chiffre aléatoire
// user fera des propositions
//continuer tant qu'il n'a pas la proposition

import { Confetti } from "./lib/confetti.js"

let numberToFind = 0;
const resultDiv = document.getElementById("resultDiv");
const reboursDiv = document.getElementById("compteARebours");
const gamePropal = document.getElementById("gamePropalDiv");
let tempsRestant = 0;
let compteurInterval = null;


document.getElementById('beginGame')
    .addEventListener("click", function () {
        launchGame();
    });

document.getElementById('checkPropalButton').addEventListener("click", function () {
    checkPropal();
});

document.getElementById('userPropalInput').addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
        checkPropal();
    }

});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function checkPropal() {
    let numberPropal = document.getElementById('userPropalInput').value;
    if (numberToFind > numberPropal) {
        resultDiv.innerHTML = "c'est plus!";
    } else if (numberToFind < numberPropal) {
        resultDiv.innerHTML = "c'est moins!";
    } else if (numberToFind == numberPropal) {
        resultDiv.innerHTML = "c'est GAGNER!!";
        endGame(true);
    }
}

function launchGame() {
    Confetti.stopAnimation();
    numberToFind = getRandomInt(1000);
    console.log(numberToFind);
    tempsRestant = 30;
    gamePropal.style.display = "block";
    if (compteurInterval != null) {
        clearInterval(compteurInterval);
    }
    compteurInterval = setInterval(() => {
        reboursDiv.innerText = tempsRestant;
        tempsRestant--;
        if (tempsRestant >= 20) {
            reboursDiv.classList.remove("danger");
            reboursDiv.classList.remove("warning");
            reboursDiv.classList.add("cool");
        }
        else if (tempsRestant > 10) {
            reboursDiv.classList.remove("cool");
            reboursDiv.classList.remove("danger");
            reboursDiv.classList.add("warning");
        }
        else if (tempsRestant >= 0) {
            reboursDiv.classList.remove("cool");
            reboursDiv.classList.remove("warning");
            reboursDiv.classList.add("danger");
        }
        else if (tempsRestant < 0) {
            clearInterval(compteurInterval);
            endGame(false);
        }
    }, 1000);
}
function endGame(gagne) {
    if (gagne) {
        Confetti.launchAnimationConfeti();
        let sound = new Audio("sound/victory.mp3");
        sound.play();
        setTimeout(() => {
            Confetti.stopAnimation();
        }, 5000);
    } else {
        alert('LOSER!!');
    }
    gamePropal.style.display = "none";
    clearInterval(compteurInterval);
}