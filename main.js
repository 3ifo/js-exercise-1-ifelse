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
}
if (13 <= eta < 17);
{
  alert("Puoi vedere solo film con classificazione PG PG 13");
}
if (eta > 17);
{
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
