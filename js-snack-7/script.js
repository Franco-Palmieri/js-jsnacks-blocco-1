// Stampa le potenze di 2 fino a 1000.

for (x = 0; x <= 1000; x++){
    document.getElementById("result").innerHTML += Math.pow(2, x) + "</br>";
    console.log(Math.pow(2, x));
}