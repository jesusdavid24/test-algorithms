# Descripción del Proyecto

Este proyecto contiene tres algoritmos implementados en JavaScript que cumplen con diferentes desafíos de programación. A continuación, se describen las funcionalidades y cómo ejecutar cada uno de ellos.

## Contenido

1. [Algoritmo "Bingo"](#algoritmo-bingo)
2. [Cálculo de Números Primos](#cálculo-de-números-primos)
3. [Inversión de Palabras en una Cadena](#inversión-de-palabras-en-una-cadena)

---

## Algoritmo "Bingo"

Este algoritmo imprime los números del 1 al 100, con las siguientes consideraciones:
- Si el número es divisible por 3, se imprime "Bing".
- Si el número es divisible por 5, se imprime "Go".
- Si el número es divisible por ambos, se imprime "Bingo".

### Ejecución

Puedes ejecutar este algoritmo llamando a la función `checkBingo(start, end)`, donde `start` y `end` son los números que definen el rango a evaluar. En el ejemplo incluido, se utiliza el rango del 1 al 100.

```javascript
console.log(checkBingo(1, 100));
```

```javascript
Array(100) [
  1, 2, 'Bin', 4, 'Go', 'Bin', 7, 8, 'Bin', 'Go', 11, 'Bin', 13, 14, 'Bingo', 16,
  17, 'Bin', 19, 'Go', 'Bin', 22, 23, 'Bin', 'Go', 26, 'Bin', 28, 29, 'Bingo', 31,
  32, 'Bin', 34, 'Go', 'Bin', 37, 38, 'Bin', 'Go', 41, 'Bin', 43, 44, 'Bingo', 46,
  47, 'Bin', 49, 'Go', 'Bin', 52, 53, 'Bin', 'Go', 56, 'Bin', 58, 59, 'Bingo', 61,
  62, 'Bin', 64, 'Go', 'Bin', 67, 68, 'Bin', 'Go', 71, 'Bin', 73, 74, 'Bingo', 76,
  77, 'Bin', 79, 'Go', 'Bin', 82, 83, 'Bin', 'Go', 86, 'Bin', 88, 89, 'Bingo', 91,
  92, 'Bin', 94, 'Go', 'Bin', 97, 98, 'Bin', 'Go'
]
```

## Cálculo de Números Primos

Este algoritmo calcula e imprime los primeros 50 números primos.

### Ejecución

La función getFirstFiftyPrimeNumbers() retorna un array con los primeros 50 números primos.

```javascript
  console.log(getFirstFiftyPrimeNumbers());
```

```javascript
Array(50) [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73,
  79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163,
  167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229
]
```

## Inversión de Palabras en una Cadena

Este algoritmo toma una cadena de texto compuesta por palabras separadas por espacios y devuelve la cadena con las palabras en orden inverso.

### Ejecución

La función reverseWord(text) recibe un string y devuelve el string con las palabras invertidas.

```javascript
console.log(reverseWord('Este es un mensaje de prueba'));
```

```javascript
'prueba de mensaje un es Este'
```

## Nota

Para ver los resultados, puedes ejecutar el código en la consola del navegador. Alternativamente, si utilizas Visual Studio Code, puedes instalar la extensión Quokka.js, que permite ver los resultados directamente dentro del editor.



