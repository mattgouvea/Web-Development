randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice = "./images/dice";

var dice1 = dice + randomNumber1 + ".png";
var dice2 = dice + randomNumber2 + ".png";

var die = document.querySelectorAll("img");

die[0].setAttribute("src", dice1);
die[1].setAttribute("src", dice2);

if (dice1 > dice2) {
    document.querySelector("h1").innerText = "Jogador 1 vence!"
}
else if (dice2 > dice1) {
    document.querySelector("h1").innerText = "Jogador 2 vence!"
}
else {
    document.querySelector("h1").innerText = "Empate."
}

