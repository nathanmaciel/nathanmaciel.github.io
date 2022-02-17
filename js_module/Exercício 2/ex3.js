alert('Este site transforma números binários em decimais')

do{ //recebendo um número binário válido
    var bin = prompt('Digite o número binário:')

    var bin_valido = true;
    for (let i of bin){
        if ((bin.charCodeAt(i) != 48) && (bin.charCodeAt(i) != 49)){
            bin_valido = false;
        }
    }

    if (bin_valido == false){
        alert('Números binários contém apenas 0 (zeros) e 1 (uns)! Insira um número válido :)')
    }
} while (bin_valido == false)

var dec = 0; //inicializando o número na base 10

var dig = bin.length; //guardando o tamanho do número binário

for (let i = (dig - 1); i >=0; i--){
    mult = parseInt(bin[i]);
    dec += mult * 2 ** (dig - 1 - i);
}

alert(`O número:\n${bin}\nrepresentado em binário equivale ao seguinte número em decimais:\n${dec}`)

