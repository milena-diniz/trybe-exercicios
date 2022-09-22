/* Atividade para fixar 01*/
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

/* Atividade para fixar 03*/

const base = 5
const heigth = 8
const area = base * heigth

const perimeter = 5 + 5 + 8 + 8
console.log(area)
console.log(perimeter)

/* Atividade para fixar 04*/
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

/* Atividade para fixar 06*/

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

/* Atividade para fixar 08*/

console.log(message)

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
