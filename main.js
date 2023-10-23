/* Esercizio caffe 
let tazzeVendute = prompt("quante tazze hai venduto oggi?");
let prezzo = 2;
let guadagni = tazzeVendute * prezzo;
alert(guadagni); */

/* Calcolatore di età 

let anni = prompt("di che anno sei?");
let annoCorrente = 2023;
let età = annoCorrente - anni;
alert(età); */

/*Convertitore di temperatura

let gradiFahrenheit = prompt("quanti gradi ci sono oggi?");
let conversione = ((gradiFahrenheit - 32) * 5) / 9;
alert(conversione); */

/* Calcolatore di voti 

let studente1 = prompt("quanto hai preso?");
let studente1Numero = parseInt(studente1);
let studente2 = prompt("quanto hai preso?");
let studente2Numero = parseInt(studente2);
let studente3 = prompt("quanto hai preso?");
let studente3Numero = parseInt(studente3);
let somma = (studente1Numero + studente2Numero + studente3Numero) / 3;
alert(somma); */

/* Calcolatore di mancia 

let totaleConto = prompt("quanto hai pagato?");
let totaleContonumero = parseInt(totaleConto);
let mancia = prompt("che percentuale di mancia?");
let manciaNumero = parseInt(mancia);
let alessio = (totaleConto * mancia) / 100;
alert(alessio); */

/* Calcolatore film

let eta = prompt("Quanti anni hai?");
if (eta < 13) {
  alert("Puoi vedere solo film con classificazione PG");
} else if (eta >= 13 && eta <= 17) {
  alert("Puoi vedere film con classificazione PG e PG-13");
} else {
  alert("Puoi vedere tutti i film");
} */

/* Calcolatore di sconti

let prezzoOriginale = prompt("Qual'è il prezzo originale?");
let prezzoOriginalenumero = parseInt(prezzoOriginale);
let percentualeSconto = prompt("Qual'è la percentuale di sconto?");
let percentualeScontoNumero = parseInt(percentualeSconto);
let calcolo = (prezzoOriginale * percentualeSconto) / 100;
let prezzoFinale = prezzoOriginalenumero - calcolo;
alert(prezzoFinale);
if (percentualeScontoNumero > 50) {
  alert("Sei un grande!");
} */

/* Calcolatore di BMI 

let peso = prompt("qual'è il tuo peso in KG?");
let pesoNum = parseInt(peso);
let altezza = prompt("qual'è la tua altezza?");
let altezzaNum = parseInt(altezza);
let bmi = pesoNum / (altezzaNum * altezzaNum);
alert(bmi);
if (bmi < 18.5) {
  alert("sei sottopeso!");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  alert("ci puo stare!");
} else bmi >= 25;
{
  alert("vai a correre");
} */

/* Verificatore di anno bisestile 

let anno = prompt("dimmi un anno");
let annoNumero = parseInt(anno);

if (annoNumero % 4 === 0 && annoNumero % 100 !== 0) {
  alert("Anno bisestile");
} else if (annoNumero % 400 === 0) {
  alert("Anno bisestile");
} else {
  alert("Non bisestile");
} */

/* L'assegnatore di voti */

let punteggioTest = prompt("il tuo punteggio?");
if (punteggioTest >= 90) {
  alert("A");
} else if (punteggioTest >= 80 && punteggioTest < 90) {
  alert("B");
} else if (punteggioTest >= 70 && punteggioTest < 80) {
  alert("C");
} else if (punteggioTest >= 60 && punteggioTest < 70) {
  alert("D");
} else {
  alert("F");
}
