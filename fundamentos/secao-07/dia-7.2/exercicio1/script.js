function recebendoNumero (value1, value2) {
  if (!value1 || !value2) {
    throw new Error('Preencha os campos para realizar a soma')
  }
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Informe dois números para realizar a soma')
  }
}

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    recebendoNumero(value1, value2);
    const result = Number(value1) + Number(value2);  // Transforme os valores em números através do método Number;
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  }
  catch (error){
    document.getElementById('result').innerHTML = `Erro: ${error.message}` 
  }
  finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
} 

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
