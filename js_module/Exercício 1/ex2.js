do {
    alert('Digite três números inteiros.')

    var l1 = parseInt(prompt('Digite o primeiro número'));
    var l2 = parseInt(prompt('Digite o segundo número '));
    var l3 = parseInt(prompt('Digite o terceiro número'));

    console.log(l1, l2, l3)

    if (isNaN(l1) || isNaN(l2)|| isNaN(l3)){
        alert('Você precisa digitar números inteiros!')
    }
} while (isNaN(l1) || isNaN(l2) || isNaN(l3));

if (l1 >= l2 && l1 >= l3){
    alert("O maior número é " + l1 +"!");
} else if (l2 >= l3 && l2 > l1){
    alert("O maior número é " + l2 +"!");
} else if (l3 > l1 && l3 > l1){
    alert("O maior número é " + l3 +"!");
}