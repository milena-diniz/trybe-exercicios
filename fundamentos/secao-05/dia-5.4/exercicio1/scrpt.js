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
      const body = document.getElementsByTagName('body')[0]

      let cor = 'black'

      switch (body.style.backgroundColor) {
        case 'black':
          cor = 'white'
          break
        case 'white':
          cor = 'black'
          break
        default:
          break
      }
      body.style.backgroundColor = cor
      localStorage.setItem('corDeFundo', cor)
      break
    case 'Cor do texto':
      for (let i = 0; i < 3; i += 1) {
        const corDoTexto = document.querySelectorAll('.fonteColor')[i]
        let corFonte = 'green'

        switch (corDoTexto.style.color) {
          case 'green':
            corFonte = 'orange'
            break
          case 'orange':
            corFonte = 'green'
            break
          default:
            break
        }
        corDoTexto.style.color = corFonte
        localStorage.setItem('corTexto', corFonte)
      }
      break

    case 'Tamanho da fonte':
      const tamanhoDaFonte = document.getElementsByTagName('p')[0]
      let fontSize = '10px'

      switch (tamanhoDaFonte.style.fontSize) {
        case '10px':
          fontSize = '50px'
          break
        case '50px':
          fontSize = '10px'
          break

        default:
          break
      }
      tamanhoDaFonte.style.fontSize = fontSize
      localStorage.setItem('fonte', fontSize)
      break
    /*  ------------------------------------------------------------------  */
    case 'Espaçamento entre as linhas do texto':
      const espacamento = document.getElementsByTagName('p')[0]
      let tamanhoDoEspacamento = ''

      switch (espacamento.style.lineHeight) {
        case '':
          tamanhoDoEspacamento = '2.0'
          break
        case '2.0':
          tamanhoDoEspacamento = ''
          break
        default:
          break
      }

      espacamento.style.lineHeight = tamanhoDoEspacamento
      localStorage.setItem('espacamentoEntreLinhas', tamanhoDoEspacamento)

      break
    /*  ------------------------------------------------------------------  */
    case 'Tipo da fonte':
      const tipoDaFonte = document.getElementsByTagName('p')[0]
      let p = ''

      switch (tipoDaFonte.style.fontFamily) {
        case '':
          p = 'monospace'
          break
        case 'monospace':
          p = ''
          break
        default:
          break
      }

      tipoDaFonte.style.fontFamily = p
      localStorage.setItem('setFont', p)

      break
    default:
      break
  }
}

function get() {
  let corDeFundo = localStorage.getItem('corDeFundo')
  if (corDeFundo) {
    const body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = corDeFundo
  }

  for (let i = 0; i < 3; i += 1) {
    let corDaFont = localStorage.getItem('corTexto')
    if (corDaFont) {
      const corDoTexto = document.querySelectorAll('.fonteColor')[i]
      corDoTexto.style.color = corDaFont
    }
  }

  let tamanhoDaFonte = localStorage.getItem('fonte')
  if (tamanhoDaFonte) {
    let fontSize = document.getElementsByTagName('p')[0]
    fontSize.style.fontSize = tamanhoDaFonte
  }

  let espacamento = localStorage.getItem('espacamentoEntreLinhas')
  if (espacamento) {
    let p = document.getElementsByTagName('p')[0]
    p.style.lineHeight = espacamento
  }

  let getFont = localStorage.getItem('setFont')
  if (getFont) {
    let tipoDaFonte = document.getElementsByTagName('p')[0]
    tipoDaFonte.style.fontFamily = getFont
  }
}

get()
