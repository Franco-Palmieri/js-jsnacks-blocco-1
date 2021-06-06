// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente attraverso un prompt.
var userNum = parseInt(prompt("inserisci un numero"));

for (x = 1; x <= userNum; x++){
    document.getElementById("result").innerHTML += Math.pow(x, 3) + "</br>"
}