// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

var sum = 0

for (var x = 1; x <= 5; x++){
    var userNum = parseInt(prompt("inserisci numero"));
    sum += userNum;
}
document.getElementById("result-for").innerHTML = sum;

//----------------Con il While-----------

var result = 0;
var i = 1;

while (i <= 5){
    var userNum = parseInt(prompt("inserisci numero"));
    result += userNum;
    i++;
}
document.getElementById("result-while").innerHTML = result;