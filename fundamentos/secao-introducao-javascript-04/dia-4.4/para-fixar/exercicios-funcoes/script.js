//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindromo(string) {
  let splitString = string.split('') // o método split() retorna um novo array | "hello".split("") | ["h", "e", "l", "l", "o"]
  let reverseArray = splitString.reverse() // o método reverse() inverte o array recém-criado | ["h", "e", "l", "l", "o"].reverse(); | ["o", "l", "l", "e", "h"]
  let joinArray = reverseArray.join('') // o método join() uni todos os elementos do array em uma string |  ["o", "l", "l", "e", "h"].join("")  | resultado = "olleh"

  if (joinArray === string) {
    return 'É um polindromo'
  } else {
    return 'Não é um polindromo'
  }
}

console.log(palindromo('arara'))

// outra forma
function palindromo2(string) {
  let splitString = string.split('').reverse().join('')

  if (splitString === string) {
    return 'É um polindromo'
  } else {
    return 'Não é um polindromo'
  }
}

console.log(palindromo2('arara'))

// <---------------------------------->

// DESENVOLVA UMA FUNÇÃO QUE SOMA TODOS OS VALORES DE UM ARRAY

function sunFunction(array) {
  let result = 0
  for (let i = 0; i < array.length; i += 1) {
    result += array[i]
  }
  return result
}

console.log(sunFunction([1, 2, 3, 4, 5]))

// Desenvolva uma função

function nbaChampion(lakers, celtics) {
  let countLakers = 0
  let countCeltics = 0

  for (let i = 0; i < lakers.length; i += 1) {
    if (lakers[i] > celtics[i]) {
      countLakers += 1
    } else {
      countCeltics += 1
    }
  }
  if (countLakers > countCeltics) {
    return 'Lakers foi o time campeão' + countLakers + ' vitórias'
  } else {
    return 'Celtics foi o time campeão com ' + countCeltics + ' vitórias'
  }
}
console.log(nbaChampion([106, 98, 107], [108, 1, 110]))

//
