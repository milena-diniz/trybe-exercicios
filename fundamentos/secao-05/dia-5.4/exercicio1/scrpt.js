let array = [
  'Cor de fundo da tela',
  'Cor do texto',
  'Tamanho da fonte',
  'Espaçamento entre as linhas do texto',
  'Tipo da fonte'
]

function button(array) {
  for (let i = 0; i < array.length; i += 1) {
    const localButton = document.querySelector('section')
    const createButton = document.createElement('button')

    createButton.innerHTML = array[i]

    localButton.appendChild(createButton)
    createButton.addEventListener('click', mudarFundoDaTela)
  }
}
button(array)

function mudarFundoDaTela(event) {
  const capture = event.target.innerHTML

  switch (capture) {
    case 'Cor de fundo da tela':
      for (let i = 0; i < 4; i += 1) {
        const body = document.querySelectorAll('.background')[i]
      }
      localStorage.setItem('corDeFundo', 'body')
      break
    case 'Cor do texto':
      for (let i = 0; i < 3; i += 1) {
        const corDoTexto = document.querySelectorAll('.fonteColor')[i]
        corDoTexto.style.color = 'red'
      }
      localStorage.setItem('corTexto', 'corDoTexto')

      break
    case 'Tamanho da fonte':
      const tamanhoDaFonte = document.getElementsByTagName('p')[0]
      tamanhoDaFonte.style.fontSize = '20px'
      localStorage.setItem('fonte', 'tamanhoDaFonte')

      break
    case 'Espaçamento entre as linhas do texto':
      const espacamento = document.getElementsByTagName('p')[0]
      espacamento.style.lineHeight = '2.5'
      localStorage.setItem('espacamentoEntreLinhas', 'espacamento')

      break
    case 'Tipo da fonte':
      const tipoDaFonte = document.getElementsByTagName('p')[0]
      tipoDaFonte.style.fontFamily = 'monospace'
      localStorage.setItem('font', 'tipoDaFonte')

      break
    default:
      break
  }
}

function set() {
  if (localStorage.length == 0) {
    localStorage.setItem('corDeFundo', (body.style.backgroundColor = 'grey'))
    localStorage.setItem('fonte', 'tamanhoDaFonte')
    localStorage.setItem('fonte', 'tamanhoDaFonte')
    localStorage.setItem('espacamentoEntreLinhas', 'espacamento')
    localStorage.setItem('font', 'tipoDaFonte')
  } else {
    for (let i = 0; i < 4; i += 1) {
      const background = document.querySelectorAll('.background')
      background.style.backgroundColor = localStorage.getItem('backgroundColor')
    }
  }
}
