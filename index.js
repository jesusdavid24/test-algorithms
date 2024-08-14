
// Puede usar pseudocódigo o el lenguaje de su elección (C#j Javaj etc.) para estos puntos.


// A. Escriba un algoritmo que imprima los números del 1 al 100, pero con las siguientes consideraciones:
// - Si el numero es divisible por 3, se debe imprima “Bing”
// - Si el numero es divisible por 5, se debe imprima “Go”
// - Si se cumplen ambas condiciones (divisible por 3 y por 5)j se debe imprima. “Bingo”


const generateBingoSequence = (start, end) => {
  let numbers = [];

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbers.push('Bingo'); 
    } else if (i % 3 === 0) {
      numbers.push('Bin'); 
    } else if (i % 5 === 0) {
      numbers.push('Go'); 
    } else {
      numbers.push(i); 
    }
  }

  return numbers;
}

console.log(generateBingoSequence(1, 100));


// Escrib un algoritmo para calcular e imprimirlos primeros 50 números primos.

const generatePrimeNumber = (start, end) => {
  let primeNumbers = [];

  for (let i = start; i <= 50; i++) {
    if (i % 2 != 0 ) {
      primeNumbers.push(i);
    }     
  }

  return primeNumbers;
}

console.log(generatePrimeNumber(1, 100));

// Dada una cadena de texto compuesta por n palabras separadas por espacio (n > 1)j escriba un 
// algoritmo para escribir las palabras de la cadena en orden inverso. Asuma la cadena como un array de 
// caracteres.

// Ejemplo: Input: “prueba de lógica”, Output: “lógica de prueba"

const wordReverse = (sentence) => {
  const words = sentence.split(' ');
  const reverse = words.reverse();
  const stringReverse = reverse.join(' ');

  return stringReverse;
}

console.log(wordReverse('hola mundo esto es un prueba'));