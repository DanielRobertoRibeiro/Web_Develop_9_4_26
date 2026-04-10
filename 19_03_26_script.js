// tipos primitios
//boolean
var boolean = false;
console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}` );

var number = 1;
console.log(`A variável ${number} tem o tipo ${typeof(number)}` );

// usando variavel global 
var nome = 'Daniel';

// usando variavel local
function nomeDaFuncao(){
    var sobrenome= 'Ribeiro';
    console.log(sobrenome);
}

console.log(nome);
nomeDaFuncao();

// comparação
var comparacao = "0" == 0;
console.log(comparacao);

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// operadores aritméticos
var multi = 5 * 56 ;
console.log(multi);

var divisao = 50 / 2 ;
console.log(divisao);

// operadores relacionais
// > , <, ==, !=, <=, >=
// maior ou igual
var maiorOuIgual = 5 >=6 ; 
console.log(maiorOuIgual);

var diferente = 4 != 8;
console.log(diferente);

// operadores logicos
// && , || (ou), !(not)
var e = true && true;
console.log(e);

var ou = true || false;
console.log(ou);

var not = !true;
console.log(not);
