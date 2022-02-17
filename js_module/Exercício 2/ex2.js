let txt = prompt('Digita um textinho aí pra nós :)')

let txtUp = txt.toUpperCase();

let txtLo = txt.toLowerCase();

document.write(`<p>Seu texto: ${txt}</p>`);

document.write(`<p>Seu texto em caixa alta: ${txtUp}</p>`);

document.write(`<p>Seu texto em minusculas: ${txtLo}</p>`);


let letras = txt.split("");
for (i of letras){
console.log(i);
}

