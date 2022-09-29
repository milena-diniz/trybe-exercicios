const header = document.getElementById('header-container')
header.style.backgroundColor = 'rgb(0, 176, 105)'

// const container = document.getElementById('container')
// container.style.backgroundColor = ''

const emergencyTasks = document.querySelector('.emergency-tasks')
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)'

const tituloLadoEsquerdo = document.querySelectorAll('.emergency-tasks h3')
for (let i = 0; i < tituloLadoEsquerdo.length; i += 1) {
  tituloLadoEsquerdo[i].style.backgroundColor = 'rgb(165, 0, 243)'
}

const noEmergence = document.querySelector('.no-emergency-tasks')
noEmergence.style.backgroundColor = 'rgb(249, 219, 94)'

const tituloLadoDireito = document.querySelectorAll('.no-emergency-tasks h3')
for (let i = 0; i < tituloLadoDireito.length; i += 1) {
  tituloLadoDireito[i].style.backgroundColor = 'rgb(35, 37, 37)'
}

const footer = document.getElementById('footer-container')
footer.style.backgroundColor = 'rgb(0, 53, 51)'
