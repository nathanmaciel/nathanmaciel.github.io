
function validar(){
    let nome = document.getElementById('name');
    let text = document.getElementById('textbox');

    if (nome.value == ""){
        alert("preencha todos os campos!")
        nome.focus();
        return;
    }
   
   else if (text.value == ""){
        alert("preencha todos os campos!")
        text.focus();
        return;
    }else{
        alert("mensagem enviada!")
    }


}