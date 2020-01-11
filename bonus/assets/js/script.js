/*Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
se il numero è presente nella lista dei numeri generati, la partita termina,
altrimenti continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
i 16 numeri vietati / mina, devono essere tutti diversi, non possono esserci doppioni;
l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi. */

/* BONUS: all’inizio il software richiede anche una difficoltà
all’utente che cambia il range di numeri casuali.
Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con
difficoltà 2=> da 1 a 50 */

// difficoltà selezionata
var personaIntelligente = false;
while(test == false){
  var diff = parseInt(prompt("scegli il livello : 0(1-100)/ 1(1-80)/ 2(1-50)"));
  if(isNaN(diff) || diff < 0 || diff > 2){
    alert("valore inserito non corretto");
  } else {
    personaIntelligente = true;
  }
}

// Il computer deve generare 16 numeri casuali da 1 a 100.
var numeroMassimo;
var mine = [];

switch (diff) {
  case 0: numeroMassimo = 100; break;
  case 1: numeroMassimo = 80; break;
  case 2: numeroMassimo = 50; break;
};

while (mine.length<16){
  var numRand = getRandomInt(1, numeroMassimo);
  var found = check(numRand , mine);
  if ( found == false) {
    mine.push(numRand);
  }
}
console.log("mine da evitare" , mine.sort(function(a,b){return a-b}));

// l’utente inserisce un numero da 1 a 100 alla volta
var numeriDaInserire;
var numeriUtente = [];
var score = 0;
var morto = false;
var indicazione;

switch (diff){
  case 0 : numeriDaInserire = 84; indicazione = "inserisci un numero da 1 a 100."; break;
  case 1: numeriDaInserire = 64;  indicazione = "inserisci un numero da 1 a 80."; break;
  case 2 : numeriDaInserire = 34; indicazione = "inserisci un numero da 1 a 50."; break;
};

while ( morto == false && score < numeriDaInserire){
  ask = parseInt(prompt(indicazione));
  var found = check(ask, mine);

  if (isNaN(ask) || ask <= 0 || ask > numeroMassimo){
    alert("valore inserito non corretto");
  } else if (found == false) {
    if (numeriUtente.includes(ask)) {
      alert("numero già inserito");
    } else {
      numeriUtente.push(ask);
      score++;
    }
  }else{
    alert("sei morto");
    morto = true;
    console.log("mina colpita: ",ask);
  } 
}

if (score == numeriDaInserire){
  alert("hai vinto");
  console.log("hai vinto");
}
console.log("numeri inseriti dall'utente " , numeriUtente);
console.log("punteggio", score);

// blocco funzoni

// funzione numero random
function getRandomInt(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// funzione controllo array
function check(value, array){
  var found = false;
  var i = 0;
  while (found == false && i < array.length){
    if (array[i] == value) {
      found = true;
    }
    i++
  }
  return found;
}