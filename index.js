
// Puede usar pseudocódigo o el lenguaje de su elección (C#j Javaj etc.) para estos puntos.


// A. Escriba un algoritmo que imprima los números del 1 al 100, pero con las siguientes consideraciones:
// - Si el numero es divisible por 3, se debe imprima “Bing”
// - Si el numero es divisible por 5, se debe imprima “Go”
// - Si se cumplen ambas condiciones (divisible por 3 y por 5)j se debe imprima. “Bingo”


const checkBingo = (start, end) => {

  if ( !start || !end ) throw 'No fue proporcionado un rango valido';
  if ( isNaN(start) || isNaN(end)) throw 'Proporcione numeros validos';
  if ( start >= end ) throw 'El numero de inicio no puede ser mayor o igual al numero final';

  return new Array(( end - start ) + 1)
    .fill(null) 
    .map((_, index) => {
      const number = ( start + index );

      return number % 3 === 0 && number % 5 === 0
        ? 'Bingo'
        : number % 3 === 0
        ? 'Bin'
        : number % 5 === 0
        ? 'Go'
        : number;
    })
}

console.log(checkBingo(1, 100));


// Escribir un algoritmo para calcular e imprimir los primeros 50 números primos.

const checkPrimeNumber = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }    
  }

  return !!(number > 1);
}

const getFirstFiftyPrimeNumbers = () => {
  const result = [];
  let number = 1;

  do {
    if (checkPrimeNumber(number)) {
      result.push(number);
    }
    number++;
  } while (result.length < 50);

  return result;
}

console.log(getFirstFiftyPrimeNumbers());


// Dada una cadena de texto compuesta por n palabras separadas por espacio (n > 1)j escriba un 
// algoritmo para escribir las palabras de la cadena en orden inverso. Asuma la cadena como un array de 
// caracteres.

// Ejemplo: Input: “prueba de lógica”, Output: “lógica de prueba"

const stringToEvaluate = 'Este es un mensaje de prueba';

const reverseWord = text => text.split(' ').reverse().join(' ');

console.log(reverseWord(stringToEvaluate));
