function createDaysOfTheWeek() {
  //  cria dias da semana
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ]
  let weekDaysList = document.querySelector('.week-days') // Lista de dias da semana

  for (let index = 0; index < weekDays.length; index += 1) {
    let days = weekDays[index]
    let dayListItem = document.createElement('li')
    dayListItem.innerHTML = days

    weekDaysList.appendChild(dayListItem)
  }
}

createDaysOfTheWeek()
/*---------------------------------------------------------------------------------------------------------------------------------------*/
const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
]

function createDayCalendar() {
  // cria dias do mês
  let primeiraSemana = document.querySelector('#days')

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let valorDoIndice = decemberDaysList[i]
    let creatList = document.createElement('li')

    creatList.innerHTML = valorDoIndice

    if (valorDoIndice === 24 || valorDoIndice === 31) {
      creatList.className = 'day holiday'
      primeiraSemana.appendChild(creatList)
    } else if (
      valorDoIndice === 4 ||
      valorDoIndice === 11 ||
      valorDoIndice === 18
    ) {
      creatList.className = 'day friday'
      primeiraSemana.appendChild(creatList)
    } else if (valorDoIndice === 25) {
      creatList.className = 'day holiday friday'
      primeiraSemana.appendChild(creatList)
    } else {
      creatList.className = 'day'
      primeiraSemana.appendChild(creatList)
    }
  }
}
createDayCalendar()

/*---------------------------------------------------------------------------------------------------------------------------------------*/
function button(string) {
  let pai = document.querySelector('.buttons-container')
  let button = document.createElement('button')

  button.innerHTML = string
  button.id = 'btn-holiday'
  pai.appendChild(button)
}
button('Feriados')

/*---------------------------------------------------------------------------------------------------------------------------------------*/
function mudaACorDeFundo() {
  let button = document.querySelector('#btn-holiday')
  let allButtons = document.querySelectorAll('.holiday')
  let corDeFundo = 'white'

  button.addEventListener('click', function () {
    for (let i = 0; i < allButtons.length; i += 1) {
      if (allButtons[i].style.backgroundColor === corDeFundo) {
        allButtons[i].style.backgroundColor = 'rgb(238,238,238'
      } else {
        allButtons[i].style.backgroundColor = corDeFundo
      }
    }
  })
}
mudaACorDeFundo()

/*---------------------------------------------------------------------------------------------------------------------------------------*/
function buttonSexta(string) {
  let container = document.querySelector('.buttons-container')
  let buttonSextou = document.createElement('button')

  buttonSextou.innerHTML = string
  buttonSextou.id = 'btn-friday'
  container.appendChild(buttonSextou)
}
buttonSexta('Sexta-feira')
/*---------------------------------------------------------------------------------------------------------------------------------------*/
function sextou(friday) {
  let button = document.querySelector('#btn-friday')
  let allButtons = document.getElementsByClassName('friday')
  let sextaFeira = 'SEXTOU'

  button.addEventListener('click', function () {
    for (let i = 0; i < allButtons.length; i += 1) {
      if (allButtons[i].innerHTML !== sextaFeira) {
        allButtons[i].innerHTML = sextaFeira
      } else {
        allButtons[i].innerHTML = friday[i]
      }
    }
  })
}
sextou([4, 11, 18, 25])
/*---------------------------------------------------------------------------------------------------------------------------------------*/
function eventTarget() {
  let days = document.querySelectorAll('.day')

  console.log(days)

  for (let i in days) {
    let day = days[i]
    if (!day) continue

    day.addEventListener('mouseover', function (e) {
      e.target.style.fontSize = '30px'
      e.target.style.fontWeight = '600'
    })
  }
}
eventTarget()
function eventTarget2() {
  let days = document.querySelectorAll('.day')
  days.addEventListener('mouseout', function (e) {
    e.target.style.fontSize = '20px'
    e.target.style.fontWeight = '600'
  })
}

eventTarget2()
/*---------------------------------------------------------------------------------------------------------------------------------------*/
