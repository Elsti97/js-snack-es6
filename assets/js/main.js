// ! Snack 1
// Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4

let min = 2;
let max = 4;

// * forEach
let arrayCompresi1 = [];

myArray.forEach((name, numName) => {
  if(numName >= min && numName <= max){
    arrayCompresi1.push(name);
  }
})

console.log(arrayCompresi1);

// * filter
let arrayCompresi2 = myArray.filter((name, numName) => {
  if( numName >= min && numName <= max){
    return true
  }
})

console.log(arrayCompresi2);



// ! Snack 2
// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

// * 1-
let maiuscolo = students.map((studente) =>{
  return studente.name.toUpperCase();
})

console.log(maiuscolo);

// * 2-
let studenti70 = [];

students.forEach((studente) =>{
  if(studente.grades > 70){
    studenti70.push(studente.name);
  }
})

console.log(studenti70);


// * 3-
let studenti120 = [];

students.forEach((studente) =>{
  if(studente.grades > 70 && studente.id > 120){
    studenti120.push(studente.name);
  }
})

console.log(studenti120);



// Snack 3
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let limite = 100;

const bici = [
  {
    name: 'Alan',
    peso: 3,
  },
  {
    name: 'Colnago',
    peso: 5,
  },
  {
    name: 'Daccordi',
    peso: 9,
  },{
  name: 'Blasi',
  peso: 8,
  }
];


bici.forEach(({peso}) => {
  if(peso < limite){
    limite = peso
  }
})

let biciLeggera = bici.find(({peso}) => {
  return peso == limite;
})

document.getElementById('biciMinore').innerHTML = `La bici "${biciLeggera.name}" è quella più leggera: ${biciLeggera.peso} kg`
