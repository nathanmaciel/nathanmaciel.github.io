const adder = document.getElementsByTagName('input')[0]
const btn_add = document.getElementsByClassName('addbtn')[0]
const tarefas = document.getElementsByClassName('tarefas')[0]
const excluir = document.getElementsByClassName('excluir')
const box = document.getElementsByClassName('box')

console.log(adder)

btn_add.addEventListener('click', () => {
    var nv_tarefa = adder.value;

    if (nv_tarefa.length == 0){
        alert('Você precisa dar um nome a uma nova tarefa')
    } else {
        var box = document.createElement('div')
        var added = document.createElement('p')
        var excluir = document.createElement('button')

        added.innerText = nv_tarefa;
        excluir.innerText = 'Excluir';

        box.appendChild(added);
        box.appendChild(excluir);
        tarefas.appendChild(box);
        
        box.classList.add('box')
        added.classList.add('added')
        excluir.classList.add('excluir')

        adder.value = ''

    }
})

console.log(box)
console.log(excluir)


document.addEventListener('click', (event) => {
    for (let i = 0; i < Array.from(box).length; i++){
    if (event.target == excluir[i]){
        tarefas.removeChild(box[i])
    }
}})

document.addEventListener('keyup', (event) => {
    if (event.key == 'Enter'){
        btn_add.click()
    }
})


