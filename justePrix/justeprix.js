//Générer un chiffre aléatoire
// user fera des propositions
//continuer tant qu'il n'a pas la proposition

let numberToFind = 0;

document.getElementById('beginGame').addEventListener("click", function () {
    //lancer la partie
    //récupérer un chiffre aléatoire
    numberToFind = getRandomInt(1000);
    alert(numberToFind);

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
        console.log("C'est plus");
    } else if (numberToFind < numberPropal) {
        console.log("c'est moins");
    } else if (numberToFind == numberPropal) {
        console.log("c'est gagner");
    }
}