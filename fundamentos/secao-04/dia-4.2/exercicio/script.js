//Percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index])
}

// Some todos os valores contidos no array e imprima o resultado;

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let sun = 0

for (let index = 0; index < numbers1.length; index += 1) {
  sun += numbers1[index]
}

console.log(sun)

//Calcule e imprima a média aritmética dos valores contidos no array; A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let result = 0

for (let index = 0; index < numbers2.length; index += 1) {
  result += numbers2[index]
}
let aritmetica = result / 10

console.log(aritmetica)

if (aritmetica > 20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor ou igual a 20')
}

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let higherNumber = numbers[0]

for (let index = 1; index < numbers3.length; index += 1) {
  if (numbers3[index] > higherNumber) {
    higherNumber = numbers3[index]
  }
}

console.log(higherNumber)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let resultado = 0

for (let index = 0; index < numbers4.length; index += 1) {
  if (numbers4[index] % 2 !== 0) {
    resultado += 1
  }
}

if (resultado === 0) {
  console.log('nenhum valor ímpar encontrado')
} else {
  console.log(result)
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers5 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let maiorNumero = numbers[0]

for (let index = 1; index < numbers5.length; index += 1) {
  if (numbers5[index] < maiorNumero) {
    maiorNumero = numbers5[index]
  }
}

console.log(maiorNumero)

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let contador = []

for (let index = 1; index < 25; index += 1) {
  contador.push(index / 2)
}
console.log(contador)
