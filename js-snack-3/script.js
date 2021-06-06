/* Sommare 10 volte un numero inserito dall'utente */
var result = 0;

for (var x = 1; x <= 10; x++){
    var num = parseInt(prompt("inserisci numeri"));
    result += num;
}
document.getElementById("result").innerHTML = result;
