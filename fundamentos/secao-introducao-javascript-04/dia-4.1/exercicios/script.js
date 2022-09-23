/*Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/

const a = 5
const b = 10

console.log('Soma: ' + (a + b))
console.log('Subtração: ' + (a - b))
console.log('Multiplicação: ' + a * b)
console.log('Divisão: ' + a / b)
console.log('Módulo: ' + (a % b))

//Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

let numero1 = 12
let numero2 = 5

if (numero1 > numero2) {
  console.log('numero1 é maior')
} else if (numero1 < numero2) {
  console.log('numero2 é maior')
} else {
  console.log('numero1 e numero2 são iguais')
}

// Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const x = 3
const p = 8
const t = 10

if (x > p && x > t) {
  console.log('X é maior')
} else if (p > x && p > t) {
  console.log('P é maior')
} else {
  console.log('T é maior')
}

// Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

const number = 4

if (number > 0) {
  console.log('positive')
} else if (number < 0) {
  console.log('negative')
} else {
  console.log('zero')
}

/* 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */

const m = 60
const n = 60
const o = 60

const sun = m + n + o

if (sun === 180) {
  console.log('Verdadeiro')
} else {
  console.log('Falso')
}

/* Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

const chessPiece = 'CAVALO'

switch (chessPiece.toLowerCase()) {
  case 'torre':
    console.log('A torre -> se movimenta para frente e para trás ')
    break
  case 'bispo':
    console.log('O bispo - se movimenta da diagonal')
    break
  case 'cavalo':
    console.log('O cavalo - se movimenta em L')
    break
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.')
    break
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.')
    break
  case 'peão':
    console.log(
      'Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.'
    )
    break
  default:
    console.log('Erro, pela inválida')
    break
}

/* Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

const nota = 40

if (nota > 0 || nota > 100) {
  console.log('Erro, nota incorreta!')
} else if (nota >= 90) {
  console.log('A')
} else if (nota >= 80) {
  console.log('B')
} else if (nota >= 70) {
  console.log('C')
} else if (nota >= 60) {
  console.log('D')
} else if (nota >= 50) {
  console.log('E')
} else {
  console.log('F')
}
