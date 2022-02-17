alert('Este site transforma números binários em decimais')

do{
    var bin = prompt('Digite o número binário:')

    var bin_valido = true;
    for (let i of bin){
        if ((bin.charCodeAt(i) != 48) && (bin.charCodeAt(i) != 49)){
            bin_valido = false;
            console.log(bin.charCodeAt(i));
        }
    }

    if (bin_valido == false){
        alert('Números binários contém apenas 0 (zeros) e 1 (uns)! Insira um número válido :)')
    }

    console.log(bin_valido);
} while (bin_valido == false)