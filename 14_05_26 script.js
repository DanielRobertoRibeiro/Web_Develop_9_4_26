let numero = parseInt(prompt("Inserir Número"));

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
     console.log(numero + " X " + i + " = " + resultado);
}

let entrada = prompt('digite um dado:')

while (entrada!= 'sair'){
    alert(`O usuario colocou + ${entrada}`);
    
    entrada = prompt('Insira outro dado:')
}

function mostrarMenores(numero){
    let resultado = '';
    for (let i = 1; i < numero; i++){
        resultado += i+ ' ';
    }
    alert(resultado);
}

let numero = parseInt(prompt('Digite um número de 1 a 10'))

mostrarMenores(numero);

