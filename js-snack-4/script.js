// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
var nomiLista = ["Francesco","Ludovico", "Sara", "Maria"];

var nome = prompt("inserisci il tuo nome");
var check = false;

for (var i = 0; i < nomiLista.length; i++) {
    if (nome === nomiLista[i]) {
        check = true;
    }
}
if (check) {
    alert("Sei in lista");
} else {
    document.getElementById("result").innerHTML = "Non sei in lista"
}
