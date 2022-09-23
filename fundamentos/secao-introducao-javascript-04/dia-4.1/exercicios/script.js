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

/* Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
Bonus: use somente um if. */

const f = 5
const g = 4
const h = 11

let isEven = false

if (f % 2 === 0 || g % 2 === 0 || h % 2 === 0) {
  isEven = true
}
console.log(isEven)

/* Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
Bonus: use somente um if.*/

const w = 2
const z = 4
const y = 10

let start = false

if (f % 2 !== 0 || g % 2 !== 0 || h % 2 !== 0) {
  start = true
}
console.log(start)

/* Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal */

const valorDoCusto = 10
const valorDoVenda = 27

if (valorDoCusto >= 0 && valorDoVenda >= 0) {
  let valorDoCustoTotal = valorDoCusto * 1.2
  let lucroTotal = (valorDoVenda - valorDoCustoTotal) * 1000
  console.log(lucroTotal)
} else {
  console.log('Erro, corrija os valores de entrada')
}

/* Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.

De olho na dica 👀: que tal identificar as alíquotas com variáveis de nomes explicativos? */
