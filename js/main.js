'use strict';

// DEFINISCO ARRAY CONTENENTE GLI OGGETTI DELLA SPESA
const listaSpesa = ['Aqua', 'Vino', 'Birra', 'Crodini', 'Pasta', 'Banane', 'Latte', 'Carciofi', 'Pomodori', 'Pesto'];
console.log(listaSpesa);

// PRENDO LA UL DELL'HTML
const listaHtml = document.querySelector('ul');
console.log(listaHtml);

// VARIABILE ITERAZIONE VALORE INIZIALE
let i = 0;

// VARIABILE LI DA CREARE
let currentLi;

// CICLO WHILE PER MOSTRARE GLI OGGETTI DELLA SPESA
while(i < listaSpesa.length) {
  // MOSTRO IN CONSOLE PER OGNI ITERAZIONE L'OGGETTO DELLA SPESA
  console.log(`L elemento ${i+1} è ${listaSpesa[i]}`);
  // AGGIUNGO ALLA UL DEL MIO HTML I VARI LI E CI INSERISCO IL CONTENUTO CON TEMPLATE LITERAL E INTERPOLAZIONE
  listaHtml.innerHTML += `<li>${listaSpesa[i]}</li>`;
  // ASSEGNO ALLA VARIABILE L'ELEMENTO LI APPENA CREATO E LO MOSTRO SULLA CONSOLE
  currentLi = document.querySelector(`li:nth-child(${i+1})`);
  console.log(currentLi);
  i++;
}

