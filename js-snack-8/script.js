// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

var numUser = prompt("inserisci un numero");
var inputLen = numUser.length; 

if (inputLen !== 4){ //se il prompt non è composto da 4 caratteri manda alert
    alert("Aoooo")
}else if (isNaN(numUser)){ //se non è un numero manda alert
    alert("Aoo")
} else {
    var result = 0;

    for (x = 0; x < inputLen; x++){
    result += parseInt(numUser[x]); //il risultato è la somma di ogni carattere del prompt
    }                               
    document.getElementById("result").innerHTML = result;
}
