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

```json
console.log(checkBingo(1, 100));
```

## Cálculo de Números Primos

Este algoritmo calcula e imprime los primeros 50 números primos.

### Ejecución

La función getFirstFiftyPrimeNumbers() retorna un array con los primeros 50 números primos.

```json
  console.log(getFirstFiftyPrimeNumbers());
```

## Inversión de Palabras en una Cadena

Este algoritmo toma una cadena de texto compuesta por palabras separadas por espacios y devuelve la cadena con las palabras en orden inverso.

### Ejecución

La función reverseWord(text) recibe un string y devuelve el string con las palabras invertidas.

```json
console.log(reverseWord('Este es un mensaje de prueba'));
```

## Nota

Para ver los resultados, puedes ejecutar el código en la consola del navegador. Alternativamente, si utilizas Visual Studio Code, puedes instalar la extensión Quokka.js, que permite ver los resultados directamente dentro del editor.



