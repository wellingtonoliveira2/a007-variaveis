let nome;
let idade;
console.log(typeof nome, typeof idade);
// Undefined, pois não há falta de valor na variável
nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");
console.log(typeof nome, typeof idade);
// Encontrei duas variáveis do tipo string
console.log(`Olá ${nome} você tem ${idade} anos.`);
