/*Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
se il numero è presente nella lista dei numeri generati, la partita termina,
altrimenti continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
i 16 numeri vietati / mina, devono essere tutti diversi, non possono esserci doppioni;
l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi. */

// Il computer deve generare 16 numeri casuali da 1 a 100.
var mine = [];
while (mine.length<16){
  var numRand = getRandomInt(1, 101);
  var found = check(numRand , mine);
  if ( found == false) {
    mine.push(numRand);
  }
}
console.log("mine da evitare" , mine.sort(function(a,b){return a-b}));

// l’utente inserisce un numero da 1 a 100 alla volta
var numeriUtente = [];
var score = 0;
var morto = false;                                                                                         

while ( morto == false && score < 84){
  ask = parseInt(prompt("inserisci un numero da 1 a 100."));
  var found = check(ask, mine);

  if (isNaN(ask) || ask <= 0 || ask > 100){
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

if (score == 84){
  alert("hai vinto");
  console.log("hai vinto");
}
console.log("numeri inseriti dall'utente " , numeriUtente);
console.log("punteggio",score);


var ricerca = check(numeriUtente , mine);


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