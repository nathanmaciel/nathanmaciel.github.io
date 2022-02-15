do {
    alert('Digite dois números inteiros.')

    var n1 = parseInt(prompt('Digite o primeiro número'));
    var n2 = parseInt(prompt('Digite o segundo número '));

    console.log(n1, n2)

    if (isNaN(n1) || isNaN(n2)){
        alert('Você precisa digitar números inteiros!')
    }
} while (isNaN(n1) || isNaN(n2));

document.write('<p>Valores iniciais</p><p>x = '+ n1 + ' | y = ' + n2)

let aux = n1;
n1 = n2;
n2 = aux;

document.write('<p>Valores iniciais</p><p>x = '+ n1 + ' | y = ' + n2)
