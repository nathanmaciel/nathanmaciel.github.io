let txt = prompt('Digita um textinho aí pra nós :)')

let txtUp = txt.toUpperCase();

let txtLo = txt.toLowerCase();

document.write(`<p><strong>Seu texto:</strong> ${txt}</p>`);

document.write(`<p><strong>Seu texto em caixa alta:</strong> ${txtUp}</p>`);

document.write(`<p><strong>Seu texto em minusculas:</strong> ${txtLo}</p>`);


let letras = txt.split("");
for (i of letras){
console.log(i);
}

