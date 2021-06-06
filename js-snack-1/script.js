// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

var userNumOne = parseInt(prompt("Inserisci il primo numero"));
var userNumTwo = parseInt(prompt("inserisci il tuo secondo numero"));

if (userNumOne > userNumTwo){
    document.getElementById("result").innerHTML = "il numero piu alto è " + userNumOne;
} else if (userNumOne < userNumTwo){
    document.getElementById("result").innerHTML = "il numero piu alto è " + userNumTwo;
}else{
    document.getElementById("result").innerHTML = "i numeri sono uguali"
}

// --------

