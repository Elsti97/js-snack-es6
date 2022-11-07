// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let min = 2;
let max = 4;

// * forEach
// let arrayCompresi1 = [];

// myArray.forEach((name, numName) => {
//     if(numName >= min && numName <= max){
//         arrayCompresi1.push(name);
//     }
// })

// console.log(arrayCompresi1);

// * filter
let arrayCompresi2 = myArray.filter((name, numName) => {
  if( numName >= min && numName <= max){
      return true
  }
})

console.log(arrayCompresi2);