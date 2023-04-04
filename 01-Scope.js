// Hoisting

imprimir();
function imprimir(){
  console.log('Ola Mundo');
}// Isso funciona por conta do hoisting

console.log(nome); // posso usar variavel antes de declarar
var nome = 'Leo'; // troca por let e const e vai dar erro 

// Entendendo Escopo

// Var, let e const se comportam no escopo
if (true) {
  let xablau = 'vaza escopo'; // Isso é o escopo local do if / se alterar o let por var vai vazar pro global!
}
console.log(xablau); // Isso é o escopo global

// O var vaza muito e nunca vamos usar var.