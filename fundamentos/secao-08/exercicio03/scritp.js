const verifica = (number, callback) => {
  (number === callback()) ? console.log('Parabéns você ganhou') : console.log('Tente novamente');
}

const numeroAleatorio = () => {
  const numero = Math.floor((Math.random() * 5) + 1);
  return numero
}

verifica(4 , numeroAleatorio)
