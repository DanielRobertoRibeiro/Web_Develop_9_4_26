Teste para ver no console a mensagem ou não


 let umNumero = 5;

 if(umNumero ==5) {
    console.log('Verá essa mensagem!');
}
if (umNumero ==6){
    console.log('Não verá essa mensagem');
}



teste para ver a cor que foi digitada na opção


let umaCor = prompt('digite uma cor:');

if (umaCor == 'vermelho'){
    alert('a cor é vermelha');
}else { 
    alert('a cor não é vermelha')
}



teste para escrever nomes e checar/retornar o vazio


let nomeUsuario = prompt('digite o seu nome aqui:');
if ((nomeUsuario =='') || (nomeUsuario == null)) {
    alert('nome não inserido');
    nomeUsuario = prompt('por favor, digite o se nome:')
}else{
    alert(`Nome de usuário registrado: ${nomeUsuario}!`)
}



teste com combustiveis e ver se retorna o erro


let combustivel = prompt('Qual tipo de combustivel você usa?')
if(combustivel == 'gnv'){
    alert('o veiculo se alimenta por gás')
}
else if (combustivel == 'gasolina'){
    alert('o veiculo se alimenta por gasolina podium')
}
else if (combustivel == 'álcool'){
    alert('o veiculo se alimenta por álcool piratex')
}
else if (combustivel == 'díesel'){
    alert('o veiculo se alimenta por díesel s500')
}
else{
    alert('seu carro é eletrico ou vc não tem')
}



desafio de sala deu ruim aqui, tentar em casa depois


let numero = parseInt(prompt('digite um numero entre 1 a 5'))
if( (1 <= numero) && (numero <= 5))



teste para numeros de 1 a 50, retornar o intervalo correto e o erro


let numeroUsuario = parseInt(prompt('digite um numero entre 1 a 50:'))

if (numeroUsuario <= 10){
     alert(`numero digitado ${numeroUsuario}, está entre 1 a 10`)
 }else if (numeroUsuario <= 20){
     alert(`numero digitado ${numeroUsuario}, está entre 11 a 20`)
 }else if (numeroUsuario <= 30){
     alert(`numero digitado ${numeroUsuario}, está entre 21 a 30`)
 }else if (numeroUsuario <= 40){
     alert(`numero digitado ${numeroUsuario}, está entre 31 a 40`)
 }
 else if (numeroUsuario <= 50){
     alert(`numero digitado ${numeroUsuario}, está entre 41 a 50`)
 }else{ (numeroUsuario => 50)
    alert('digite um numero valido!')
 }



let Nome = prompt('digite um nome:');
let eVazio = nome =='';

 if (eVazio) {
    alert('nome vazio!')
    // alert(`Nome: ${nome}`)
}else{
    alert(`nome: ${Nome}`)
    //açert(`nome vazio!`)

}

(!eVazio) anula a negação, tendo que tirar do comentário as opções no if e else para rodar corretamente


TESTE COM MULTIPLAS 

let nome = prompt('digite um nome:');

if((nome != '') && ((nome == 'Ana') || (nome == 'ana') || (nome == 'ANA'))){
    alert(`olá, ${nome}`)
}else {
    alert('digite novamente o seu nome')
}
