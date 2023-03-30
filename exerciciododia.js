// Exercicio 1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados.
let a = 12;
let b = 15;
console.log(a * a + b / a - b);

// Exercicio 2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.
let c = 10;
let d = 15;
if (c > d) {
  console.log("O valor C é maior que o valor D");
} else {
  console.log("O valor D é maior que o valor C");
}

// Exercicio 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.
let e = 18;
let f = 12;
let g = 17;
if (e > f && e > g) {
  console.log("A variavel E é o maior valor");
} else if (f > e && f > g) {
  console.log("A variavel F é o maior valor");
} else {
  console.log("A variavel G é o maior valor");
}

// Exercicio 4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.
let number = 0;
if (number > 0) {
  console.log("Esse valor é positivo!");
} else if (number < 0) {
  console.log("Esse valor é negativo!");
} else if (number === 0) {
  console.log("Esse valor é zero!");
}

// Exercicio 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
let ang1 = 100;
let ang2 = 70;
let ang3 = 10;

let somadosang = ang1 + ang2 + ang3;
let positiveangles = ang1 > 0 && ang2 > 0 && ang3 > 0;
if(positiveangles){
if (somadosang === 180) {
  console.log(true);
} else{
  console.log(false)
} 
}
else {
  console.log("ERRO");
}
