// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

var userTextOne = prompt("inserisci una parola");
var userTextTwo = prompt("inserisci un'altra parola");
console.log(userTextOne.length)

if (userTextOne.length > userTextTwo.length){
    document.getElementById("result").innerHTML = userTextTwo + " " + userTextOne;
}else if (userTextOne.length < userTextTwo.length){
    document.getElementById("result").innerHTML = userTextOne + " " + userTextTwo;
}else {
    document.getElementById("result").innerHTML = "hanno la stessa dimenzione";
}