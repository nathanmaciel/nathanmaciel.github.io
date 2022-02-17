function usuario(nome, idade, sexo, casado){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.casado = casado;
}

do{
    var qtde = parseInt(prompt('Quantos usuários deverão ser salvos?'))

    if (Number.isNaN(qtde) || (qtde < 0))
    {
        alert('Você precisa inserir um número inteiro positivo')
    }
} while (Number.isNaN(qtde) || (qtde < 0))

var usuarios = new Array();

for (let i = 0; i < qtde; i++){
    let nome = prompt(`Qual o nome do ${i+1}º usuário?`);

    let idade = parseInt(prompt(`Qual a idade ${i+1}º usuário?`));
    
    let sexo = prompt(`Qual é o sexo do ${i+1}º usuário? Para masculino insira \"m\"; feminino, \"f\"; e outro, \"o\"`);

    let casado = prompt(`O ${i+1}º usuário é casado? Se sim, digite \"s\"; se não, \"n\"`);
        if (casado == "s"){
            casado = true;
        }
        if (casado == "n"){
            casado = false;
        }

    usuarios[i] = new usuario(nome, idade, sexo, casado);
    console.log((usuarios[i]))
}

for (let i in usuarios){

    let num = parseInt(i);

    document.write(`<p><strong>Usuário ${num+1}:</strong></p>`);

    document.write(`<p>Nome: ${(usuarios[i]).nome}</p>`);

    document.write(`<p>Idade: ${(usuarios[i]).idade} anos</p>`);

    if (usuarios[i].sexo == "m"){
        document.write(`<p>Sexo: Masculino</p>`);
    } else if (usuarios[i].sexo == "f"){
        document.write(`<p>Sexo: Feminino</p>`);
    } else if (usuarios[i].sexo == "o"){
        document.write(`<p>Sexo: Outro</p>`);
    }

    if (usuarios[i].casado == true){
        if (usuarios[i].sexo == "m"){
            document.write(`<p>Estado Civil: Casado</p>`);
        } else if (usuarios[i].sexo == "f"){
            document.write(`<p>Estado Civil: Casada</p>`);
        } else if (usuarios[i].sexo == "o"){
            document.write(`<p>Estado Civil: Casade</p>`);
        }
    } else if (usuarios[i].casado == false){
        if (usuarios[i].sexo == "m"){
            document.write(`<p>Estado Civil: Solteiro</p>`);
        } else if (usuarios[i].sexo == "f"){
            document.write(`<p>Estado Civil: Solteira</p>`);
        } else if (usuarios[i].sexo == "o"){
            document.write(`<p>Estado Civil: Solteire</p>`);
        }
    }
}
