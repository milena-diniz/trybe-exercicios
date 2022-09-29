// Para fixar
let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado'
}

diasDaSemana[1] //
console.log(diasDaSemana['1']) // domingo

// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

let name = 'Marta'
let lastName = 'Silva'
let age = 34
let medals = { golden: 2, silver: 3 }

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}
console.log(player)

//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
}

for (let key in names) {
  console.log('Olá ' + names[key])
}

//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (let key in car) {
  console.log(key, car[key])
}

/*  Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

function soma(a, b) {
  return a + b
}
console.log(soma(15, 2))

/* Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.*/
const num1 = 21
const num2 = 20

function maior(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

console.log(maior(num1, num2))

/* Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados. */

const number1 = 90
const number2 = 63
const number3 = 2

function max(a, b, c) {
  if (a > b && a > c) {
    return 'O maior número é ' + a
  }
}
console.log(max(number1, number2, number3))

/* Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”. */
const numer1 = 55

function positivoOuNegativo(param1) {
  if (param1 > 0) {
    return 'Positivo'
  } else if (param1 < 0) {
    return 'negativo'
  } else {
    return 'zero'
  }
}

console.log(positivoOuNegativo(numer1))

/* Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo. */

const side1 = 60
const side2 = 60
const side3 = 60

function triangulo(paran1, paran2, paran3) {
  let soma = paran1 + paran2 + paran3
  let todosOsAngulosSaoPositivos = paran1 > 0 && paran2 > 0 && paran3 > 0

  if (todosOsAngulosSaoPositivos && soma === 180) {
    return true
  } else if (soma !== 180) {
    return false
  } else {
    return 'Erro, esperado um número válido'
  }
}
console.log(triangulo(side1, side2, side3))
