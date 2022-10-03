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
  const weekDaysList = document.querySelector('.week-days') // Lista de dias da semana

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index]
    const dayListItem = document.createElement('li')
    dayListItem.innerHTML = days

    weekDaysList.appendChild(dayListItem)
  }
}

createDaysOfTheWeek()

const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
]

function createDayCalendar() {
  // cria dias do mês
  const primeiraSemana = document.querySelector('#days')

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    const valorDoIndice = decemberDaysList[i]
    const creatList = document.createElement('li')
    creatList.innerHTML = valorDoIndice

    if (valorDoIndice === 24 || valorDoIndice === 31) {
      creatList.className = 'day holiday'
      primeiraSemana.appendChild(creatList)
    } else if (
      valorDoIndice === 4 ||
      valorDoIndice === 11 ||
      valorDoIndice === 18
    ) {
      creatList.className = 'day holiday'
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

function button(string) {
  const pai = document.querySelector('.buttons-container')
  const button = document.createElement('button')

  button.innerHTML = string
  button.id = 'btn-holiday'
  pai.appendChild(button)
}
button('Feriados')

function mudaACorDeFundo() {
  const button = document.querySelector('#btn-holiday')
  const allButtons = document.querySelectorAll('.holiday')

  button.addEventListener('click', function () {
    for (let i = 0; i < allButtons.length; i += 1) {
      if (allButtons[i].style.backgroundColor === white) {
        allButtons[i].style.backgroundColor = 'rgb(238,238,238'
      } else {
        allButtons[i].style.backgroundColor = 'white'
      }
    }
  })
}
mudaACorDeFundo()
