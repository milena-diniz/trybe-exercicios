/* Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
Crie uma variável let chamada birthYear e atribua a ela o ano em que você nasceu.
Utilize o console.log() para imprimir as constantes e variáveis que você criou.
Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔 */
const myName = 'Milena diniz Vieira'
const birthCity = 'Santo Antonio Do Sudoeste - PR'
// birthCity = 'Brusque'  Deu erro pois const não pode ser atribuido outro valor.
let birthYear = 1995
birthYear = 2030

console.log(myName)
console.log(birthCity)
console.log(birthYear)

/* Atividade para fixar 02*/

let patientId = '50'
let isEnrolled = true
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos'
}
const patientEmail = 'ana@email.com'

console.log(typeof patientId)

/*Crie uma constante chamada base e atribua a ela o valor 5.
Crie uma constante uma chamada heigth e atribua a ela o valor 8.
Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela heigth. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.*/

const base = 5
const heigth = 8
const area = base * heigth

const perimeter = 5 + 5 + 8 + 8
console.log(area)
console.log(perimeter)

/* /* Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima “Parabéns, você foi aprovada(o)!”
Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
Se a nota for menor que 60, imprima “Você foi reprovada(o)”
Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
Altere o valor da nota para verificar se as condições que você implementou funcionam.*/*/
const notaCandidata = 100

if (notaCandidata >= 80) {
  console.log('Parabéns, você foi aprovada(o)!')
} else if (notaCandidata < 80 && notaCandidata >= 60) {
  console.log('Você está na nossa lista de espera')
} else {
  console.log('Você foi reprovado')
}

/* Atividade para fixar 05*/

const comida = 'pão na chapa'
const bebida = 'cafézinho'

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)')
} else {
  console.log('Acho que houve um engano com meu pedido')
}

/* Crie uma constante chamada “currentHour”, que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.
Crie uma variável chamada “message” que, inicialmente, é uma string vazia.
Implemente condicionais para que:
Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.
Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.
Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.
Se o horário estiver entre 11 e 14, insira “Hora do almoço!!!” na variável “message”.
Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.
Agora imprima a variável message fora das suas condições.*/

const currentHour = 15
let message = ''

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir'
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D'
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?'
} else if (
  (currentHour >= 11 && currentHou <= 12) ||
  (currentHour >= 12 && currentHour <= 13)
) {
  message = 'Hora do almoço'
} else {
  message = 'Hmmm, cheiro de café recém-passado'
}

/* Atividade para fixar 07*/

let weekDay = 'quarta-feira'

if (
  weekDay == 'segunda-feira' ||
  weekDay == 'terça-feira' ||
  weekDay == 'quarta-feira' ||
  weekDay == 'quinta-feira' ||
  weekDay == 'sexta-feira'
) {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D')
} else {
  console.log('FINALMENTE, denscanso merecido UwU')
}
console.log(message)

/* Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
Caso 'aprovada', imprima “Parabéns, você foi aprovada(o)!”.
Caso 'lista', imprima “Você está na nossa lista de espera”.
Caso 'reprovada', imprima “Você foi reprovada(o)”.
Caso default, imprima a mensagem de “Informação incorreta”.*/

let candidata = 'kkkkkk'

switch (candidata) {
  case 'aprovada':
    console.log('Parabéns, você foi aprovada(o)!')
    break

  case 'lista':
    console.log('Você está na nossa lista de espera')
    break

  case 'reprovada':
    console.log('Você foi reprovada(o)')
    break

  default:
    console.log('Informação incorreta')
}
