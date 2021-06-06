// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

var userNum = parseInt(prompt("inserisci numero"));

if (userNum % 2 === 0){
    document.getElementById("result").innerHTML = userNum;
}else if(userNum % 2 !== 0){
    document.getElementById("result").innerHTML = userNum + 1;
}