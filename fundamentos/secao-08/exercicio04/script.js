const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificacao = (rightAnswers, studentAnswers) => {
  let pontuacao = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    if (studentAnswers[i] === 'N.A' ) {
     continue;
    } else if( rightAnswers[i] !== studentAnswers[i]) {
     pontuacao -= 0.5
    } else {
     pontuacao += 1
    }
  }
  return pontuacao
}

const gabarito = (rightAnswers, studentAnswers, callback) =>  {
  return `Pontuação: ${callback(rightAnswers, studentAnswers)}`
}
console.log(gabarito(rightAnswers, studentAnswers, verificacao));
