// // Calcola la somma e la media dei primi 10 numeri.

var arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

result = 0;

for (x = 0; x < arrayNum.length; x++){
    result += parseInt(arrayNum[x]);
    media = result / 10;
}


document.getElementById("result").innerHTML = result;
document.getElementById("media").innerHTML = media;


//----------Senza Array----------

var sum = 0;
var max = 10;

for (x = 0; x <= max; x++){
    sum += x;
}
var media = sum/max;

console.log("la somma è " + sum);
console.log("la media è " + media)