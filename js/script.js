// chiedo all'utente il suo cognome
var cognomeUtente = prompt('Inserisci il tuo cognome');

// lista cognomi
var cognomi = ["Bianchi","Rossi","Gentili","Buoni","Verdi","Blu"];

// aggiungo cognome utente alla lista dei cognomi
cognomi.push(cognomeUtente);

//ordino cognomi in ordine alfabetico
cognomi.sort();
