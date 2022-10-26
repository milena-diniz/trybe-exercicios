//O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((n) => n === name);

console.log(hasName(names, 'Ana'));

//O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:

const people = [
  { name: 'Mateus', age: 19 },
  { name: 'José', age: 19 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((callback) => callback.age >= minimumAge)
};

console.log(verifyAges(people, 18));