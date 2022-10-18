   const array = [13, 3, 4, 10, 7, 2];
// const index = [0,  1, 2, 3,  4, 5];

// const sortOddsAndEvens = (array) =>
function sortOddsAndEvens(array) {
  for (let i = 1; i < array.length; i += 1) { // pega o indice da vez que é i 1  =  3
    
    for (let j = 0; j < i; j += 1) { // verifica se o indice i é menor que o indice j 0 = 13  ..enquanto o indice j for menor que indece i faz isso
      if (array[i] < array[j]) { // se valor do indice 1 <  que valor do indice j= 0    - 3 < 13 
        
        let element = array[i]; // 3 = guarda o indice da vez , no caso 3
        array[i] = array[j]; // 3 vai ser substituido por 13 
        array[j] = element; // 13 vai ser substituido por 3
      }
    }
  }
  return array;
}
console.log(sortOddsAndEvens(array));
