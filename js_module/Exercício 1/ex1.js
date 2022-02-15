do {
    alert('Vamos descobrir de que tipo é o seu triângulo?')

    var l1 = parseFloat(prompt('Digite o comprimento do primeiro lado'));
    var l2 = parseFloat(prompt('Digite o comprimento do segundo lado'));
    var l3 = parseFloat(prompt('Digite o comprimento do terceiro lado'));

    console.log(l1, l2, l3)

    if (isNaN(l1) || isNaN(l2)|| isNaN(l3)){
        alert('Você precisa digitar valores válidos!')
    }
} while (isNaN(l1) || isNaN(l2) || isNaN(l3));

if (l1 == l2 && l1 == l3){
    alert('O triângulo é equilátero!');
} else if (l1 == l2 ^ l2 == l3 ^ l1 == l3){
    alert('O triângulo é isóceles!');
} else {
    alert('O triângulo é escaleno');
}
