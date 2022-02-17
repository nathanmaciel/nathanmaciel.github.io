
do{
    var qtde = parseInt(prompt('Quantos números você quer digitar?'));
    if (Number.isNaN(qtde) ||  qtde < 0){
        alert('A quantidade de números precisa ser um inteiro positivo ;)')
    }
    console.log(Number.isNaN(qtde) )
} while (Number.isNaN(qtde) ||  (qtde < 0));

var num = new Array();

for (let i = 0; i < qtde; i++){
    do{
        num[i] = parseFloat(prompt(`Digite o ${i+1}º número`));
        if (Number.isNaN(num[i])){
            alert('Você precisa digirar um número ;) \nE lembre-se de usar ponto e não vírgula para representar números decimais!')
        } 
    }while (Number.isNaN(num[i]))
}

var soma = num.reduce((soma, elemento) => soma + elemento);
console.log(soma);

var media = soma / qtde;
media = media.toFixed(2)

var qdrd = new Array(qtde);

for (let j in num){
    qdrd[j] = num[j] * num[j];
}
console.log(qdrd);

var rz2 = new Array(qtde);

for (let l in num){
    rz2[l] = (Math.sqrt(num[l])).toFixed(2);
}
console.log(rz2);

var rz3 = new Array(qtde);

for (let k in num){
    rz3[k] = (Math.cbrt(num[k])).toFixed(2);
}

console.log(rz3);

document.write('<h1>Resultados</h1>')

document.write('<h2>Você digitou</h2>')
    for (let i of num){
        document.write(`| ${i} `)
    }
    document.write(`|<br>`)

document.write('<h2>Soma</h2>')
    document.write(`${soma} `)

document.write('<h2>Média</h2>')
    document.write(`${media} `)

document.write('<h2>Elementos ao quadrado</h2>')
    for (let i of qdrd){
        document.write(`| ${i} `)
    }
    document.write(`|<br>`)

document.write('<h2>Raiz quadrada dos elementos</h2>')
    for (let i of rz2){
        document.write(`| ${i} `)
    }
    document.write(`|<br>`)

document.write('<h2>Raiz cúbica dos elementos</h2>')
    for (let i of rz3){
        document.write(`| ${i} `)
    }
    document.write(`|`)


