//Maneira que aprendemos de inicio
// VALE A PENA DIZER QUE SE TIVER ALGUM PARAMETRO VAI ENTRAR DENTRO DOS ()
function funcaoNormal() {
  console.log('funcao normal');
}
funcaoNormal();

//Atribuimos uma funcao a variavel const
const funcaoAnonima = function(){
  console.log('Voce é uma funcao anonima');
}
funcaoAnonima();

//Arrow Function
const funcaoFlecha = () => {
  console.log('Função Arrow');
}
funcaoFlecha();

//Exemplo
//function cumprimentar (nome) {
  //return 'Salve ' + nome;
//}

const cumprimentar = (nome) => 'Salve ' + nome;
console.log(cumprimentar('Léo'));
console.log(cumprimentar('Enza'));

const zeroParametros = () => { /* codigo aqui */ };
const semParameteos = _ => { /* codigo aqui */ };
const umParametro = parametroSemParenteses => { /* codigo aqui */ }; // Por boa pratica sempre usar parenteses
const maisDeUmParametro = (parametro1, parametro2) => { /* codigo aqui */ }