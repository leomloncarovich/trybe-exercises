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

// Exercicio 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

const pecaXadrez = 'Rainha';

switch (pecaXadrez) {
  case 'Peão':
    console.log('Pode andar 2 casas para frente em seu primeiro movimento.');
  case 'Peão':
    console.log('Pode andar 1 casa para frente.');
    break;
  case 'Torre':
    console.log('Pode andar quantas casas quiser para frente e para os lados.');
    break;
  case 'Cavalo':
    console.log('Pode andar em L, sendo 3 casas para qualquer lado e uma casa para o lado oposto.');
    break;
  case 'Bispo':
    console.log('Pode andar quantas casas quiser em diagonal.');
    break;
  case 'Rainha':
    console.log('Pode andar em qualquer direção e quantas casas quiser.');
    break;
  case 'Rei':
    console.log('Pode andar uma casa para qualquer direção.');
    break;
  default:
    console.log('Selecione uma peça!');
    break;
}

// Exercicio 7- Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

let notaPorcento = 89;

if(notaPorcento >= 90) {
  console.log('Você recebeu nota A');
}else if(notaPorcento >= 80){
  console.log('Você recebeu nota B');
}else if(notaPorcento >= 70){
  console.log('Você recebeu nota C');
}else if(notaPorcento < 70 && notaPorcento >= 60){
  console.log('Você recebeu nota D');
}else if(notaPorcento <60 && notaPorcento >= 50){
  console.log('Você recebeu nota E')
}else{
  console.log('Você recebeu nota F')
}

// Exercicio 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

let number1 = 1;
let number2 = 27;
let number3 = 82;
let isEven = false;

if(number1 %2 === 0){
  isEven = true;
}else if(number2 %2 === 0){
  isEven = true;
}else if(number3 %2 === 0){
  isEven = true;
}else{
  isEven = false
}
console.log(isEven)

// Exercicio 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

let number4 = 11;
let number5 = 20;
let number6 = 82;
let isOdd = false;

if(number4 %2 > 0){ //Pode ser usado !== 
  isOdd = true;
}else if(number5 %2 > 0){
  isOdd = true;
}else if(number6 %2 > 0){
  isOdd = true;
}else{
  isOdd = false
}
console.log(isOdd)

// Exercicio 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.

let compra = 17;
let venda = 39;
if(compra >= 0 && venda >= 0){
  let totalCustoDoProduto = compra * 1000;
  let lucroDosProdutos = venda * 1000 - totalCustoDoProduto; 
  console.log(lucroDosProdutos);
}else{
  console.log('Os Valores nao podem ser menores que 0.')
}

// Exercicio 11 - Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
// A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto

// Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00 terá o primeiro desconto referente à contribuição do INSS. O cálculo deve ser o demonstrado a seguir.
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:
// R$ 2.670,00 - salário com INSS já deduzido.
// 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25.
// R$ 142,80 - parcela a ser deduzida do imposto de renda.
// Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.
// Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.

let salario = 15000;
let aliquota;
let impostoDeRenda;

if(salario <= 1556.94){
  aliquota = salario * 0.08;
}else if(salario <= 2594.92){
  aliquota = salario * 0.09
}else if(salario <= 5189.82){
  aliquota = salario * 0.11
}else{
  aliquota = 570.88
}

let salarioDescontado = salario - aliquota;

if(salarioDescontado <= 1903.98){
  impostoDeRenda = 0;
}else if(salarioDescontado <= 2826.65){
  impostoDeRenda = (salarioDescontado *0.075) - 142.80;
}else if(salarioDescontado <= 3751.05){
  impostoDeRenda =  (salarioDescontado *0.15) - 354.80;
}else if(salarioDescontado <= 4664.68){
  impostoDeRenda = (salarioDescontado *0.225) - 636.13;
}else{
  impostoDeRenda = (salarioDescontado *0.275) - 869.36;
}
let salarioFinal = salarioDescontado - impostoDeRenda;
console.log('Salario Final é ' + (salarioFinal))