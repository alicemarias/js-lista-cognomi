// lista cognomi
var cognomi = ["Bianchi","Rossi","Gentili","Buoni","Verdi","Blu"];

// chiedo all'utente il suo cognome
var cognomeUtente = prompt('Inserisci il tuo cognome');

var elementoListaCognomi = document.getElementById('listacognomi');

//se il cognome inserito è vuoto, richiedo il cognome finche l'utente nn lo scrive
while(cognomeUtente.length == 0){
  cognomeUtente = prompt("errore, il cognome non è valido");
}
// aggiungo cognome utente alla lista dei cognomi
cognomi.push(cognomeUtente);

//ordino cognomi in ordine alfabetico
cognomi.sort();

//stampa la lista
// uso ciclo for, per ogni elemento array stampa una li in cognomi
for (var i = 0; i <  cognomi.length; i++) {
  var contenutoAttuale = elementoListaCognomi.innerHTML;
  var contenutoAggiornato = elementoListaCognomi.innerHTML = contenutoAttuale + '<li>' + cognomi[i] + '</li>';
}

//stampa posizione in lista dell'cognomeUtente
var posizionearray = cognomi.indexOf(cognomeUtente);
