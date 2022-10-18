const fatorial = number => {
  if (number > 1) {
    number * fatorial(number - 1);
  }
  return number
}

console.log(fatorial(4));