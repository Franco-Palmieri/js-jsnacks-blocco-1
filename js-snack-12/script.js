// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di 3 invitati.
var listName = ["Francesco", "Carlo", "Anna", "Antonio", "Simone", "Luca"];
var lastName = ["Monti", "Sena", "Farano", "Barbagallo", "Santoro", "Pigliacelli"];
var listaInvitati = [];

// for (x = 0; x < 3; x++){
//     var randomName = listName[Math.floor(Math.random() * listName.length)];
//     var randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
//     var invitati = randomName + " " + randomLastName;
    
//     if (!listaInvitati.includes(invitati)){
//     listaInvitati.push(invitati);
//     }
//     document.getElementById("lista").innerHTML += "<li>" + invitati + "</li>"; 
// }

// --------------Versione While -----------

while(listaInvitati.length < 3){
    var nome = listName[Math.floor(Math.random() * listName.length)];
    var cognome = lastName[Math.floor(Math.random() * lastName.length)];
    var invitato = nome + " " + cognome;
    
    if(!listaInvitati.includes(invitato)){
        document.getElementById("lista-while").innerHTML += "<li>" + invitato + "</li>";   
        listaInvitati.push(invitato);
    }

}