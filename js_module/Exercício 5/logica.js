const adder = document.getElementsByTagName('input')[0]
const btn_add = document.getElementsByClassName('addbtn')[0]
const tarefas = document.getElementsByClassName('tarefas')[0]
const excluir = document.getElementsByClassName('excluir')
const box = document.getElementsByClassName('box')

var store = new Array();
var aux = localStorage.getItem('tarefa1')
var aux2 = 0

while (aux != null){
    store[aux2] = aux;
    aux2++;
    aux = localStorage.getItem(`tarefa${aux2+1}`)
}

console.log(store)

for (let i = 0; i < store.length; i++){
    var nbox = document.createElement('div')
    var added = document.createElement('p')
    var nexcluir = document.createElement('button')

    added.innerText = store[i];
    nexcluir.innerText = 'Excluir';

    nbox.appendChild(added);
    nbox.appendChild(nexcluir);
    tarefas.appendChild(nbox);

    nbox.classList.add('box')
    added.classList.add('added')
    nexcluir.classList.add('excluir')
}

aux2 = 1;

btn_add.addEventListener('click', () => {
    var nv_tarefa = adder.value;

    if (nv_tarefa.length == 0){
        alert('Você precisa dar um nome a uma nova tarefa')
    } else {
        var nbox = document.createElement('div')
        var added = document.createElement('p')
        var nexcluir = document.createElement('button')

        added.innerText = nv_tarefa;
        nexcluir.innerText = 'Excluir';

        nbox.appendChild(added);
        nbox.appendChild(nexcluir);
        tarefas.appendChild(nbox);
        
        nbox.classList.add('box')
        added.classList.add('added')
        nexcluir.classList.add('excluir')



        localStorage.setItem(`tarefa${aux2}`, nv_tarefa)
        
        aux2++;
        adder.value = ''
    }
})

document.addEventListener('click', (event) => {
    for (let i = 0; i < Array.from(box).length; i++){
    if (event.target == excluir[i]){
        tarefas.removeChild(box[i])
        for(let j = i+1; Array.from(box); i++){
            localStorage.removeItem(`tarefa${j}`)
            localStorage.setItem(`tarefa${j}`, localStorage.getItem(`tarefa${j+1}`))
        }
        localStorage.removeItem(`tarefa${Array.from(box).length}`)
    }
}})

document.addEventListener('keyup', (event) => {
    if (event.key == 'Enter'){
        btn_add.click()
    }
})


