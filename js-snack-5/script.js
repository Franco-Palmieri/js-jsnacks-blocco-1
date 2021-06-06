// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.
// - % 2 == 0 numero pari 
// - % 2 !== 0 numeri dispari
var listaNum =[]

for(x = 1; x <= 6; x++){
    var num = parseInt(prompt("inserisci numeri"));
    if (num % 2 == 0){
        document.getElementById("result").innerHTML += " " + num;
    }else if (num % 2 !== 0){
        listaNum.push(num)
    }
    
}